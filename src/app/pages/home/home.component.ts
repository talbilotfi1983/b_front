import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../../services/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private authentificationService: AuthentificationService, private router: Router) {
  }

  ngOnInit() {
  }
}
