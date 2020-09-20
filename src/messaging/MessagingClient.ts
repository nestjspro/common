import { AmqpConnection }  from '@nestjs-plus/rabbitmq';
import { Injectable }      from '@nestjs/common';
import { Options }         from 'amqplib';
import { MessagingMethod } from './MessagingMethod';

@Injectable()
export class MessagingClient {

    public constructor(public readonly ampqConnection: AmqpConnection) {

    }

    public publish<T>(exchange: string, routingKey: string, payload: T, options?: Options.Publish): void {

        this.ampqConnection.publish(exchange, routingKey, payload, options);

    }

    public rpc<S,T>(exchange: string, routingKey: string, payload: S, timeout: number = 10000): Promise<T> {

        return this.ampqConnection.request({

            exchange,
            routingKey,
            payload,
            timeout

        });

    }

}
