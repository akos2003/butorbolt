import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyButton'
})
export class PrettyButtonPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return `✨ ${value} ✨`;
  }
}