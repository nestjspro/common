import { PaginationOptions } from './PaginationOptions';
import { SearchCondition } from './SearchCondition';
import { ApiProperty } from '@nestjs/swagger';

export class Search<T> {

    @ApiProperty({ isArray: true, type: SearchCondition })
    public conditions: Array<SearchCondition>;

    @ApiProperty({ type: PaginationOptions })
    public options?: PaginationOptions;

}
