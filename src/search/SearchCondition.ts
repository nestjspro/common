import { SearchOperator } from './SearchOperator';

export interface SearchCondition {

    condition: string;
    parameters?: { [ name: string ]: string };
    operator?: SearchOperator;

}
