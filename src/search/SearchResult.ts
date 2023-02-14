import { PaginationMeta } from './PaginationMeta';
import { ApiProperty } from '@nestjs/swagger';

export class SearchResult<T> {
    @ApiProperty({ isArray: true })
    public results: Array<T>;

    @ApiProperty({ type: PaginationMeta })
    public meta: PaginationMeta;
}
