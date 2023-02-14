import { ApiProperty } from '@nestjs/swagger';

export class PaginationMeta {
    @ApiProperty()
    public total: number;

    @ApiProperty()
    public pages: number;
}
