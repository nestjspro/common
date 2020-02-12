import { AmqpConnection }  from '@nestjs-plus/rabbitmq';
import { Injectable }      from '@nestjs/common';
import { MessagingMethod } from './MessagingMethod';

@Injectable()
export class MessagingClient {

    public constructor(private readonly ampqConnection: AmqpConnection) {

    }

    public rpc<T>(exchange: string, routingKey: string, payload: MessagingMethod, timeout: number = 10000): Promise<T> {

        return this.ampqConnection.request({

            exchange,
            routingKey,
            payload,
            timeout

        });

    }

}
