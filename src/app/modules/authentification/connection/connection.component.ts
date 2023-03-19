import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthentificationService} from "../../../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ConnectionComponent implements OnInit {
  @Input() connection: any;
  @Input() inscription: any;
  @Output() emitNoneDisplay: EventEmitter<any> = new EventEmitter();
  userConnexion: any;
  errorMsg: any;
  isSubmit: any;

  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService, private router: Router) {
  }

  ngOnInit() {
    this.userConnexion = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
        Validators.compose([Validators.email])]],
      password: ['', Validators.required]
      //[, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
      /*
         At least 8 characters in length
         Lowercase letters
         Uppercase letters
         Numbers
         Special characters
       */

    });
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.connection = 'none';
    this.emitNoneDisplay.emit(this.connection);
  }

  onLogin() {
    this.isSubmit = true;
    if (this.userConnexion.invalid) {
      return;
    }
    this.authentificationService.login(this.userConnexion.value).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data.body));
      this.router.navigateByUrl('monEspace')
      this.closePopup();
    }, err => {
      this.errorMsg = err.error.message;
    });
  }
}
