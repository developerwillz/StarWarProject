(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["films-films-module"],{

/***/ "./src/app/films/films.module.ts":
/*!***************************************!*\
  !*** ./src/app/films/films.module.ts ***!
  \***************************************/
/*! exports provided: FilmsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPageModule", function() { return FilmsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _films_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./films.page */ "./src/app/films/films.page.ts");







var routes = [
    {
        path: '',
        component: _films_page__WEBPACK_IMPORTED_MODULE_6__["FilmsPage"]
    }
];
var FilmsPageModule = /** @class */ (function () {
    function FilmsPageModule() {
    }
    FilmsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_films_page__WEBPACK_IMPORTED_MODULE_6__["FilmsPage"]]
        })
    ], FilmsPageModule);
    return FilmsPageModule;
}());



/***/ }),

/***/ "./src/app/films/films.page.html":
/*!***************************************!*\
  !*** ./src/app/films/films.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Films</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let c of feedback\" (click) = \"onGoToDetail(c)\">\n      {{c.title}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/films/films.page.scss":
/*!***************************************!*\
  !*** ./src/app/films/films.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbG1zL2ZpbG1zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/films/films.page.ts":
/*!*************************************!*\
  !*** ./src/app/films/films.page.ts ***!
  \*************************************/
/*! exports provided: FilmsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsPage", function() { return FilmsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _star_war_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../star-war-service.service */ "./src/app/star-war-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FilmsPage = /** @class */ (function () {
    function FilmsPage(httpClient, service, router) {
        this.httpClient = httpClient;
        this.service = service;
        this.router = router;
        this.url = 'https://swapi.co/api/films';
        this.keyResult = 'results';
        this.keyNext = 'next';
    }
    FilmsPage.prototype.ngOnInit = function () {
        this.getResult(this.url, this.feedback);
    };
    FilmsPage.prototype.getResult = function (url, characters) {
        var _this = this;
        this.httpClient.get(url).subscribe(function (data) {
            if (characters === undefined) {
                characters = data[_this.keyResult];
            }
            else {
                characters = characters.concat(data[_this.keyResult]);
            }
            if (data[_this.keyNext] != null) {
                _this.getResult(data[_this.keyNext], characters);
            }
            else {
                // console.log('finished');
            }
            _this.feedback = characters;
        });
    };
    FilmsPage.prototype.onGoToDetail = function (c) {
        this.service.currentfilm = c;
        this.router.navigate(['/film-detail']);
    };
    FilmsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-films',
            template: __webpack_require__(/*! ./films.page.html */ "./src/app/films/films.page.html"),
            styles: [__webpack_require__(/*! ./films.page.scss */ "./src/app/films/films.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _star_war_service_service__WEBPACK_IMPORTED_MODULE_3__["StarWarServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FilmsPage);
    return FilmsPage;
}());



/***/ })

}]);
//# sourceMappingURL=films-films-module.js.map