import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { SearchCondition } from './SearchCondition';
import { SearchResponseGenerator } from './SearchResponseGenerator';
import { SearchResponseOptions } from './SearchResponseOptions';

export const SearchResponse = (options: SearchResponseOptions) => applyDecorators(
    ApiQuery({ name: 'condition', type: SearchCondition }),
    ApiQuery({ name: 'limit', type: Number }),
    ApiQuery({ name: 'page', type: Number }),
    SearchResponseGenerator(options.type)
);
