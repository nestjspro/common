import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseDatePipe implements PipeTransform<string> {

    public transform(value: string, metadata: ArgumentMetadata): Date {

        const date = new Date(value);

        if (!date) {

            throw new BadRequestException('invalid date');

        } else {

            return date;

        }

    }

}
