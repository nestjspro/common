import { PaginationSortDirection } from './PaginationSort';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationOptions {

    @ApiProperty()
    public limit?: number;

    public page?: number;

    @ApiProperty()
    public sort?: { [ column: string ]: PaginationSortDirection };

}
