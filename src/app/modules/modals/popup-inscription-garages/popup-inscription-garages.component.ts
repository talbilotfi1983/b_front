import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthentificationService} from "../../../../services/authentification.service";

@Component({
  selector: 'app-popup-inscription-garages',
  templateUrl: './popup-inscription-garages.component.html',
  styleUrls: ['./popup-inscription-garages.component.scss']
})
export class PopupInscriptionGaragesComponent implements OnInit {
  @Input() inscriptionGarages: any;
  @Output() emitNoneDisplay: EventEmitter<any> = new EventEmitter();
  userRegister: any;
  paramsForm: any;

  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) {
  }

  ngOnInit() {
    this.paramsForm = {
      distances: [
        'Lieu d\'intervention*', 'À domicile', 'Au garage',
        'Dans un rayon de 25km', 'Dans un rayon de 50km',
        'Dans un rayon de 75km', 'Dans un rayon de 100km ou +']
    };
    this.userRegister = this.formBuilder.group({
      nom_garage: ['', Validators.required],
      ville_garage: ['', Validators.required],
      adresse_garage: ['', Validators.required],
      telephone_garage: ['', Validators.required],
      prix_garage: ['', Validators.required],
      email_garage: ['', Validators.required],
      lieu_intervation_garage: ['', Validators.required],
      diametre_pneu: ['', Validators.required],
      logo_garage: ['', Validators.required],
      observation: ['', Validators.required],
      mot_de_passe: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.inscriptionGarages = 'none';
    this.emitNoneDisplay.emit(this.inscriptionGarages);
  }

  onRegister() {
    this.authentificationService.inscription(this.userRegister.value).subscribe(() => {
      console.log('inscription reussi ac success')
    }, error => {
      console.error('inscription error')
    })
  }

  onSelectDistance(distance: any) {
    this.userRegister.controls.lieu_intervation_garage.setValue(distance.value)
  }
}
