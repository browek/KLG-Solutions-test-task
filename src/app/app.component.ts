import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invoice-generator';
  opened = true

  closeDrawer() {
    console.log(window.innerWidth)
  }
}
