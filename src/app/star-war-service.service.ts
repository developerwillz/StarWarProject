import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export enum selectType {
  all = '',
  character = 'people',
  planet = 'planets',
  starship = 'starships'
}

@Injectable({
  providedIn: 'root'
})
export class StarWarServiceService {
  public APIurl = 'https://swapi.co/api/';
  currentCharacter: any;
  currentfilm: any;
  currentSpecies: any;
  currentStarShip: any;
  currentVehicle: any;
  currentPlanet: any;
  characterComments: any[] ;
  // currentSpecies: any;
  constructor(private http: HttpClient) {
   }
   getAllResult(type: string, feedback: any[]) {
     return this.http.get(`${type}`);
  }
  getResult(type: string) {
    return this.http.get(`${type}`);
  }
}

