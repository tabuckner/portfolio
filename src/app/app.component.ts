import { Component } from '@angular/core';
import { faCoffee, faCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  faCoffee = faCoffee;
  faCheck = faCheck;
}
