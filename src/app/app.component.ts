import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';

  trainingName = 'Angular';
  dataFromChild;


  catchMe($event) {
    console.log($event);
    this.dataFromChild = $event;
  }
}