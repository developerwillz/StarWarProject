(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starships-starship-details-starship-details-module"],{

/***/ "./src/app/starships/starship-details/starship-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/starships/starship-details/starship-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: StarshipDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipDetailsPageModule", function() { return StarshipDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _starship_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starship-details.page */ "./src/app/starships/starship-details/starship-details.page.ts");







var routes = [
    {
        path: '',
        component: _starship_details_page__WEBPACK_IMPORTED_MODULE_6__["StarshipDetailsPage"]
    }
];
var StarshipDetailsPageModule = /** @class */ (function () {
    function StarshipDetailsPageModule() {
    }
    StarshipDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_starship_details_page__WEBPACK_IMPORTED_MODULE_6__["StarshipDetailsPage"]]
        })
    ], StarshipDetailsPageModule);
    return StarshipDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/starships/starship-details/starship-details.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/starships/starship-details/starship-details.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>{{ Rep.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <p>Model:</p>\n      <ion-card-content>{{Rep.model}}</ion-card-content>\n      <p>Manufacturer:</p>\n      <ion-card-content>{{Rep.manufacturer}}</ion-card-content>\n      <p>Cost in_Credits:</p>\n      <ion-card-content>{{Rep.cost_in_credits}}</ion-card-content>\n      <p>Length:</p>\n      <ion-card-content>{{Rep.length}}</ion-card-content>\n      <p>Max Atmosphering Speed:</p>\n      <ion-card-content>{{Rep.max_atmosphering_speed}}</ion-card-content>\n      <p>Crew:</p>\n      <ion-card-content>{{Rep.crew}}</ion-card-content>\n      <p>Passengers:</p>\n      <ion-card-content>{{Rep.passengers}}</ion-card-content>\n      <p>Cargo Capacity:</p>\n      <ion-card-content>{{Rep.cargo_capacity}}</ion-card-content>\n      <p>Consumables:</p>\n      <ion-card-content>{{Rep.consumables}}</ion-card-content>\n      <p>Hyperdrive Rating:</p>\n      <ion-card-content>{{Rep.hyperdrive_rating}}</ion-card-content>\n      <p>MGLT:</p>\n      <ion-card-content>{{Rep.MGLT}}</ion-card-content>\n      <p>Starship Class:</p>\n      <ion-card-content>{{Rep.starship_class}}</ion-card-content>\n      <p>Pilots:</p>\n      <ul>\n        <li *ngFor=\"let p of Rep.pilots\">\n          {{ p }}\n        </li>\n      </ul>\n      <p>Films:</p>\n      <ul>\n        <li *ngFor=\"let f of Rep.films\">\n          {{ f }}\n        </li>\n      </ul>\n      <p>Created:</p>\n      <ion-card-content>{{Rep.created}}</ion-card-content>\n      <p>Edited:</p>\n      <ion-card-content>{{Rep.edited}}</ion-card-content>\n      <p>url:</p>\n      <ion-card-content>{{Rep.url}}</ion-card-content>\n    </ion-card>\n    \n<div>\n  <ion-grid>\n    <ion-row *ngFor=\"let comment of comments\">\n        <ion-chip ion-col>\n          <ion-label>{{ comment }}</ion-label>\n        </ion-chip>\n    </ion-row>\n  </ion-grid>\n</div>\n<div padding>\n  <form name = 'CommentsForm' id=\"CommentsForm\">\n<ion-input [(ngModel)]=\"commentInput\" name=\"thisInput\"  placeholder=\"Enter Your Comments\" type=\"text\" requeired=\"ture\"></ion-input>\n<!-- <ion-label color=\"dark\">{{ commentInput }}</ion-label> -->\n<ion-button expand=\"block\" (click)=\"refresh()\">Submit Comments</ion-button>\n</form>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/starships/starship-details/starship-details.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/starships/starship-details/starship-details.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzaGlwcy9zdGFyc2hpcC1kZXRhaWxzL3N0YXJzaGlwLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/starships/starship-details/starship-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/starships/starship-details/starship-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: StarshipDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipDetailsPage", function() { return StarshipDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_star_war_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/star-war-service.service */ "./src/app/star-war-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var StarshipDetailsPage = /** @class */ (function () {
    function StarshipDetailsPage(service, http, storage) {
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
    StarshipDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.starship = this.service.currentStarShip;
        this.Rep = JSON.parse(JSON.stringify(this.starship));
        // DATA
        this.storage.get(this.starship[this.keyName]).then(function (val) {
            // console.log('Your test is', val);
            if (val != null) {
                _this.comments = val;
            }
            else {
                _this.comments = [];
            }
        });
        // SET FOR FILM
        this.ReplaceUrl('films');
        // SET FOR PIROT
        this.ReplaceUrl('pilots');
    };
    StarshipDetailsPage.prototype.ReplaceUrl = function (keyword) {
        var _this = this;
        var stuff = this.Rep[keyword];
        // console.log(keyword, this.Rep[keyword]);
        if (typeof (stuff) === 'string') {
            this.Rep[keyword] = [];
            this.service.getResult(this.Rep[keyword]).subscribe(function (data) {
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
                            // console.log('film-DATA', data[this.keyTitle]);
                        }
                    }
                    else {
                        _this.Rep[keyword].push(data[_this.keyName]);
                        // console.log( keyword + 'data', data[this.keyName]);
                        // console.log('After', this.specie[keyword]);
                    }
                });
            });
        }
    };
    StarshipDetailsPage.prototype.refresh = function () {
        this.comments.push(this.commentInput);
        console.log(this.comments);
        this.storage.set(this.starship[this.keyName], this.comments);
    };
    StarshipDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starship-details',
            template: __webpack_require__(/*! ./starship-details.page.html */ "./src/app/starships/starship-details/starship-details.page.html"),
            styles: [__webpack_require__(/*! ./starship-details.page.scss */ "./src/app/starships/starship-details/starship-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_star_war_service_service__WEBPACK_IMPORTED_MODULE_2__["StarWarServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], StarshipDetailsPage);
    return StarshipDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=starships-starship-details-starship-details-module.js.map