import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-garages',
  templateUrl: './popup-garages.component.html',
  styleUrls: ['./popup-garages.component.scss']
})
export class PopupGaragesComponent implements OnInit {
  @Output() emitNoneDisplay: EventEmitter<any> = new EventEmitter();
  @Input() garages: any;
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.garages = 'none';
    this.emitNoneDisplay.emit(this.garages);
  }
}
