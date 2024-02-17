import { SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { V9Pipe } from '../v9.pipe';

@Component({
  selector: 'app-chaining-parame',
  standalone: true,
  imports: [UpperCasePipe,SlicePipe,V9Pipe],
  templateUrl: './chaining-parame.component.html',
  styleUrl: './chaining-parame.component.css'
})
export class ChainingParameComponent {

}
