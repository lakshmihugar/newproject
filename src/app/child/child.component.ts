import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parenttext!: string;
  public childMesssage:string="This is the message from child component"
  @Output() messageEventEmitter=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage(){
  this.messageEventEmitter.emit("This is the event emitter message from child component")
}
}
