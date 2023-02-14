import { ApiProperty } from '@nestjs/swagger';

export class DeleteResponse {
    @ApiProperty()
    public status: string;
}
