import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  @Input() inscriptionGarages: any;
  constructor() { }

  ngOnInit() {
  }

}
