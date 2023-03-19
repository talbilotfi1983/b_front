import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../../services/authentification.service";
import {Router} from "@angular/router";

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
}
