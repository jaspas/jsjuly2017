import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'call'
})
export class CallPipe implements PipeTransform {

  transform(telNumber: string): string {
    return "tel:"+telNumber;
  }

}
