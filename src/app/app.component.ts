import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  names: string[] = ["Fred","Julie","Sam","Adam","Jennifer","Saanvi"];
  isHungry:boolean = true;

  currentDay:Date = new Date;
  }
