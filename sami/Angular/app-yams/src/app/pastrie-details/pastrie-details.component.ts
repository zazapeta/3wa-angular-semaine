import { Component, Input } from '@angular/core';

import { Pastrie } from '../pastrie';

enum ORDERS {
  asc,
  desc,
}
@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss'],
})
export class PastrieDetailsComponent {
  @Input() pastrie!: Pastrie;
  @Input() ingredients!: string[];
  order: ORDERS = ORDERS.asc;
  ORDERS = ORDERS;
  toggleOrder(): void {
    switch (this.order) {
      case ORDERS.desc:
        this.order = ORDERS.asc;
        this.ingredients.sort().reverse();
        break;
      case ORDERS.asc:
      default:
        this.order = ORDERS.desc;
        this.ingredients.sort();
        break;
    }
  }
}
