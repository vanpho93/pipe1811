import { Component } from '@angular/core';
import { Person } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  now = new Date();
  person = { name: 'Teo', age: 10 };
  height = Promise.resolve(100);
  grade = 5.5;
  nums = [1, 3, 4, 2, 6];
  mode: keyof Person = 'name';
  students: Person[] = [
    { name: 'Ti', age: 10, height: 100 },
    { name: 'Teo', age: 14, height: 90 },
    { name: 'Tun', age: 13, height: 150 },
  ];
}
