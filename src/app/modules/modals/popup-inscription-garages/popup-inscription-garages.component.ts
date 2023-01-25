import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-inscription-garages',
  templateUrl: './popup-inscription-garages.component.html',
  styleUrls: ['./popup-inscription-garages.component.scss']
})
export class PopupInscriptionGaragesComponent implements OnInit {
  @Input() inscriptionGarages: any;
  @Output() emitNoneDisplay: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  closePopup() {
    this.inscriptionGarages = 'none';
    this.emitNoneDisplay.emit(this.inscriptionGarages);
  }
}
