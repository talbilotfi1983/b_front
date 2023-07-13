import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pneus',
  templateUrl: './pneus.component.html',
  styleUrls: ['./pneus.component.scss']
})
export class PneusComponent implements OnInit {
  params: any;
  constructor() { }

  ngOnInit() {
    this.params = {
      typePneus: ['Auto', '4x4/Suv', 'Camion Leger', 'Camion', 'Moto'],
      largeurs: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
      hauteurs: [35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
      diametres: [14, 15, 16, 17, 18]
    };
  }


}
