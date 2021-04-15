import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {

    private readonly boolPropertyName: string;
    private readonly properties: Array<string>;

    public constructor(boolPropertyName: string, properties: Array<string>) {

        this.boolPropertyName = boolPropertyName;
        this.properties = properties;

    }

    public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        return next.handle().pipe(map(data => {

            if (Array.isArray(data)) {

                for (let i = 0; i < data.length; i++) {

                    if (data[ i ][ this.boolPropertyName ]) {

                        for (let j = 0; j < this.properties.length; j++) {

                            data[ i ][ this.properties[ j ] ] = '';

                        }

                    }

                }

            } else {

                if (data[ this.boolPropertyName ]) {

                    for (let j = 0; j < this.properties.length; j++) {

                        data[ this.properties[ j ] ] = '';

                    }

                }

            }

            return data;

        }));

    }

}
