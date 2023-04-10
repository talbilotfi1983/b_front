import {Component, Input, OnInit} from '@angular/core';
import {AuthentificationService} from "../../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  @Input() inscriptionGarages: any;
  @Input() connection: any;
  @Input() inscription: any;
  isLogged: any;

  constructor(private authentificationService: AuthentificationService, private router: Router) {
  }

  ngOnInit() {
  }

  loginOut() {
    this.isLogged = this.authentificationService.cheekLoging();
    if (this.isLogged) {
      localStorage.removeItem('user')
      this.router.navigateByUrl('/')
    } else {
      this.connection = 'block'
    }
  }


  getLogged() {
    return this.authentificationService.cheekLoging();
  }

}
