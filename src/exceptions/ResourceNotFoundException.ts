import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Used to throw an exception when a resource could not
 * be located such as when querying for a database
 * record by id.
 */
export class ResourceNotFoundException extends HttpException {

    public constructor(message: string) {

        super(message, HttpStatus.NOT_FOUND);

    }

}
