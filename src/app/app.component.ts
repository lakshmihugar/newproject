import { AfterViewInit, Component,  OnInit,  ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,AfterViewInit{
  
    
  public  celcius!: number;
   public  Fahrenheit!: number;   

  public color = '';
  @ViewChild(ChildComponent)  child:any;
  title = 'demo1';
  public text:string= "I am from parent component"
  public recievedChildMessage!: string;
 public  recievedEmitterChildMessage!: string;
 public collection: string[] = ['a', 'b', 'c', 'd'];
 public str: string = 'abcdefghij';

  constructor(){

  }
 
 
 public today: number = Date.now();
 a: number = 0.259;
 b: number = 1.3495;
  ngOnInit() {}
  ngAfterViewInit(): void {
    this.recievedChildMessage=this.child.recievedChildMessage
  }
  recievedEmitterMessage($event: any){
this.recievedEmitterChildMessage=$event;
  }
}
