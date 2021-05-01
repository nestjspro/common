import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { ServerConfig } from './ServerConfig';

dotenv.config();

export class Server {

    public static async bootstrap(config: ServerConfig): Promise<NestExpressApplication> {

        const app = await NestFactory.create<NestExpressApplication>(module, config.origins ? { cors: { origin: config.origins } } : null);

        if (config.swagger) {

            const documentBuilder = new DocumentBuilder().setTitle(config.swagger.title)
                .setContact(config.swagger.contactName, config.swagger.contactUrl, config.swagger.contactEmail)
                .setDescription(config.swagger.description)
                .setExternalDoc(config.swagger.docsDescription, config.swagger.docsUrl)
                .setVersion(config.swagger.version)
                .addBearerAuth();

            config.swagger.serverUrls.forEach(url => documentBuilder.addServer(url));

            Object.keys(config.swagger.tags).forEach(key => {

                documentBuilder.addTag(key, config.swagger.tags[ key ]);

            });

            SwaggerModule.setup(config.swagger.path, app, SwaggerModule.createDocument(app, documentBuilder.build(), config.swagger.documentOptions), config.swagger.customOptions);

        }

        if (config.interceptors) {

            app.useGlobalInterceptors(...config.interceptors);

        }

        if (config.globalPipes) {

            app.useGlobalPipes(...config.globalPipes);

        }

        if (config.exceptionFilters) {

            app.useGlobalFilters(...config.exceptionFilters);

        }

        if (config.middlewares) {

            config.middlewares.forEach(middleware => app.use(middleware));

        }

        app.disable('x-powered-by');

        await app.listen(config.port);

        console.log(`${ new Date().toISOString() } ${ name } server started on port ${ config.port }`);

        return app;

    }

}
