import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit,OnDestroy {
  public message:any;
  public subscription: any;
public  countryList=[
  {id:1,name:"India"},
  {id:2,name:"USA"},
  {id:1,name:"Thiland"},
]
  

  constructor(private service:DataserviceService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.currentMessage.subscribe(message => this.message = message)
  }
  getMessage() {
    this.service.changeMessage("The message is changed from contactus component")
  }
  onSubmit(contactFormValues:any){
    console.log(contactFormValues.value)
  }
  
}
