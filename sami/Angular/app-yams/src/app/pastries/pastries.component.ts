import { Component, Input as RouteInput } from '@angular/core';

import { List, Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from '../pastries-mock';

enum ORDERS {
  asc = 'asc',
  desc = 'desc',
}

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
  @RouteInput() order?: ORDERS = ORDERS.asc;
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
    const ingredients = foundList?.list ?? [];
    return this.order === ORDERS.asc
      ? ingredients.sort()
      : ingredients.sort().reverse();
  }
}
