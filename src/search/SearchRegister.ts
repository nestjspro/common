import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { SearchResponseGenerator } from './SearchResponseGenerator';
import { SearchResponseOptions } from './SearchResponseOptions';

export const SearchRegister = (options: SearchResponseOptions) => applyDecorators(
    ApiQuery({
        name: 'condition',
        isArray: true,
        explode: false,
        schema: {

            type: 'object',
            properties: {

                condition: {

                    type: 'string'

                }

            }

        }
        
    }),
    ApiQuery({ name: 'limit', type: Number }),
    ApiQuery({ name: 'page', type: Number }),
    SearchResponseGenerator(options.type)
);
