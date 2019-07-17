import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarServiceService } from '../star-war-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {
  feedback: any[];
  url = 'https://swapi.co/api/starships/';
  keyResult = 'results';
  keyNext = 'next';
  constructor(private http: HttpClient, private service: StarWarServiceService, private router: Router) { }

  ngOnInit() {
    this.getResult(this.url, this.feedback);
  }
  getResult(url: string, starships: any[]){
    this.http.get(url).subscribe( data => {
      if(starships === undefined) {
        starships = data[this.keyResult];
      } else {
        starships = starships.concat(data[this.keyResult]);
      }
      if (data[this.keyNext] != null) {
        this.getResult (data[this.keyNext], starships);
      } else {
        // console.log('finished');
      }
      this.feedback = starships;
    });
  }

  onGoToDetail(c){
    this.service.currentStarShip = c;
    this.router.navigate(['/starship-details']);
  }

}
