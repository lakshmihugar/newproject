import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { DataserviceService } from '../service/dataservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{
  public message:any;
  public subscription: any;
  public userList:any=[
    {fName:"Lakshmi",lName:"Hugar",age:25},
    {fName:"Sraswati",lName:"Pujari",age:23},
    {fName:"Parvati",lName:"Hugar",age:21},
    {fName:"Bhagya",lName:"Hugar",age:35},
  ];

  constructor(private service:DataserviceService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.service.currentMessage.subscribe(message => this.message = message)
  }
  getMessage() {
    this.service.changeMessage("The message is changed from home component")
  }
  num: number= 0;
}
