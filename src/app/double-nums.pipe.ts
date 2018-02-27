import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'doubleNumsPipe' })

export class DoubleNumsPipe implements PipeTransform {
    transform(value: number[]) {
        return value.map(v => v * 2);
    }
}
