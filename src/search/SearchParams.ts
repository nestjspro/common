import { BadRequestException, createParamDecorator } from '@nestjs/common';
import { SearchCondition } from './SearchCondition';
import { PaginationSortDirection } from './PaginationSort';

export const SearchParams: () => ParameterDecorator = createParamDecorator((data, req) => {

    const { limit = 20, page = 1, sort, condition, parameter, operator } = req.query;

    let sortColumn;
    let sortDirection = PaginationSortDirection.ASC;

    if (sort) {

        const split = sort.split(',');

        if (split.length == 1) {

            sortColumn = split[ 0 ];

        } else if (split.length == 2) {

            [ sortColumn, sortDirection ] = split;

        } else {

            throw new BadRequestException('invalid sort');

        }

    }

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

                [ sortColumn ]: sortDirection

            }

        },
        operator: req.query.operator

    };

});
