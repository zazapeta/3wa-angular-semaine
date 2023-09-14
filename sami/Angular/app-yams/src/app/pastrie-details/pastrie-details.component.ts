import { Component, Input } from '@angular/core';

import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent {
  @Input() pastrie!: Pastrie;
  @Input() ingredients!: string[];
}

