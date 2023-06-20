import { Injectable, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerLoadingService implements OnInit {

  constructor(
    private spinner: NgxSpinnerService) {
  }
  ngOnInit(): void {
    // spinner démarre à l'init
    this.spinner.show();

    // spinner se termine après 5 secondes
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
  }

}
