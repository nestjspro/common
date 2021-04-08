import { ApiResponse, getSchemaPath } from '@nestjs/swagger';
import { Type } from '@nestjs/common';

export const SearchResponseGenerator = <T extends any>(t: () => Type<T>, options: any = {}): MethodDecorator & ClassDecorator => {

    return ApiResponse({

        status: 200,
        schema: {

            type: 'object',
            properties: {

                results: {

                    type: 'array',
                    items: {

                        type: 'object',
                        $ref: getSchemaPath(t())

                    }

                },
                meta: {

                    type: 'object',
                    properties: {

                        total: {

                            type: 'number'

                        },

                        pages: {

                            type: 'number'

                        }

                    }

                }

            }

        }

    });

};
