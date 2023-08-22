import { Component, Input, OnInit } from '@angular/core';
import { GarageService } from "../../../services/garage.service";

@Component({
  selector: 'app-garages-partenaires',
  templateUrl: './garages-partenaires.component.html'
})
export class GaragesPartenairesComponent implements OnInit {
  @Input() garages: any;
  params = {
    coordonneeGarages: undefined
  };
  title = 'google-maps-autocomplete';
  latitude = 48.7230988;
  longitude = 1.3610346;
  zoom = 15;


  constructor(private garageService: GarageService) {
  }

  ngOnInit() {
    this.garageService.coordonneeGarages().subscribe(data => {
      // @ts-ignore
      this.params.coordonneeGarages = data.body
      console.log('Mes garages :', data.body);
    })
  }
  onAutocompleteSelected($event: any) {
    console.log($event)
    this.latitude = $event.geoLocation.latitude;
    this.longitude = $event.geoLocation.longitude;
    this.zoom = 15;

  }

  onLocationSelected($event: Location) {

  }
}
