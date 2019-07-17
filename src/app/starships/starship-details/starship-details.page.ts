import { Component, OnInit } from '@angular/core';
import { StarWarServiceService } from 'src/app/star-war-service.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.page.html',
  styleUrls: ['./starship-details.page.scss'],
})
export class StarshipDetailsPage implements OnInit {
  starship;
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
    this.starship = this.service.currentStarShip;
    this.service.currentStarShip = undefined;
    this.Rep = JSON.parse(JSON.stringify(this.starship));
    // DATA
    this.storage.get(this.starship[this.keyName]).then((val) => {
      // console.log('Your test is', val);
      if (val != null) {
      this.comments = val;
      } else {
        this.comments = [];
      }
    });

        // SET FOR FILM
    this.ReplaceUrl('films');
        // SET FOR PIROT
    this.ReplaceUrl('pilots');
  }
  ReplaceUrl(keyword) {
    const stuff =  this.Rep[keyword];
    // console.log(keyword, this.Rep[keyword]);
    if (typeof(stuff) === 'string') {
    this.Rep[keyword] = [];
    this.service.getResult(this.Rep[keyword]).subscribe(data => {
      this.Rep[keyword].push(JSON.parse((data[this.keyName]))); });
    // console.log('after', typeof(this.Rep[keyword]));
    } else {
    this.Rep[keyword] = [];
    stuff.forEach(item => {
      this.service.getResult(item).subscribe(data => {
        if (keyword === 'films') {
          if (data[this.keyTitle] != null) {
          this.Rep[keyword].push(data[this.keyTitle]);
          // console.log('film-DATA', data[this.keyTitle]);
        }} else {
          this.Rep[keyword].push(data[this.keyName]);
          // console.log( keyword + 'data', data[this.keyName]);
          // console.log('After', this.specie[keyword]);
        }
      });
    });
    }
  }
  refresh() {
    this.comments.push(this.commentInput);
    console.log(this.comments);
    this.storage.set(this.starship[this.keyName], this.comments);
  }
    // Social Sharing
    ShareFacebook() {
      this.socialSharing.shareViaFacebook('this.character[this.keyUrl]').then(() => {
      }).catch( e => {
      });
    }


}
