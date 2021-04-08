export enum PaginationSortDirection {

    ASC = 'ASC',
    DESC = 'DESC'

}

export interface PaginationSort {

    column: string;
    order: PaginationSortDirection

}
