import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  @Input() inscriptionGarages: any;
  @Input() connection: any;
  @Input() inscription: any;
  constructor() { }

  ngOnInit() {
  }

}
