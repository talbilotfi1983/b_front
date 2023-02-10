import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  @Input() inscription: any;
  @Output() emitNoneDisplay: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  closePopup() {
    this.inscription = 'none';
    this.emitNoneDisplay.emit(this.inscription);
  }
}
