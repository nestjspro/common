import { SearchOperator } from './SearchOperator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchCondition {

    @ApiProperty({ description: 'Condition(s) to match.', example: 'name = :name' })
    public condition: string;

    @ApiProperty({ description: 'Parameters(s) to match.', example: '{ name: "John" }' })
    public parameters?: { [ name: string ]: string };

    @ApiProperty({ description: 'Operator to use when there are multiple conditions', enum: SearchOperator })
    public operator?: SearchOperator;

    public constructor(condition: string, parameters: { [ name: string ]: string }, operator?: SearchOperator) {

        this.condition = condition;
        this.parameters = parameters;

    }

}
