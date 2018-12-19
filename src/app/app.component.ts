import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass6Q3';
  message = 'Marvellous Infosystems';

  fun(){
    this.message = 'Educating for better tommorrow';
    return this.message;
  }
}
