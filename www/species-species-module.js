(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["species-species-module"],{

/***/ "./src/app/species/species.module.ts":
/*!*******************************************!*\
  !*** ./src/app/species/species.module.ts ***!
  \*******************************************/
/*! exports provided: SpeciesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesPageModule", function() { return SpeciesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _species_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./species.page */ "./src/app/species/species.page.ts");







var routes = [
    {
        path: '',
        component: _species_page__WEBPACK_IMPORTED_MODULE_6__["SpeciesPage"]
    }
];
var SpeciesPageModule = /** @class */ (function () {
    function SpeciesPageModule() {
    }
    SpeciesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_species_page__WEBPACK_IMPORTED_MODULE_6__["SpeciesPage"]]
        })
    ], SpeciesPageModule);
    return SpeciesPageModule;
}());



/***/ }),

/***/ "./src/app/species/species.page.html":
/*!*******************************************!*\
  !*** ./src/app/species/species.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Species</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item *ngFor=\"let c of feedback\" (click) = \"onGoToDetail(c)\">\n          {{c.name}}\n        </ion-item>\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/species/species.page.scss":
/*!*******************************************!*\
  !*** ./src/app/species/species.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpZXMvc3BlY2llcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/species/species.page.ts":
/*!*****************************************!*\
  !*** ./src/app/species/species.page.ts ***!
  \*****************************************/
/*! exports provided: SpeciesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeciesPage", function() { return SpeciesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _star_war_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../star-war-service.service */ "./src/app/star-war-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SpeciesPage = /** @class */ (function () {
    function SpeciesPage(httpClient, service, router) {
        this.httpClient = httpClient;
        this.service = service;
        this.router = router;
        this.url = 'https://swapi.co/api/species/';
        this.keyResult = 'results';
        this.keyNext = 'next';
    }
    SpeciesPage.prototype.ngOnInit = function () {
        this.getResult(this.url, this.feedback);
    };
    SpeciesPage.prototype.getResult = function (url, species) {
        var _this = this;
        this.httpClient.get(url).subscribe(function (data) {
            if (species === undefined) {
                species = data[_this.keyResult];
            }
            else {
                species = species.concat(data[_this.keyResult]);
            }
            if (data[_this.keyNext] != null) {
                _this.getResult(data[_this.keyNext], species);
            }
            else {
                //console.log('finished', this.feedback);
            }
            _this.feedback = species;
        });
    };
    SpeciesPage.prototype.onGoToDetail = function (c) {
        this.service.currentSpecies = c;
        this.router.navigate(['/species-details']);
    };
    SpeciesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-species',
            template: __webpack_require__(/*! ./species.page.html */ "./src/app/species/species.page.html"),
            styles: [__webpack_require__(/*! ./species.page.scss */ "./src/app/species/species.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _star_war_service_service__WEBPACK_IMPORTED_MODULE_3__["StarWarServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SpeciesPage);
    return SpeciesPage;
}());



/***/ })

}]);
//# sourceMappingURL=species-species-module.js.map