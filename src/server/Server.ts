import { ValidationPipe }                 from '@nestjs/common';
import { NestFactory }                    from '@nestjs/core';
import { NestExpressApplication }         from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv                        from 'dotenv';
import { GlobalExceptionsFilter }         from '../exceptions/GlobalExceptionsFilter';
import { SwaggerSettings }                from '../swagger/SwaggerSettings';

dotenv.config();

export class Server {

    public static async bootstrap(module: any, name: string, port: number, swagger: SwaggerSettings, origins: Array<string>): Promise<NestExpressApplication> {

        const app = await NestFactory.create<NestExpressApplication>(module, {

            cors: {

                origin: origins

            }

        });

        const documentBuilder = new DocumentBuilder().setTitle(swagger.title)
                                                     .setContact(swagger.contactName, swagger.contactUrl, swagger.contactEmail)
                                                     .setDescription(swagger.description)
                                                     .setExternalDoc(swagger.docsDescription, swagger.docsUrl)
                                                     .setVersion(swagger.version)
                                                     .addBearerAuth();

        swagger.serverUrls.forEach(url => documentBuilder.addServer(url));

        Object.keys(swagger.tags).forEach(key => {

            documentBuilder.addTag(key, swagger.tags[ key ]);

        });

        SwaggerModule.setup(swagger.path, app, SwaggerModule.createDocument(app, documentBuilder.build()));

        app.useGlobalPipes(new ValidationPipe({ transform: true }));
        app.useGlobalFilters(new GlobalExceptionsFilter());
        app.disable('x-powered-by');

        await app.listen(port);

        console.log(`${ new Date().toISOString() } ${ name } server started on port ${ port }`);

        return app;

    }

}
