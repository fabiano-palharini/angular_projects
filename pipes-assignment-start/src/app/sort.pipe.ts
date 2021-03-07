import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  // transform(value: any[]): any {
  //   let sortedArray = value.sort(this.compare);
  //   return sortedArray;
  // }

  // compare(a, b) {
  //   const nameA = a.name.toUpperCase();
  //   const nameB = b.name.toUpperCase();

  //   let comparison = 0;
  //   if (nameA > nameB) {
  //     comparison = 1;
  //   } else if (nameA < nameB) {
  //     comparison = -1;
  //   }

  //   return comparison;
  // }

  transform(value: any, property: string, order: string): any {
    let orderedArray = value.sort(this.compareValues(property, order));
    return orderedArray;
  }

  compareValues(key, order = 'asc'): any {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;

      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }

      return order === 'desc' ? (comparison * -1) : comparison;
    }
  }

}
