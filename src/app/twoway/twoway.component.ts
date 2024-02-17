import { JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twoway',
  standalone: true,
  imports: [FormsModule,UpperCasePipe ,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe],
  templateUrl: './twoway.component.html',
  styleUrl: './twoway.component.css'
})
export class TwowayComponent {
  Massege = "HHH"
  MYonChange(value:any){

    this.Massege=value
  }
  title="Hello my title vishal"
  dataJson = {
    name:"vishal kumar",
    age:19,
    number:8968727878,
  }
}
