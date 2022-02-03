import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit,OnDestroy {
  public message:any;
  public subscription: any;
  
  constructor(private service:DataserviceService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.currentMessage.subscribe(message => this.message = message)
  }
  getMessage() {
    this.service.changeMessage("The message is changed from aboutus component")
  }
}
