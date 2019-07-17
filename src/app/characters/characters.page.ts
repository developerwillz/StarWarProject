import { Component, OnInit } from '@angular/core';
import { StarWarServiceService } from '../star-war-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  feedback: any[];
  url = 'https://swapi.co/api/people';
  keyResult = 'results';
  keyNext = 'next';
  constructor(private httpClient: HttpClient, private service: StarWarServiceService, private router: Router) { }
  ngOnInit() {
    this.getResult(this.url, this.feedback);
    }
  getResult(url: string, characters: any[]) {
    this.httpClient.get(url).subscribe( data => {
      if (characters === undefined) {
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

  onGoToDetail(c) {
    // console.log('pre c' + this.service.currentCharacter);
    this.service.currentCharacter = c;
    // console.log('aft c' + this.service.currentCharacter);
    this.router.navigate(['/character-detail']);
  }
}
