import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private host = environment.host;

  constructor(private http: HttpClient) {
  }

  coordonneeGarages() {
    return this.http.get(this.host + 'garage/coordonneeGarages', {observe: 'response'});

  }
}
