import { Component } from '@angular/core';

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
}
