import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  new: string = '';
  addNewVal() {
    this.name = this.new;
  }

  outPutEvent(ot){
    this.new= ot;
  }
}
