import { Component, Input } from '@angular/core';
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
  selectedPastrie?: Pastrie;
  @Input()

  set pastrieId(selectedPastrieId: string) {
    this.selectedPastrie = this.pastries.find(
      ({ id }) => selectedPastrieId === id
    );
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pastrie: Pastrie) {
    console.log(pastrie)
    this.selectedPastrie = pastrie;
  }

}