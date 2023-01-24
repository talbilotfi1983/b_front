import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // @ts-ignore
    var response = grecaptcha.getResponse();
    var captcha = document.getElementById('error_captcha');
    // @ts-ignore
    function get_action(form) {
      // @ts-ignore
      var v = grecaptcha.getResponse();
      if (v.length == 0) {
        // @ts-ignore
        document.getElementById('error_captcha').style.display = 'none';
        return false;

      } else {
        // @ts-ignore
        document.getElementById('error_captcha').style.display = 'block';
        return true;
      }
    }
    get_action('bouton');
  }

}
