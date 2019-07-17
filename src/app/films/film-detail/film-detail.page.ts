import { Component, OnInit } from '@angular/core';
import { StarWarServiceService } from 'src/app/star-war-service.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {
  film;
  Rep;
  keycharacters = 'characters';
  keyplanets = 'planets';
  keyName = 'name';
  keyStarShip = 'starships';
  keyVehicle = 'vehicles';
  keyTitle = 'title';
  keyvehicles = 'vehicles';
  comments: string[] = [];
  commentInput: string;
  constructor(private service: StarWarServiceService,
              private http: HttpClient,
              public storage: Storage,
              private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.film = this.service.currentfilm;
    this.Rep = JSON.parse(JSON.stringify(this.film));
        // DATA
    this.storage.get(this.film[this.keyName]).then((val) => {
          console.log('Your test is', val);
          if (val != null) {
          this.comments = val;
          } else {
            this.comments = [];
          }
        });

    // SET FOR CHARACTERS
    this.ReplaceUrl('characters');
    // SET FOR PLANTETS
    this.ReplaceUrl('planets');
    // SET FOR STARSHIPS
    this.ReplaceUrl('starships');
    // SET FOR VEHICLES
    this.ReplaceUrl('vehicles');
    // SET FOR SPECIES
    this.ReplaceUrl('species');
  }

  ReplaceUrl(keyword) {
    const stuff =  this.Rep[keyword];
    // console.log('BEFORE_REPkeyword', this.Rep[keyword]);
    // console.log('BEFORE_PLANETkeyword', this.planet[keyword]);
    if (typeof(stuff) === 'string') {
    this.Rep[keyword] = [];
    this.service.getResult(this.film[keyword]).subscribe(data => {
      this.Rep[keyword].push(JSON.parse((data[this.keyName]))); });

    // console.log('after', typeof(this.Rep[keyword]));
    } else {
    this.Rep[keyword] = [];

    stuff.forEach(item => {
      this.service.getResult(item).subscribe(data => {
        if (keyword === 'films') {
          if (data[this.keyTitle] != null) {
          this.Rep[keyword].push(data[this.keyTitle]);
          // console.log('REP_film-DATA', this.Rep[this.keyTitle]);
          // console.log('After_PlanetIF', this.planet[keyword]);
          // console.log('After_RepIF', this.Rep[keyword]);
        }} else {
          this.Rep[keyword].push(data[this.keyName]);
          // console.log( 'REP_Other', this.Rep[this.keyName]);
          // console.log('After_PlanetELSE', this.planet[keyword]);
        }
      });
    });
    }
  }

  refresh() {
    this.comments.push(this.commentInput);
    // console.log(this.comments);
    this.storage.set(this.film[this.keyName], this.comments);
  }
    // Social Sharing
    ShareFacebook() {
      this.socialSharing.shareViaFacebook('this.character[this.keyUrl]').then(() => {
      }).catch( e => {
      });
    }

}
