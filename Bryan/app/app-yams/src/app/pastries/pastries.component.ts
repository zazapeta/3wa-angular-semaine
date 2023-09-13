import { Component, OnInit } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';
@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  titlePage: string = "Page principale : liste des pâtisserie à gagner";
  pastries: Pastrie[] = PASTRIES;
  selectedPastrie: Pastrie | null = null;
  
  
  constructor() {
    
  }

  OnSelect(pastrie: Pastrie) {
    console.table(pastrie);
    return this.selectedPastrie = pastrie;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
