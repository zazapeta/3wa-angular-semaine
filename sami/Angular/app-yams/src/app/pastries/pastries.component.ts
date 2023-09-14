import { Component, Input as RouteInput } from '@angular/core';

import { List, Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from '../pastries-mock';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss'],
})
export class PastriesComponent {
  titlePage: string = 'Page principale : liste des pâtisseries à gagner';
  pastries: Pastrie[] = PASTRIES;
  ingredientsList: List[] = INGREDIENTS_LISTS;
  selectedPastrie?: Pastrie;
  // @Input() pastrieId?: string;

  @RouteInput()
  set pastrieId(selectedPastrieId: string) {
    this.selectedPastrie = this.pastries.find(
      ({ id }) => selectedPastrieId === id
    );
  }

  getIngredients(pastrie: Pastrie): List['list'] {
    const foundList = this.ingredientsList.find(
      (ingredientList) => ingredientList.id === pastrie?.id
    );
    return foundList?.list ?? [];
  }
}
