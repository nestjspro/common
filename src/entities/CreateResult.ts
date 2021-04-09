import { ApiProperty } from '@nestjs/swagger';

export class CreateResult {

    @ApiProperty({

        description: 'Unique resource identifier (uuidv4)',
        example: '34bb3dc6-3f70-4e28-891d-6f133e9bb821'
        
    })
    public id: string;

}
