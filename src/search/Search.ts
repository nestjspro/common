import { PaginationOptions } from './PaginationOptions';
import { SearchCondition } from './SearchCondition';

export class Search<T> {

    preConditions: Array<SearchCondition>;
    conditions: Array<SearchCondition>;
    options?: PaginationOptions;

}
