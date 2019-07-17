import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarServiceService } from '../star-war-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  feedback: any[];
  url = 'https://swapi.co/api/vehicles/';
  keyResult = 'results';
  keyNext = 'next';
  constructor(private httpClient: HttpClient, private service: StarWarServiceService, private router: Router) { }

  ngOnInit() {
    this.getResult(this.url, this.feedback);
  }
  getResult(url: string, species: any[]) {
    this.httpClient.get(url).subscribe( data => {
      if ( species === undefined) {
        species = data[this.keyResult];
      } else {
        species = species.concat(data[this.keyResult]);
      }
      if (data[this.keyNext] != null) {
        this.getResult (data[this.keyNext], species);
      } else {
        // console.log('finished', this.feedback);
      }
      this.feedback = species;
    });
  }

  onGoToDetail(c) {
    this.service.currentVehicle = c;
    this.router.navigate(['/vehicle-details']);
  }

}
