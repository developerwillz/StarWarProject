(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starships-starships-module"],{

/***/ "./src/app/starships/starships.module.ts":
/*!***********************************************!*\
  !*** ./src/app/starships/starships.module.ts ***!
  \***********************************************/
/*! exports provided: StarshipsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipsPageModule", function() { return StarshipsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _starships_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starships.page */ "./src/app/starships/starships.page.ts");







var routes = [
    {
        path: '',
        component: _starships_page__WEBPACK_IMPORTED_MODULE_6__["StarshipsPage"]
    }
];
var StarshipsPageModule = /** @class */ (function () {
    function StarshipsPageModule() {
    }
    StarshipsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_starships_page__WEBPACK_IMPORTED_MODULE_6__["StarshipsPage"]]
        })
    ], StarshipsPageModule);
    return StarshipsPageModule;
}());



/***/ }),

/***/ "./src/app/starships/starships.page.html":
/*!***********************************************!*\
  !*** ./src/app/starships/starships.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Starships</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let c of feedback\" (click) = \"onGoToDetail(c)\">\n      {{c.name}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/starships/starships.page.scss":
/*!***********************************************!*\
  !*** ./src/app/starships/starships.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzaGlwcy9zdGFyc2hpcHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/starships/starships.page.ts":
/*!*********************************************!*\
  !*** ./src/app/starships/starships.page.ts ***!
  \*********************************************/
/*! exports provided: StarshipsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipsPage", function() { return StarshipsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _star_war_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../star-war-service.service */ "./src/app/star-war-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StarshipsPage = /** @class */ (function () {
    function StarshipsPage(http, service, router) {
        this.http = http;
        this.service = service;
        this.router = router;
        this.url = 'https://swapi.co/api/starships/';
        this.keyResult = 'results';
        this.keyNext = 'next';
    }
    StarshipsPage.prototype.ngOnInit = function () {
        this.getResult(this.url, this.feedback);
    };
    StarshipsPage.prototype.getResult = function (url, starships) {
        var _this = this;
        this.http.get(url).subscribe(function (data) {
            if (starships === undefined) {
                starships = data[_this.keyResult];
            }
            else {
                starships = starships.concat(data[_this.keyResult]);
            }
            if (data[_this.keyNext] != null) {
                _this.getResult(data[_this.keyNext], starships);
            }
            else {
                // console.log('finished');
            }
            _this.feedback = starships;
        });
    };
    StarshipsPage.prototype.onGoToDetail = function (c) {
        this.service.currentStarShip = c;
        this.router.navigate(['/starship-details']);
    };
    StarshipsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starships',
            template: __webpack_require__(/*! ./starships.page.html */ "./src/app/starships/starships.page.html"),
            styles: [__webpack_require__(/*! ./starships.page.scss */ "./src/app/starships/starships.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _star_war_service_service__WEBPACK_IMPORTED_MODULE_3__["StarWarServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StarshipsPage);
    return StarshipsPage;
}());



/***/ })

}]);
//# sourceMappingURL=starships-starships-module.js.map