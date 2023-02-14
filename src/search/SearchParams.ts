import { BadRequestException, createParamDecorator } from '@nestjs/common';
import { SearchCondition } from './SearchCondition';

export const SearchParams: () => ParameterDecorator = createParamDecorator((data, req) => {
    let { limit = 20, page = 1, sort, direction, condition, parameter, operator } = req.query;

    const conditions: Array<SearchCondition> = [];

    if (!Array.isArray(operator)) {
        operator = [operator];
    }

    if (condition) {
        if (Array.isArray(condition)) {
            if (condition.length > 1 && !operator) {
                throw new BadRequestException('missing at least one operator');
            }

            if (condition.length === 1 || condition.length >= operator.length) {
                for (let i = 0; i < condition.length; i++) {
                    conditions.push({
                        condition: decodeURIComponent(condition[i]),
                        parameters: parameter,
                        operator: operator[i]
                    });
                }
            } else {
                throw new BadRequestException(
                    'conditions and operators do not have the same count'
                );
            }
        } else if (condition.length > 0) {
            conditions.push({
                condition: decodeURIComponent(condition),
                parameters: parameter,
                operator: operator
            });
        }
    }

    return {
        conditions,
        options: {
            limit,
            page,
            sort: {
                [sort]: direction
            }
        },
        operator: req.query.operator
    };
});
