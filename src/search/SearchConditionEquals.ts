import { SearchConditionBase } from './SearchConditionBase';

export class SearchConditionEquals extends SearchConditionBase {

    public constructor(column: string, value: any) {

        super(column, value, 'equals');

    }

}
