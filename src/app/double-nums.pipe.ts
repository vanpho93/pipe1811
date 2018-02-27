import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'doubleNumsPipe' })

export class DoubleNumsPipe implements PipeTransform {
    transform(value: number[]) {
        return value.map(v => v * 2);
        // return value.filter(v => v % 2 === 0);
    }
}
/*
interface Person {
    name: string;
    age: number;
}

const teo: Person = { name: 'a', age: 10 };

function showPropsValue(p: Person, propName: keyof Person) {
    console.log(p[propName]);
}

showPropsValue(teo, 'name')
*/
