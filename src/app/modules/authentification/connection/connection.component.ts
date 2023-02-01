import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  @Input() connection: any;
  @Output() emitNoneDisplay: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  closePopup() {
    this.connection = 'none';
    this.emitNoneDisplay.emit(this.connection);
  }
}
