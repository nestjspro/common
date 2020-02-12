import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Used for returning permission denied/forbidden 403.
 */
export class ResourceForbiddenException extends HttpException {

    public constructor(message?: string) {

        super(message, HttpStatus.FORBIDDEN);

    }

}
