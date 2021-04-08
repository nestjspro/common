import { SearchOperator } from './SearchOperator';

export class SearchCondition {

    condition: string;
    parameters?: { [ name: string ]: string };
    operator?: SearchOperator;

    public constructor(condition: string, parameters: { [ name: string ]: string }, operator?: SearchOperator) {

        this.condition = condition;
        this.parameters = parameters;

    }

}
