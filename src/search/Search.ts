import { PaginationOptions } from './PaginationOptions';
import { SearchCondition } from './SearchCondition';
import { SearchOperator } from './SearchOperator';

export interface Search<T> {

    conditions: Array<SearchCondition>;
    options?: PaginationOptions;
    operator?: SearchOperator

}
