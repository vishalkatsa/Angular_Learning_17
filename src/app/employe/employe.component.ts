import { Component } from '@angular/core';

@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent {

  MyArray:any[] = [
    {
      id:100,
      name:"vishal kumar",
    },
    {
      id:101,
      name:"jitendra kumar",
    },
    {
      id:103,
      name:"mukendra kumar",
    },
    {
      id:10,
      name:"harindra kumar",
    },
  ]
  city ="Patna"
  HandleCity(){
    this.city = "Saran"
  }
   dataObject = {
    id:10,
    name:"harindra kumar",
  }
  class="bg-red-600" // <!-- Attribute binding  -->
  name="vishal kumar" // Property binding and interpokation

  myImage= '/assets/MERN.jpg'


  toggale:boolean = true
  handleToggale(){
    this.toggale=!this.toggale
  }
  vv = "vv"
  MYVARIABLE = "myred"
  truefalse:boolean = true
}
