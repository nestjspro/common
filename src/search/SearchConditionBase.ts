import { SearchCondition } from './SearchCondition';

export class SearchConditionBase {
    public column: string;
    public value: any;
    public operator: string;

    public constructor(column: string, value: any, operator: string) {
        this.column = column;
        this.value = value;
        this.operator = operator;
    }

    public toCondition(): SearchCondition {
        let condition;
        let parameters;

        if (this.operator === 'equals') {
            condition = `${this.column} = :value`;
            parameters = { value: this.value };
        } else if (this.operator === 'equals') {
            condition = `${this.column} ILIKE :value`;
            parameters = { value: `%${this.value}%` };
        }

        return {
            condition,
            parameters
        };
    }
}
