import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBOptions }     from './DBOptions';

export class DBUtilities {

    public static getModule(dbOptions: DBOptions): DynamicModule {

        return TypeOrmModule.forRoot({

            type: 'mysql',
            host: process.env.DB_HOSTNAME || 'localhost',
            port: Number.parseInt(process.env.DB_PORT) || 3306,
            username: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'mysql',
            database: process.env.DB_NAME || 'nestjs',
            synchronize: dbOptions.synchronize || process.env.DB_SYNCHRONIZE === 'true',
            keepConnectionAlive: true,
            entities: dbOptions.entities

        });

    }

}
