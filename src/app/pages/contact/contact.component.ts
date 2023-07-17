import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthentificationService} from "../../../services/authentification.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  usersFormContact: any;
  message: any;

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService) {
  }

  ngOnInit() {
    this.usersFormContact = this.formBuilder.group({
      lastname: ['', Validators.required],
      civilite: ['Mr', Validators.required],
      firstname: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      fax: ['', Validators.required],
      garage: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });

  }

  onContact() {
    this.authentificationService.contactAdmin(this.usersFormContact.value).subscribe(data => {
      //@ts-ignore
      this.message = data.message;
    }, error => {
      console.log(error)
    })
  }

  getCivilite(civilite: any) {
    this.usersFormContact.controls.civilite.setValue(civilite);
  }
}
