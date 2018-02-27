import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundNumPipe implements PipeTransform {
    transform(value) {
        return value * 2;
    }
}
