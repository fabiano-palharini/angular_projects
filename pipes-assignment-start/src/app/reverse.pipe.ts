import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let reverseStr: string[] = value.split("");
    reverseStr.reverse();
    return reverseStr.join("");
  }

}
