import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { SearchCondition } from './SearchCondition';
import { SearchResponseGenerator } from './SearchResponseGenerator';
import { SearchResponseOptions } from './SearchResponseOptions';

export const SearchResponse = (options: SearchResponseOptions) => applyDecorators(
    ApiQuery({
        name: 'condition',
        isArray: true,
        type: SearchCondition,
        explode: true
    }),
    ApiQuery({ name: 'limit', type: Number }),
    ApiQuery({ name: 'page', type: Number }),
    SearchResponseGenerator(options.type)
);
