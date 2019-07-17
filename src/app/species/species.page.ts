import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarServiceService } from '../star-war-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {

  feedback: any[];
  url = 'https://swapi.co/api/species/';
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
    this.service.currentSpecies = c;
    this.router.navigate(['/species-details']);
  }

}
