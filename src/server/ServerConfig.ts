import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import { SwaggerSettings } from '../swagger/SwaggerSettings';
import { ExceptionFilter, ValidationPipe } from '@nestjs/common';
import { GlobalExceptionsFilter } from '../exceptions/GlobalExceptionsFilter';

export const middlewaresPlain = () => {

    return [

        compression

    ];

};

export const middlewaresJson = () => {

    return [

        compression,
        cookieParser,
        bodyParser.json(),
        bodyParser.urlencoded({ type: 'application/x-www-form-urlencoded', extended: true })

    ];

};

export class ServerConfig {

    public name: string;
    public module: any;
    public port: number;

    public globalPipes?: Array<ValidationPipe> = [ new ValidationPipe({

        transform: true,
        forbidUnknownValues: true

    }) ];
    public exceptionFilters?: Array<ExceptionFilter> = [ new GlobalExceptionsFilter() ];
    public interceptors?: Array<any>;
    public middlewares?: Array<any> = middlewaresJson();
    public origins?: Array<string>;
    public swagger?: SwaggerSettings;

    public constructor(config: ServerConfig) {

        Object.assign(this, config);

    }

}