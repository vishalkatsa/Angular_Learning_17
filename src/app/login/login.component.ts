import { Component, EventEmitter, Host, HostListener } from '@angular/core';
import { TestClass } from '../test-class';

class newClaass1{
  constructor(){
    console.log("newClaass constructor");
    
  }
}

@Component({
  selector: 'app-login',
  // selector: '.app-login',
  // selector: '[app-login]',

  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  // template:`<h1 class="bg-red-700">Hello Login</h1>`, // Do not use this , use this templateUrl (both of use than paroty have templateUrl)
  styleUrl: './login.component.css',
  preserveWhitespaces:true,   /// add only 1 space on everyone // false after not 
  viewProviders:[newClaass1,TestClass],
  inputs:["PData"],
  outputs:["childEvent"]
})
export class LoginComponent {
  // Child to Parent Transfar Start
  PData:any;
  childEvent = new EventEmitter();
  sendData(value:any){
    this.childEvent.emit(value)
  }
   // Child to Parent Transfar End

  name="vvv"




  // @HostListener('click',['$event'])
  // show(){
  //   alert('Hello')    /// working on full dom
  // }
  constructor( newClaass:newClaass1,TestClass:TestClass){
    console.log(`Main Login constructor`);
   ` <h1>My constructor class  </h1>`
  }

}
