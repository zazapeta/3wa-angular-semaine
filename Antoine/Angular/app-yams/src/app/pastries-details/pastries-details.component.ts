
import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-pastries-details',
  templateUrl: './pastries-details.component.html',
  styleUrls: ['./pastries-details.component.scss']
})
export class PastriesDetailsComponent {
  @Input() pastrie: Pastrie;

  constructor() {
    this.pastrie = new Pastrie();
  }

  ngOnInit() {
    console.log(this.pastrie); // pour l'instant c'est undefined ... C'est normal
  }
}
