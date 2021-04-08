import { PaginationSortDirection } from './PaginationSort';

export interface PaginationOptions {

    limit: number;
    page: number;
    sort: { [ column: string ]: PaginationSortDirection };

}
