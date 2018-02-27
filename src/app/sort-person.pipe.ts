import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './types';

@Pipe({ name: 'sortPerson' })

export class SortPersonPipe implements PipeTransform {
    transform(students: Person[], propName: keyof Person): Person[] {
        return students.sort((s1, s2) => {
            if (s1[propName] > s2[propName]) return 1;
            if (s1[propName] < s2[propName]) return -1;
            return 0;
        })
    }
}
