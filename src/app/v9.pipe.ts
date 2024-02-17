import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'v9',
  standalone: true
})
export class V9Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let data = value + 1
    return data;
  }

}
