import { Component } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent 
{
  titlePage:string ="Page Principale : liste des pâtisseries à gagner";
  patries:Pastrie[] = PASTRIES;
  selectedPastrie: Pastrie = new Pastrie();

  constructor(){}
  ngOnInit(){}
  onSelect(_pastrie : Pastrie)
  {
    console.log(_pastrie);
    this.selectedPastrie = _pastrie;
  }
}
