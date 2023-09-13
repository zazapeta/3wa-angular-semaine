import { Component, OnInit,Input } from '@angular/core';
import { Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS } from "../mock-pastries"

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './patrie-details.component.html',
  styleUrls: ['./patrie-details.component.scss']
})
export class PatrieDetailsComponent implements OnInit
{
  @Input() pastrie!:Pastrie;
  mDescButton:string = "Desc >>";
  constructor() {}

  ngOnInit()
  {
    console.log(this.pastrie);
  }

  getIngredient(_id:string)
  {
    const _index = INGREDIENTS_LISTS.find(_index => _index.id == _id )

    if(_index)
    {
      this.sort(this.mDescButton,_index.list);
      return _index.list;
    }
    else return null;
  }

  sort(_desc:string,_tab?:string[])
  {
    if(!this.pastrie) return;
    let _list = _tab != null ? _tab : this.getIngredient(this.pastrie.id);
    if(!_list) return;
    if(_desc == "Asc >>")
      _list.sort();
    else _list.sort(function(_a:string,_b:string)
    {
      return _b.localeCompare(_a);
    })
  }

  setDescriptionButton()
  {
    if(this.mDescButton == "Desc >>") 
    {
      this.mDescButton = "Asc >>";
      this.sort(this.mDescButton);
    }
    else 
    {
      this.mDescButton = "Desc >>";
      this.sort(this.mDescButton);
    }
  }

}
