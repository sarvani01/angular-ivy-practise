import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input('t') inputText = '';
  val: string ='';
  @Output() passtext = new EventEmitter<string>();
  constructor() { }

onBlurText(){
  this.passtext.emit(this.val);
}
  ngOnInit() {
  }

}