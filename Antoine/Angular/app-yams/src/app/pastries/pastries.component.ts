import { Component } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent {
  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastrie[] = PASTRIES;
  selectedPastrie: Pastrie[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pastrie: any) {
    this.selectedPastrie = pastrie;
    console.log(pastrie);
  }

}