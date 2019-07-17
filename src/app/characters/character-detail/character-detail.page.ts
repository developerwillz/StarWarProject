import { Component, OnInit } from '@angular/core';
import { StarWarServiceService } from 'src/app/star-war-service.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  character;
  characterName;
  Rep;
  public finalResult = [];
  keyHomeWorld = 'homeworld';
  keySpecies = 'species';
  keyName = 'name';
  keyStarShip = 'starships';
  keyVehicle = 'vehicles';
  keyTitle = 'title';
  keyUrl = 'url';
  keyResult = 'results';
  sum: string;
  comments: string[] = [];
  commentInput: string;
  constructor(private service: StarWarServiceService,
              private http: HttpClient,
              public storage: Storage,
              private socialSharing: SocialSharing,
              private router: Router,
               ) {
               }

  ngOnInit() {
    //
    this.character = this.service.currentCharacter;
    // console.log('init' + this.service.currentCharacter);
    this.Rep = JSON.parse(JSON.stringify(this.character));
    // DATA
    this.storage.get(this.character[this.keyName]).then((val) => {
      // console.log('Your test is', val);
      if (val != null) {
      this.comments = val;
      } else {
        this.comments = [];
      }
    });

    // Set for home world
    this.http.get(this.character[this.keyHomeWorld]).subscribe(data => {
      this.Rep[this.keyHomeWorld] = data[this.keyName];
    });
    // Set for species
    this.service.getResult(this.character[this.keySpecies]).subscribe(data => {
      this.Rep[this.keySpecies] = data[this.keyName];
    });
    // set for Star Ships
    // const starShips = this.character[this.keyStarShip];
    // // this.character[this.keyStarShip] = null;
    // starShips.forEach(item => {
    //   this.service.getResult(item).subscribe(data => {
    //     if (this.character[this.keyStarShip] == null) {
    //     this.character[this.keyStarShip] = data[this.keyName]; } else {
    //       this.character[this.keyStarShip] += ', ' + data[this.keyName];
    //     }
    //   });
    // });
    this.ReplaceUrl('starships');
    // Set for vihicles
    this.ReplaceUrl('vehicles');
    // Set for Film
    this.ReplaceUrl('films');
  }
  ReplaceUrl(keyword) {
    const stuff =  this.Rep[keyword];
    // console.log(keyword, this.Rep[keyword]);
    if (typeof(stuff) === 'string') {
    this.Rep[keyword] = [];
    this.service.getResult(this.character[keyword]).subscribe(data => {
      this.Rep[keyword].push(JSON.parse((data[this.keyName]))); });
    // console.log('afterREP', typeof(this.Rep[keyword]));
    // console.log('afterCH', typeof(this.character[keyword]));
    } else {
    this.Rep[keyword] = [];
    stuff.forEach(item => {
      this.service.getResult(item).subscribe(data => {
        if (keyword === 'films') {
          if (data[this.keyTitle] != null) {
          this.Rep[keyword].push(data[this.keyTitle]);
          // console.log('AfterCHARA-film-DATA', data[this.keyTitle]);
        }} else {
          this.Rep[keyword].push(data[this.keyName]);
          // console.log( keyword + 'data', data[this.keyName]);
          // .log('AfterCHARA', this.character[keyword]);
        }
      });
    });
    }
  }
  refresh() {
    this.comments.push(this.commentInput);
    // console.log(this.comments);
    this.storage.set(this.character[this.keyName], this.comments);
  }
  // Social Sharing
  ShareFacebook() {
    this.socialSharing.shareViaFacebook('this.character[this.keyUrl]').then(() => {

    }).catch( e => {

    });
  }
  // navigation
  naviStarships(c) {
    // console.log('pre service ' + this.service.currentStarShip);
    this.http.get(c).subscribe(data => {
      this.service.currentStarShip = data;
    });
    console.log('service is ' + this.service.currentStarShip);
    if (this.service.currentStarShip !== undefined) {
    this.transfer();
    }
  }
  transfer() {
    this.router.navigate(['/starship-details']);
  }
}
