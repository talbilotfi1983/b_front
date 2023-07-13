import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthentificationService } from "../../../services/authentification.service";

@Component({
  selector: 'app-mon-espace',
  templateUrl: './mon-espace.component.html',
  styleUrls: ['./mon-espace.component.scss']
})
export class MonEspaceComponent implements OnInit {
  constructor(private authentificationService: AuthentificationService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.authentificationService.cheekLoging()) {
      this.router.navigateByUrl('')
    }
  }

  params = {
    labels: ['Référence', 'Quantité', 'Total', 'Facture', 'Date de livraison estimée'],
    datas: [
      ['Infinity Ecosis 185/60 R15 88H XL', 1, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 85, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 24, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 774, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 1, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 85, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 24, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 774, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 1, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 85, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 24, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 774, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 1, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 85, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 24, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 774, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 1, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 85, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 24, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 774, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 1, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 85, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 24, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 774, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 1, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 85, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 24, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 774, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 1, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 85, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 24, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 774, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 963, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021'],
      ['Infinity Ecosis 185/60 R15 88H XL', 100, '65,50 €', 'FR - 1021 - 71856	18', '12 octobre 2021']
    ]
  };

  getFacture(d: any, j: number) {
    console.log(d, j);
  }
}
