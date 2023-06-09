import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  login(user: any) {
    const body = {
      password: user.password,
      email: user.email
    };
    const httpOptions = {
      // application: this.app,
    };
    return this.http.post(this.host + 'user/login', body, {
      observe: 'response',
      headers: httpOptions
    });
  }

  // tslint:disable-next-line:typedef
  inscription(payload: any) {
    const httpOptions = {
      // application: this.app,
    };
    return this.http.post(this.host + 'garage/add', payload, {
      observe: 'response',
      headers: httpOptions
    });
  }

  // tslint:disable-next-line:typedef
  addLogo(payload: any) {
    return this.http.put(this.host + `garage/upload/${payload.id}`, payload.formData);
  }
 // tslint:disable-next-line:typedef
  contactAdmin(payload: any) {
    return this.http.post(this.host + 'user/contactAdmin', payload);
  }
  getToken() {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return user?.token;
  }

  cheekLoging() {
    return this.getToken()
  }
}
