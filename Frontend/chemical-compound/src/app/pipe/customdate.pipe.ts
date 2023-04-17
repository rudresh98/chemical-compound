import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customdate',
})
export class CustomdatePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    const customdate = moment(value).format('MMMM Do YYYY');

    return customdate;
  }
}
