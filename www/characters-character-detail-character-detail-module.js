(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-character-detail-character-detail-module"],{

/***/ "./src/app/characters/character-detail/character-detail.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/characters/character-detail/character-detail.module.ts ***!
  \************************************************************************/
/*! exports provided: CharacterDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailPageModule", function() { return CharacterDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _character_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-detail.page */ "./src/app/characters/character-detail/character-detail.page.ts");







var routes = [
    {
        path: '',
        component: _character_detail_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailPage"]
    }
];
var CharacterDetailPageModule = /** @class */ (function () {
    function CharacterDetailPageModule() {
    }
    CharacterDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_character_detail_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailPage"]]
        })
    ], CharacterDetailPageModule);
    return CharacterDetailPageModule;
}());



/***/ }),

/***/ "./src/app/characters/character-detail/character-detail.page.html":
/*!************************************************************************!*\
  !*** ./src/app/characters/character-detail/character-detail.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>Character Detail</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"ShareFacebook()\">\n        <ion-icon slot=\"icon-only\" name=\"logo-facebook\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <ion-card-content>\n          <ion-card-title>{{Rep.name}}</ion-card-title>\n          <br>\n          <p>gender: {{Rep.gender}}</p>\n          <p>height: {{Rep.height}}</p>\n          <p>birth year: {{Rep.birth_year}}</p>\n          <p>mass: {{Rep.mass}}</p>\n          <p>hair color: {{Rep.hair_color}}</p>\n          <p>skin color: {{Rep.skin_color}}</p>\n          <p>eye color: {{Rep.eye_color}}</p>\n          <p>homeworld: {{Rep.homeworld}}</p>\n          <p>species: {{Rep.species}}</p>\n          <p>starships:</p>\n          <ul>\n            <li *ngFor=\"let starship of Rep.starships\">\n              {{ starship }}\n            </li>\n          </ul>\n          <p>vehicles:</p>\n          <ul>\n            <li *ngFor=\"let vehicle of Rep.vehicles\">\n              {{ vehicle }}\n            </li>\n          </ul>\n          <p>Film:</p>\n          <ul>\n            <li *ngFor=\"let film of Rep.films\">\n              {{ film }}\n            </li>\n          </ul>\n          <p>created: {{Rep.created}}</p>\n          <p>edited: {{Rep.edited}}</p>\n          <p>url: {{Rep.url}}</p>\n        </ion-card-content>\n      </ion-card>\n      <div>\n        <ion-grid>\n          <ion-row *ngFor=\"let comment of comments\">\n              <ion-chip ion-col>\n                <ion-label>{{ comment }}</ion-label>\n              </ion-chip>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div padding>\n        <form name = 'CommentsForm' id=\"CommentsForm\">\n      <ion-input [(ngModel)]=\"commentInput\" name=\"thisInput\"  placeholder=\"Enter Your Comments\" type=\"text\" requeired=\"ture\"></ion-input>\n      <!-- <ion-label color=\"dark\">{{ commentInput }}</ion-label> -->\n      <ion-button expand=\"block\" (click)=\"refresh()\">Submit Comments</ion-button>\n    </form>\n    </div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/characters/character-detail/character-detail.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/characters/character-detail/character-detail.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVyLWRldGFpbC9jaGFyYWN0ZXItZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/characters/character-detail/character-detail.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/characters/character-detail/character-detail.page.ts ***!
  \**********************************************************************/
/*! exports provided: CharacterDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailPage", function() { return CharacterDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_star_war_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/star-war-service.service */ "./src/app/star-war-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");






var CharacterDetailPage = /** @class */ (function () {
    function CharacterDetailPage(service, http, storage, socialSharing) {
        this.service = service;
        this.http = http;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.finalResult = [];
        this.keyHomeWorld = 'homeworld';
        this.keySpecies = 'species';
        this.keyName = 'name';
        this.keyStarShip = 'starships';
        this.keyVehicle = 'vehicles';
        this.keyTitle = 'title';
        this.keyUrl = 'url';
        this.comments = [];
    }
    CharacterDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        //
        this.character = this.service.currentCharacter;
        this.Rep = JSON.parse(JSON.stringify(this.character));
        // DATA
        this.storage.get(this.character[this.keyName]).then(function (val) {
            // console.log('Your test is', val);
            if (val != null) {
                _this.comments = val;
            }
            else {
                _this.comments = [];
            }
        });
        // Set for home world
        this.http.get(this.character[this.keyHomeWorld]).subscribe(function (data) {
            _this.Rep[_this.keyHomeWorld] = data[_this.keyName];
        });
        // Set for species
        this.service.getResult(this.character[this.keySpecies]).subscribe(function (data) {
            _this.Rep[_this.keySpecies] = data[_this.keyName];
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
    };
    CharacterDetailPage.prototype.ReplaceUrl = function (keyword) {
        var _this = this;
        var stuff = this.Rep[keyword];
        // console.log(keyword, this.Rep[keyword]);
        if (typeof (stuff) === 'string') {
            this.Rep[keyword] = [];
            this.service.getResult(this.character[keyword]).subscribe(function (data) {
                _this.Rep[keyword].push(JSON.parse((data[_this.keyName])));
            });
            // console.log('afterREP', typeof(this.Rep[keyword]));
            // console.log('afterCH', typeof(this.character[keyword]));
        }
        else {
            this.Rep[keyword] = [];
            stuff.forEach(function (item) {
                _this.service.getResult(item).subscribe(function (data) {
                    if (keyword === 'films') {
                        if (data[_this.keyTitle] != null) {
                            _this.Rep[keyword].push(data[_this.keyTitle]);
                            // console.log('AfterCHARA-film-DATA', data[this.keyTitle]);
                        }
                    }
                    else {
                        _this.Rep[keyword].push(data[_this.keyName]);
                        // console.log( keyword + 'data', data[this.keyName]);
                        // .log('AfterCHARA', this.character[keyword]);
                    }
                });
            });
        }
    };
    CharacterDetailPage.prototype.refresh = function () {
        this.comments.push(this.commentInput);
        // console.log(this.comments);
        this.storage.set(this.character[this.keyName], this.comments);
    };
    // Social Sharing
    CharacterDetailPage.prototype.ShareFacebook = function () {
        this.socialSharing.shareViaFacebook('this.character[this.keyUrl]').then(function () {
        }).catch(function (e) {
        });
    };
    CharacterDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-character-detail',
            template: __webpack_require__(/*! ./character-detail.page.html */ "./src/app/characters/character-detail/character-detail.page.html"),
            styles: [__webpack_require__(/*! ./character-detail.page.scss */ "./src/app/characters/character-detail/character-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_star_war_service_service__WEBPACK_IMPORTED_MODULE_2__["StarWarServiceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
    ], CharacterDetailPage);
    return CharacterDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=characters-character-detail-character-detail-module.js.map