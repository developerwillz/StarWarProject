import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarServiceService } from '../star-war-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  feedback: any[];
  url = 'https://swapi.co/api/planets/';
  keyResult = 'results';
  keyNext = 'next';
  constructor(private httpClient: HttpClient, private service: StarWarServiceService, private router: Router) { }

  ngOnInit() {
    this.getResult(this.url, this.feedback);
  }
  getResult(url: string, species: any[]) {
    this.httpClient.get(url).subscribe( data => {
      if( species === undefined) {
        species = data[this.keyResult];
      } else {
        species = species.concat(data[this.keyResult]);
      }
      if (data[this.keyNext] != null) {
        this.getResult (data[this.keyNext], species);
      } else {
        //console.log('finished', this.feedback);
      }
      this.feedback = species;
    });
  }

  onGoToDetail(c) {
    this.service.currentPlanet = c;
    this.router.navigate(['/planet-details']);
  }

}
