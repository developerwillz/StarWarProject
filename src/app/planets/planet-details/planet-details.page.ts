import { Component, OnInit } from '@angular/core';
import { StarWarServiceService } from 'src/app/star-war-service.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.page.html',
  styleUrls: ['./planet-details.page.scss'],
})
export class PlanetDetailsPage implements OnInit {
  planet;
  Rep;
  Temp: any[];
  keyhomeworld = 'homeworld';
  keyName = 'name';
  keypeople = 'people';
  keyVehicle = 'vehicles';
  keyTitle = 'title';
  keyfilms = 'films';
  comments: string[] = [];
  commentInput: string;

  constructor(private service: StarWarServiceService,
              private httpClient: HttpClient, public storage: Storage,
              private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.planet = this.service.currentPlanet;
    this.Rep = JSON.parse(JSON.stringify(this.planet));
        // DATA part starts
    this.storage.get(this.planet[this.keyName]).then((val) => {
          // console.log('Your test is', val);
          if (val != null) {
          this.comments = val;
          } else {
            this.comments = [];
          }
        });
        // DATA part ends
        // SET FOR FILM
    this.ReplaceUrl('films');
        // SET FOR PIROT
    this.ReplaceUrl('residents');
  }

  ReplaceUrl(keyword) {
    const stuff =  this.Rep[keyword];
    // console.log('BEFORE_REPkeyword', this.Rep[keyword]);
    // console.log('BEFORE_PLANETkeyword', this.planet[keyword]);
    if (typeof(stuff) === 'string') {
    this.Rep[keyword] = [];
    this.service.getResult(this.planet[keyword]).subscribe(data => {
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
    console.log(this.comments);
    this.storage.set(this.planet[this.keyName], this.comments);
  }
  // Social Sharing
  ShareFacebook() {
    this.socialSharing.shareViaFacebook('this.character[this.keyUrl]').then(() => {

    }).catch( e => {

    });
  }

}
