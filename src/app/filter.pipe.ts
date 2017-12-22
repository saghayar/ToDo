import {Pipe, PipeTransform} from '@angular/core';
import {isUndefined} from 'util';

@Pipe({
  name: 'filter',
  pure: false
  
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '' || isUndefined(filterString)) {
      return value;
    }
    const resultArray = value;

    value.forEach((item, index) => {
      if (item[propName].indexOf(filterString) === -1) {
        console.log('str = ' + filterString);
        resultArray.splice(index, 1);
      }
    });
    return resultArray;
  }

}
