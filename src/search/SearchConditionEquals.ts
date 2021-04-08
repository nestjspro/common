import { SearchConditionBase } from './SearchConditionBase';
import { SearchOperator } from './SearchOperator';

export class SearchConditionEquals extends SearchConditionBase {

    public constructor(column: string, value: any, operator: SearchOperator) {

        super(column, value, 'equals');

    }

}
