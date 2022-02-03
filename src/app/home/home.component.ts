import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControl,FormGroup ,FormBuilder ,Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });



  public message:any;
  public subscription: any;
  public userList:any=[
    {fName:"Lakshmi",lName:"Hugar",age:25},
    {fName:"Sraswati",lName:"Pujari",age:23},
    {fName:"Parvati",lName:"Hugar",age:21},
    {fName:"Bhagya",lName:"Hugar",age:35},
  ];

  constructor(private service:DataserviceService,private fb: FormBuilder) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Lakshmih',
      address: {
        street: 'Street'
      }
    });
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
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
