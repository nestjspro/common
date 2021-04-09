import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { SearchResponseGenerator } from './SearchResponseGenerator';
import { SearchResponseOptions } from './SearchResponseOptions';
import { PaginationSortDirection } from './PaginationSort';

export const SearchRegister = (options: SearchResponseOptions) => applyDecorators(
    ApiQuery({
        name: 'condition',
        isArray: true,
        explode: true,
        type: 'string',
        required: true,
        example: 'firstName = :name'
    }),
    ApiQuery({
        required: false,
        name: 'parameter',
        style: 'deepObject',
        explode: true,
        type: 'object',
        example: '{"name": "John"}'
    }),
    ApiQuery({
        name: 'operator',
        type: 'string',
        isArray: true,
        explode: true,
        required: false
    }),
    ApiQuery({ name: 'sort', type: 'string', required: false, example: 'myColumnA' }),
    ApiQuery({
        name: 'direction',
        type: 'string',
        enum: PaginationSortDirection,
        example: PaginationSortDirection.ASC,
        required: false
    }),
    ApiQuery({ name: 'limit', type: Number, example: 20, required: false }),
    ApiQuery({ name: 'page', type: Number, example: 1, required: false }),
    SearchResponseGenerator(options.type())
);
