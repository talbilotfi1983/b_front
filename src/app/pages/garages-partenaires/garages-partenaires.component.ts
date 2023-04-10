import {Component, Input, OnInit} from '@angular/core';
import {GarageService} from "../../../services/garage.service";

@Component({
  selector: 'app-garages-partenaires',
  templateUrl: './garages-partenaires.component.html'
})
export class GaragesPartenairesComponent implements OnInit {
  @Input() garages: any;
  params = {
    coordonneeGarages: undefined
  };

  constructor(private garageService: GarageService) {
  }

  ngOnInit() {
    this.garageService.coordonneeGarages().subscribe(data => {
      // @ts-ignore
      this.params.coordonneeGarages = data.body
    })
  }

}
