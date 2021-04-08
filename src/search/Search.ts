import { PaginationOptions } from './PaginationOptions';
import { SearchCondition } from './SearchCondition';

export class Search<T> {

    conditions: Array<SearchCondition>;
    options?: PaginationOptions;

}
