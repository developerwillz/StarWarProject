import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarServiceService } from '../star-war-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

  feedback: any[];
  url = 'https://swapi.co/api/films';
  keyResult = 'results';
  keyNext = 'next';

  constructor(private httpClient:HttpClient, private service: StarWarServiceService, private router: Router) { }

  ngOnInit() {
    this.getResult(this.url, this.feedback);
  }
  getResult(url: string, characters: any[]){
    this.httpClient.get(url).subscribe( data => {
      if(characters === undefined) {
        characters = data[this.keyResult];
      } else {
        characters = characters.concat(data[this.keyResult]);
      }
      if (data[this.keyNext] != null) {
        this.getResult (data[this.keyNext], characters);
      } else {
        // console.log('finished');
      }
      this.feedback = characters;
    });
  }

  onGoToDetail(c){
    this.service.currentfilm = c;
    this.router.navigate(['/film-detail']);
  }

}
