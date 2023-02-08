import { Component, ViewEncapsulation } from '@angular/core';
import { CardComponent } from './card/card.component';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>Hello World!</h1>
  <span class="red">My first Angular App</span>`,
  styles: ['h1, .none-message { color: red; margin-left: auto; margin-right: auto; width: 500px; }'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class AppComponent {
  title = 'my-first-angular01';
}
