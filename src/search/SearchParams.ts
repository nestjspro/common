import { BadRequestException, createParamDecorator } from '@nestjs/common';
import { SearchCondition } from './SearchCondition';

export const SearchParams: () => ParameterDecorator = createParamDecorator((data, req) => {

    const { limit = 20, page = 1, sort, direction, condition, parameter, operator } = req.query;

    const conditions: Array<SearchCondition> = [];

    if (Array.isArray(condition)) {

        if (condition.length > 1 && !operator) {

            throw new BadRequestException('missing at least one operator');

        }

        if (Array.isArray(operator)) {

            if (condition.length > operator.length - 1) {

                throw new BadRequestException('conditions and operators do not have the same count');

            }

        }

        for (let i = 0; i < condition.length; i++) {

            conditions.push({

                condition: decodeURIComponent(condition[ i ]),
                parameters: parameter,
                operator: operator[ i ]

            });

        }

    } else {

        conditions.push({

            condition: decodeURIComponent(condition),
            parameters: parameter,
            operator: operator

        });

    }

    return {

        conditions,
        options: {

            limit, page, sort: {

                [ sort ]: direction

            }

        },
        operator: req.query.operator

    };

});
