import { PaginationMeta } from './PaginationMeta';

export interface SearchResult<T> {

    results: Array<T>;
    meta: PaginationMeta;

}
