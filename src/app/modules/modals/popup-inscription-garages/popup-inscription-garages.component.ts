import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthentificationService } from "../../../../services/authentification.service";

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
      name: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      price: ['', Validators.required],
      email: ['', Validators.required],
      intervention_address: ['', Validators.required],
      tire_size: ['', Validators.required],
      observation: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.inscriptionGarages = 'none';
    this.emitNoneDisplay.emit(this.inscriptionGarages);
  }

  onRegister() {
    if (this.userRegister.invalid) {
      return;
    }
    this.authentificationService.inscription(this.userRegister.value).subscribe(data => {
      let params = {}
      const formData: FormData = new FormData();
      formData.append('images', this.paramsForm.files[0]);
      // @ts-ignore
      params.id = data.body.garage._id
      // @ts-ignore
      params.formData = formData;
      this.authentificationService.addLogo(params).subscribe(data => {
        this.emitNoneDisplay.emit();
      })
    }, error => {
      console.error('inscription error')
    })
  }

  onSelectDistance(distance: any) {
    this.userRegister.controls.intervention_address.setValue(distance.value)
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      // @ts-ignore
      this.paramsForm.files = (event.target as HTMLInputElement).files;
    }
  }
}
