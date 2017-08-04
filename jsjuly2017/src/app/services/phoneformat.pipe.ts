import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformat'
})
export class PhoneformatPipe implements PipeTransform {

  transform(value: string, replace?: string): string {
    if (value.startsWith("0")) {
      var sub = value.substring(0, 4);
      value = value.substring(4, value.length);
      return sub + " " + value.trim().replace(/(.{3})/g, '$1 ');
    } else {
      return value.trim().replace(/(.{3})/g, '$1 ');
    }

  }

}
