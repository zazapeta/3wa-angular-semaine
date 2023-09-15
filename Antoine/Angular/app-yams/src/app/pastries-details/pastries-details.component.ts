
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { INGREDIENTS_LISTS } from '../mock-pastries';
import { Pastrie } from '../pastrie';
import { List } from '../list';

@Component({
  selector: 'app-pastries-details',
  templateUrl: './pastries-details.component.html',
  styleUrls: ['./pastries-details.component.scss']
})
export class PastriesDetailsComponent {
  @Input() pastrie!: Pastrie;
  @Output() changePreference: EventEmitter<string> = new EventEmitter();
  lists: List[] = INGREDIENTS_LISTS;
  trier: boolean = false;

  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges() {
    this.trier = false;
  }
  preference(id: string) {
    this.changePreference.emit(id); // émettre l'id de la pâtisserie vers le parent
  }

  modifyIngredientsOrder(ascending: boolean) {
    this.trier = true
    if (this.pastrie.id !== '' && this.lists.length > 0) {
      const myList = this.lists.find((list) => list.id === this.pastrie.id);
      if (myList !== undefined && myList.list !== undefined) {
        myList.list.sort((a, b) => {
          if (ascending) {
            this.trier = true
            return b.localeCompare(a);
          } else {
            this.trier = false
            return a.localeCompare(b);
          }
        });
      }
    }
  }
}


