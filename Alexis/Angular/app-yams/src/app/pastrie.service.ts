import { Injectable } from '@angular/core';
import { PASTRIES,INGREDIENTS_LISTS } from './mock-pastries';
import { Pastrie } from './pastrie';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  patries:Pastrie[] = PASTRIES;
  constructor() { }

  getPatries()
  {
    return this.patries;
  }

  getPastrie(_id:string)
  {
    return this.patries.find(p => p.id === _id);
  }

  getPastrieIngredientsList(_id:string)
  {
    const _p = INGREDIENTS_LISTS.find(_index => _index.id == _id );
    if(_p)
    {
      return _p.list;
    }
    else return null;
  }
}
