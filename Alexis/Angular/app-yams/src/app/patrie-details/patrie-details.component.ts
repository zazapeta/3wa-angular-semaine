import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS } from "../mock-pastries"
import { PastrieService } from '../pastrie.service';


@Component({
  selector: 'app-pastrie-details',
  templateUrl: './patrie-details.component.html',
  styleUrls: ['./patrie-details.component.scss']
})
export class PatrieDetailsComponent implements OnInit
{
  @Output() changePreference: EventEmitter<string> = new EventEmitter();
  @Input() pastrie!:Pastrie;
  mDescButton:string = "Desc >>";
  constructor(private _service:PastrieService) {}

  ngOnInit()
  {
    console.log(this.pastrie);
  }

  getIngredient(_id:string)
  {
    const _index = this._service.getPastrieIngredientsList(this.pastrie.id);

    if(_index)
    {
      this.sort(this.mDescButton,_index);
      return _index;
    }
    else return null;
  }

  sort(_desc:string,_tab?:string[])
  {
    if(!this.pastrie) return;
    let _list = _tab != null ? _tab : this._service.getPastrieIngredientsList(this.pastrie.id);
    if(!_list) return;
    if(_desc == "Asc >>")
      _list.sort(function(_a:string,_b:string)
      {
        return _b.localeCompare(_a);
      })
    else _list.sort();
  }

  setDescriptionButton()
  {
    if(this.mDescButton == "Desc >>") 
    {
      this.sort(this.mDescButton);
      this.mDescButton = "Asc >>";
    }
    else 
    {
      this.sort(this.mDescButton);
      this.mDescButton = "Desc >>";
    }
  }

  preference(id: string) {
    this.changePreference.emit(id); // émettre l'id de la pâtisserie vers le parent
}
}
