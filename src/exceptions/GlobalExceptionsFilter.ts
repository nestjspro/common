import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {

    public catch(exception: any, host: ArgumentsHost): void {


        const ctx = host.switchToHttp();
        const response: Response = ctx.getResponse<Response>();
        const request: Request = ctx.getRequest<Request>();
        const clazz = exception.constructor.name;

        if (process.env.DEBUG) {

            console.error(`GlobalExceptionsFilter.catch(): ${ JSON.stringify(exception) }`);
            console.error(`GlobalExceptionsFilter.catch(): class name = ${ clazz }`);

        }

        if (clazz === 'UnauthorizedException') {

            response.status(401).json({

                statusCode: exception.status,
                timestamp: new Date().toISOString(),
                path: request.url,
                response: exception.response

            });

        } else if (clazz === 'BadRequestException') {

            response.sendStatus(400);

        } else if (clazz === 'ResourceNotFoundException') {

            response.sendStatus(exception.status);

        } else if (clazz === 'ResourceForbiddenException') {

            response.sendStatus(exception.status);

        } else if (clazz === 'ResourceAlreadyExistsException') {

            response.sendStatus(exception.status);

        } else if (clazz === 'QueryFailedError') {

            if (exception.message.indexOf('duplicate key') >= -1) {

                response.sendStatus(HttpStatus.CONFLICT);

            }

        } else if (exception.status) {

            response.sendStatus(exception.status);

        } else {

            response.sendStatus(500);

        }

    }

}
