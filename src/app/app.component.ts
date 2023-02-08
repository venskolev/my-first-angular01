import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>Hello World!</h1>
  <p>My first Angular App</p>`
})

export class AppComponent {
  title = 'my-first-angular01';
}
