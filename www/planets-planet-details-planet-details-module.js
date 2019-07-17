(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["planets-planet-details-planet-details-module"],{

/***/ "./src/app/planets/planet-details/planet-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/planets/planet-details/planet-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlanetDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetDetailsPageModule", function() { return PlanetDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _planet_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./planet-details.page */ "./src/app/planets/planet-details/planet-details.page.ts");







var routes = [
    {
        path: '',
        component: _planet_details_page__WEBPACK_IMPORTED_MODULE_6__["PlanetDetailsPage"]
    }
];
var PlanetDetailsPageModule = /** @class */ (function () {
    function PlanetDetailsPageModule() {
    }
    PlanetDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_planet_details_page__WEBPACK_IMPORTED_MODULE_6__["PlanetDetailsPage"]]
        })
    ], PlanetDetailsPageModule);
    return PlanetDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/planets/planet-details/planet-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/planets/planet-details/planet-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>{{ Rep.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <p>Rotation Period:</p>\n        <ion-card-content>{{Rep.rotation_period}}</ion-card-content>\n        <p>Orbital Period:</p>\n        <ion-card-content>{{Rep.orbital_period}}</ion-card-content>\n        <p>Diameter:</p>\n        <ion-card-content>{{Rep.diameter}}</ion-card-content>\n        <p>Climate:</p>\n        <ion-card-content>{{Rep.climate}}</ion-card-content>\n        <p>Gravity:</p>\n        <ion-card-content>{{Rep.gravity}}</ion-card-content>\n        <p>Terrain:</p>\n        <ion-card-content>{{Rep.terrain}}</ion-card-content>\n        <p>Surface Water:</p>\n        <ion-card-content>{{Rep.surface_water}}</ion-card-content>\n        <p>Population:</p>\n        <ion-card-content>{{Rep.population}}</ion-card-content>\n        <p>Residents:</p>\n      <ul>\n        <li *ngFor=\"let r of Rep.residents\">\n          {{ r }}\n        </li>\n      </ul>\n      <p>Films:</p>\n      <ul>\n        <li *ngFor=\"let f of Rep.films\">\n          {{ f }}\n        </li>\n      </ul>\n      <p><strong>created: </strong></p>\n      <p>{{Rep.created}}</p>\n      <p><strong>edited: </strong></p>\n      <p>{{Rep.edited}}</p>\n      <p><strong>url: </strong></p>\n      <p>{{Rep.url}}</p>\n      </ion-card>\n      <div>\n        <ion-grid>\n          <ion-row *ngFor=\"let comment of comments\">\n              <ion-chip ion-col>\n                <ion-label>{{ comment }}</ion-label>\n              </ion-chip>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div padding>\n        <form name = 'CommentsForm' id=\"CommentsForm\">\n      <ion-input [(ngModel)]=\"commentInput\" name=\"thisInput\"  placeholder=\"Enter Your Comments\" type=\"text\" requeired=\"ture\"></ion-input>\n      <!-- <ion-label color=\"dark\">{{ commentInput }}</ion-label> -->\n      <ion-button expand=\"block\" (click)=\"refresh()\">Submit Comments</ion-button>\n    </form>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/planets/planet-details/planet-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/planets/planet-details/planet-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5ldHMvcGxhbmV0LWRldGFpbHMvcGxhbmV0LWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/planets/planet-details/planet-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/planets/planet-details/planet-details.page.ts ***!
  \***************************************************************/
/*! exports provided: PlanetDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetDetailsPage", function() { return PlanetDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_star_war_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/star-war-service.service */ "./src/app/star-war-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var PlanetDetailsPage = /** @class */ (function () {
    function PlanetDetailsPage(service, httpClient, storage) {
        this.service = service;
        this.httpClient = httpClient;
        this.storage = storage;
        this.keyhomeworld = 'homeworld';
        this.keyName = 'name';
        this.keypeople = 'people';
        this.keyVehicle = 'vehicles';
        this.keyTitle = 'title';
        this.keyfilms = 'films';
        this.comments = [];
    }
    PlanetDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.planet = this.service.currentPlanet;
        this.Rep = JSON.parse(JSON.stringify(this.planet));
        // DATA part starts
        this.storage.get(this.planet[this.keyName]).then(function (val) {
            // console.log('Your test is', val);
            if (val != null) {
                _this.comments = val;
            }
            else {
                _this.comments = [];
            }
        });
        // DATA part ends
        // SET FOR FILM
        this.ReplaceUrl('films');
        // SET FOR PIROT
        this.ReplaceUrl('residents');
    };
    PlanetDetailsPage.prototype.ReplaceUrl = function (keyword) {
        var _this = this;
        var stuff = this.Rep[keyword];
        // console.log('BEFORE_REPkeyword', this.Rep[keyword]);
        // console.log('BEFORE_PLANETkeyword', this.planet[keyword]);
        if (typeof (stuff) === 'string') {
            this.Rep[keyword] = [];
            this.service.getResult(this.planet[keyword]).subscribe(function (data) {
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
    PlanetDetailsPage.prototype.refresh = function () {
        this.comments.push(this.commentInput);
        console.log(this.comments);
        this.storage.set(this.planet[this.keyName], this.comments);
    };
    PlanetDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-planet-details',
            template: __webpack_require__(/*! ./planet-details.page.html */ "./src/app/planets/planet-details/planet-details.page.html"),
            styles: [__webpack_require__(/*! ./planet-details.page.scss */ "./src/app/planets/planet-details/planet-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_star_war_service_service__WEBPACK_IMPORTED_MODULE_2__["StarWarServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], PlanetDetailsPage);
    return PlanetDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=planets-planet-details-planet-details-module.js.map