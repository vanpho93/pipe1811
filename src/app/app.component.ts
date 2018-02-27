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
}
