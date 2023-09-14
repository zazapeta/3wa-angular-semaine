import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastryTagColor',
})
export class PastryTagColorPipe implements PipeTransform {
  transform(tag: string): string {
    switch (tag) {
      case 'framboises':
        return 'red';
      case 'chocolat':
        return 'brown';
      case 'sucré':
        return 'pink';
      case 'yummy':
        return 'cyan';
      default:
        return 'yellow';
    }
  }
}
