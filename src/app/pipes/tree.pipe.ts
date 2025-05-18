import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'treeWrap'
})
export class TreeWrapPipe implements PipeTransform {
  transform(value: string): string {
    const tree = '🌳';
    if (!value) return '';
    return `${tree.repeat(3)} ${value} ${tree.repeat(3)}`;
  }
}