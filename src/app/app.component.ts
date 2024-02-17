import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeComponent } from './employe/employe.component';
import { TwowayComponent } from './twoway/twoway.component';
import { PipesComponent } from './pipes/pipes.component';
import { ChainingParameComponent } from './chaining-parame/chaining-parame.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,EmployeComponent,TwowayComponent,PipesComponent,ChainingParameComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
   // Child to Parent Transfar start 
  title = 'blog2';
  Cdata:any;
  // getdata(value:any){
  //   this.Cdata=value;
  // }
 // Child to Parent Transfar End -->
 loginIn:boolean=true;
 login(){
  this.loginIn = true
 }
 logout(){
  this.loginIn = false
 }
 isValid:boolean=true

 onchange(value:any){
  this.isValid = value
 }
}
