import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })

export class RoundNumPipe implements PipeTransform {
    transform(value: number, isUpper: boolean, addition: number = 0) {
        if (isUpper) return Math.ceil(value + addition);
        return Math.floor(value + addition);
    }
}
