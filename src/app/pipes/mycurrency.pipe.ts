import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency',
  standalone: false,
})
export class MycurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) {
    return null;
  }

}
