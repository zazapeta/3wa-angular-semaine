import { Component } from '@angular/core';

import { Pastrie } from '../pastrie';
import { PASTRIES } from '../pastries-mock';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent {
  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastrie[] = PASTRIES;
}
