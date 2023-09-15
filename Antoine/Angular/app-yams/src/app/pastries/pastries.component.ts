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

  constructor() {
    const storedPastries = localStorage.getItem('pastries');
    if (storedPastries) {
      this.pastries = JSON.parse(storedPastries);
    }
  }


  changeParentPreference($event: string) {
    var favpastrie = this.pastries.filter(pastrie => pastrie.choise === true)
    const pastrie = this.pastries.find(function (p) {
      return p.id === $event
    })
    if (pastrie!.choise == true && favpastrie.length >= 3) {
      pastrie!.choise = false
    }
    if (favpastrie.length < 3) {
      if (pastrie!.choise == false) {
        pastrie!.choise = true
      } else {
        pastrie!.choise = false
      }
    }
    localStorage.setItem('pastries', JSON.stringify(this.pastries));
  }

  ngOnInit(): void {
  }

  onSelect(pastrie: Pastrie) {
    console.log(pastrie)
    this.selectedPastrie = pastrie;
  }

}