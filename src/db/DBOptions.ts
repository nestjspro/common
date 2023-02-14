import { EntitySchema } from 'typeorm';

export class DBOptions {
    public synchronize?: boolean;
    public entities?: Array<Function | string | EntitySchema<any>>;
}
