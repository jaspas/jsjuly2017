import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coolness'
})
export class CoolnessPipe implements PipeTransform {

  transform(value: string, replace?: string): string {

    return value.replace(/e/g, '3');
  }

}

//{{ jumpstarter.telephone | telephone }}

<a href="mailto:ss@ss.de">E-Mail</a>
