import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  divColor : String = "Red";
  constructor() { }
  setColor(){
    this.divColor = this.divColor == "Red" ? "Blue" : "Red";
  }
}
