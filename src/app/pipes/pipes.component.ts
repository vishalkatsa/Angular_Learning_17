import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe ,LowerCasePipe,TitleCasePipe,SlicePipe,JsonPipe,PercentPipe,DecimalPipe,CurrencyPipe,DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title="Hello my title vishal"
  dataJson = {
    name:"vishal kumar",
    age:19,
    number:8968727878,
  }
  currentDate = new Date()
}
