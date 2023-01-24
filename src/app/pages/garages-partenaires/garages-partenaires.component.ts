import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-garages-partenaires',
  templateUrl: './garages-partenaires.component.html'
})
export class GaragesPartenairesComponent implements OnInit {
  @Input() garages: any;
  constructor() { }

  ngOnInit() {
  }

}
