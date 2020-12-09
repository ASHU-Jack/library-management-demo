import { Pipe, PipeTransform } from '@angular/core';

import { Book } from 'src/model/book';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Book[], input: String): any {
    if (!input) {
      return false;
    }
    return value.filter(va => {
      return va.title.toLocaleLowerCase().indexOf(input.toLowerCase()) > -1;
    })
  }
}