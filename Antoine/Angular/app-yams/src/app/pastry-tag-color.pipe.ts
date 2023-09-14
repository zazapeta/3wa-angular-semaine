import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastryTagColor'
})
export class PastryTagColorPipe implements PipeTransform {

  transform(tag: string): string {
    switch (tag) {
      case "chocolat":
        return "#ae5107";

      case "sucré":
        return "#ffb7c5";

      case "yummy":
        return "#80a2ff";

      case "dessert":
        return "#c850c9";

      case "framboises":
        return "#de1d37";

      case "poires":
        return "#63f27d";

      case "fruits":
        return "#5a00e1";

      default:
        return "orange";

    }

  }

}
