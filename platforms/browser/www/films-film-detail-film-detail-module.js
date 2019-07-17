(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["films-film-detail-film-detail-module"],{

/***/ "./src/app/films/film-detail/film-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/films/film-detail/film-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: FilmDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetailPageModule", function() { return FilmDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _film_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./film-detail.page */ "./src/app/films/film-detail/film-detail.page.ts");







var routes = [
    {
        path: '',
        component: _film_detail_page__WEBPACK_IMPORTED_MODULE_6__["FilmDetailPage"]
    }
];
var FilmDetailPageModule = /** @class */ (function () {
    function FilmDetailPageModule() {
    }
    FilmDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_film_detail_page__WEBPACK_IMPORTED_MODULE_6__["FilmDetailPage"]]
        })
    ], FilmDetailPageModule);
    return FilmDetailPageModule;
}());



/***/ }),

/***/ "./src/app/films/film-detail/film-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/films/film-detail/film-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>{{ film.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <p>Episode ID:</p>\n  <ion-card-content>{{film.episode_id}}</ion-card-content>\n  <p>Opening Crawl:</p>\n  <ion-card-content>{{film.opening_crawl}}</ion-card-content>\n  <p>Director:</p>\n  <ion-card-content>{{film.director}}</ion-card-content>\n  <p>Producer:</p>\n  <ion-card-content>{{film.producer}}</ion-card-content>\n  <p>Release Date:</p>\n  <ion-card-content>{{film.release_date}}</ion-card-content>\n    <p>Characters:</p>\n    <ul>\n      <li *ngFor=\"let character of film.characters\">\n        {{ character }}\n      </li>\n    </ul>\n    <p>Planets:</p>\n    <ul>\n      <li *ngFor=\"let planet of film.planets\">\n        {{ planet }}\n      </li>\n    </ul>\n    <p>Star Ships:</p>\n    <ul>\n      <li *ngFor=\"let starship of film.starships\">\n        {{ starship }}\n      </li>\n    </ul>\n    <p>Vehivles:</p>\n    <ul>\n      <li *ngFor=\"let vehicle of film.vehicles\">\n        {{ vehicle }}\n      </li>\n    </ul>\n    <p>Species:</p>\n    <ul>\n      <li *ngFor=\"let s of film.species\">\n        {{ s }}\n      </li>\n    </ul>\n    <p><strong>created: </strong></p>\n    <p>{{film.created}}</p>\n    <p><strong>edited: </strong></p>\n    <p>{{film.edited}}</p>\n    <p><strong>url: </strong></p>\n    <p>{{film.url}}</p>\n</ion-card>\n<div>\n  <ion-grid>\n    <ion-row *ngFor=\"let comment of comments\">\n        <ion-chip ion-col>\n          <ion-label>{{ comment }}</ion-label>\n        </ion-chip>\n    </ion-row>\n  </ion-grid>\n</div>\n<div padding>\n  <form name = 'CommentsForm' id=\"CommentsForm\">\n<ion-input [(ngModel)]=\"commentInput\" name=\"thisInput\"  placeholder=\"Enter Your Comments\" type=\"text\" requeired=\"ture\"></ion-input>\n<!-- <ion-label color=\"dark\">{{ commentInput }}</ion-label> -->\n<ion-button expand=\"block\" (click)=\"refresh()\">Submit Comments</ion-button>\n</form>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/films/film-detail/film-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/films/film-detail/film-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbG1zL2ZpbG0tZGV0YWlsL2ZpbG0tZGV0YWlsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/films/film-detail/film-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/films/film-detail/film-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: FilmDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetailPage", function() { return FilmDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_star_war_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/star-war-service.service */ "./src/app/star-war-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var FilmDetailPage = /** @class */ (function () {
    function FilmDetailPage(service, http, storage) {
        this.service = service;
        this.http = http;
        this.storage = storage;
        this.keycharacters = 'characters';
        this.keyplanets = 'planets';
        this.keyName = 'name';
        this.keyStarShip = 'starships';
        this.keyVehicle = 'vehicles';
        this.keyTitle = 'title';
        this.keyvehicles = 'vehicles';
        this.comments = [];
    }
    FilmDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.film = this.service.currentfilm;
        this.Rep = JSON.parse(JSON.stringify(this.film));
        // DATA
        this.storage.get(this.film[this.keyName]).then(function (val) {
            console.log('Your test is', val);
            if (val != null) {
                _this.comments = val;
            }
            else {
                _this.comments = [];
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
    };
    FilmDetailPage.prototype.ReplaceUrl = function (keyword) {
        var _this = this;
        var stuff = this.Rep[keyword];
        // console.log('BEFORE_REPkeyword', this.Rep[keyword]);
        // console.log('BEFORE_PLANETkeyword', this.planet[keyword]);
        if (typeof (stuff) === 'string') {
            this.Rep[keyword] = [];
            this.service.getResult(this.film[keyword]).subscribe(function (data) {
                _this.Rep[keyword].push(JSON.parse((data[_this.keyName])));
            });
            // console.log('after', typeof(this.Rep[keyword]));
        }
        else {
            this.Rep[keyword] = [];
            stuff.forEach(function (item) {
                _this.service.getResult(item).subscribe(function (data) {
                    if (keyword === 'films') {
                        if (data[_this.keyTitle] != null) {
                            _this.Rep[keyword].push(data[_this.keyTitle]);
                            // console.log('REP_film-DATA', this.Rep[this.keyTitle]);
                            // console.log('After_PlanetIF', this.planet[keyword]);
                            // console.log('After_RepIF', this.Rep[keyword]);
                        }
                    }
                    else {
                        _this.Rep[keyword].push(data[_this.keyName]);
                        // console.log( 'REP_Other', this.Rep[this.keyName]);
                        // console.log('After_PlanetELSE', this.planet[keyword]);
                    }
                });
            });
        }
    };
    FilmDetailPage.prototype.refresh = function () {
        this.comments.push(this.commentInput);
        // console.log(this.comments);
        this.storage.set(this.film[this.keyName], this.comments);
    };
    FilmDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-film-detail',
            template: __webpack_require__(/*! ./film-detail.page.html */ "./src/app/films/film-detail/film-detail.page.html"),
            styles: [__webpack_require__(/*! ./film-detail.page.scss */ "./src/app/films/film-detail/film-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_star_war_service_service__WEBPACK_IMPORTED_MODULE_2__["StarWarServiceService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], FilmDetailPage);
    return FilmDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=films-film-detail-film-detail-module.js.map