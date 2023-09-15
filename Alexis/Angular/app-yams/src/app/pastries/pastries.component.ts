import { Component, Input } from '@angular/core';
import { Pastrie } from '../pastrie';
import { PASTRIES, Max } from '../mock-pastries';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent 
{
  titlePage:string ="Page Principale : liste des pâtisseries à gagner";
  patries:Pastrie[] = [];
  selectedPastrie?: Pastrie;

  constructor(private _service:PastrieService)
  {
    this.patries = _service.getPatries();
  }
  ngOnInit(){}

  @Input()
  set pastrieId(selectedPastrieId:string)
  {
    this.selectedPastrie = this.patries.find(({id}) => selectedPastrieId === id);
  }

  onSelect(_pastrie : Pastrie)
  {
    console.log(_pastrie);
    this.selectedPastrie = _pastrie;
  }

  changeParentPreference(_event:any)
  {
    const _value = this.patries.find(p => p.id == _event)
    const _fav = this.patries.filter(p => p.choice == true);
    if(_value)
    {
      if(_fav.length < Max)
      {
        console.log(_fav.length)
        _value.choice = !_value?.choice;
      }
      else if(_value.choice)
      {
        _value.choice = !_value?.choice;
      }
    }
  }
}
