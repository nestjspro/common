import { BadRequestException, createParamDecorator } from '@nestjs/common';
import { SearchCondition } from './SearchCondition';

export const SearchParams: () => ParameterDecorator = createParamDecorator((data, req) => {

    const { limit = 20, page = 1, sort, direction, condition, parameter, operator } = req.query;

    if (operator) {

        if (condition.length !== operator.length) {

            throw new BadRequestException('conditions and operators do not have the same count');

        }

    }

    const conditions: Array<SearchCondition> = [];

    for (let i = 0; i < condition.length; i++) {

        conditions.push({

            condition: condition[ i ],
            parameters: parameter,
            operator: operator[ i ]

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
