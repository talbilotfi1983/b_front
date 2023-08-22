import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthentificationService } from "../../../../services/authentification.service";
import { ValidationActionComponent } from '../validation-action/validation-action.component';

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
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private snackBar: MatSnackBar) {
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
      observation: [''],
      password: ['', Validators.required]
    });
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.inscriptionGarages = 'none';
    this.emitNoneDisplay.emit(this.inscriptionGarages);
  }

  onRegister() {
    this.submitted = true;
    if (this.userRegister.invalid) {
      return;
    }
    this.authentificationService.inscription(this.userRegister.value).subscribe(data => {
      let params = {}
      this.closePopup()
      if (this.paramsForm.files[0]) {
        const formData: FormData = new FormData();
        formData.append('images', this.paramsForm.files[0]);
        // @ts-ignore
        params.id = data.body.garage._id
        // @ts-ignore
        params.formData = formData;
        this.authentificationService.addLogo(params).subscribe(data => {
          // this.openSnackBar('Inscription effectuée avec succès.', "Error");
          // this.emitNoneDisplay.emit();
        })
      } else {
        // this.openSnackBar('Inscription effectuée avec succès.', "Error");
        //  this.emitNoneDisplay.emit();
      }
    }, error => {
      let message = error.status === 702 ? 'Garage déjà existant.' : 'Erreur inscription'
      this.openSnackBar(message, "Error");
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

  openSnackBar(message: string, type: string) {
    this.snackBar.openFromComponent(ValidationActionComponent, {
      duration: 5 * 400,
      data: {
        message: message,
        type: type
      }
    });
  }

}
