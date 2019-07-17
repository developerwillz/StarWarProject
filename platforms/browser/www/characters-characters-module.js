(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"],{

/***/ "./src/app/characters/characters.module.ts":
/*!*************************************************!*\
  !*** ./src/app/characters/characters.module.ts ***!
  \*************************************************/
/*! exports provided: CharactersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function() { return CharactersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters.page */ "./src/app/characters/characters.page.ts");







var routes = [
    {
        path: '',
        component: _characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]
    }
];
var CharactersPageModule = /** @class */ (function () {
    function CharactersPageModule() {
    }
    CharactersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
        })
    ], CharactersPageModule);
    return CharactersPageModule;
}());



/***/ }),

/***/ "./src/app/characters/characters.page.html":
/*!*************************************************!*\
  !*** ./src/app/characters/characters.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Characters</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let c of feedback\" (click) = \"onGoToDetail(c)\">\n      {{c.name}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/characters/characters.page.scss":
/*!*************************************************!*\
  !*** ./src/app/characters/characters.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/characters/characters.page.ts":
/*!***********************************************!*\
  !*** ./src/app/characters/characters.page.ts ***!
  \***********************************************/
/*! exports provided: CharactersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPage", function() { return CharactersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _star_war_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../star-war-service.service */ "./src/app/star-war-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CharactersPage = /** @class */ (function () {
    function CharactersPage(httpClient, service, router) {
        this.httpClient = httpClient;
        this.service = service;
        this.router = router;
        this.url = 'https://swapi.co/api/people';
        this.keyResult = 'results';
        this.keyNext = 'next';
    }
    CharactersPage.prototype.ngOnInit = function () {
        this.getResult(this.url, this.feedback);
    };
    CharactersPage.prototype.getResult = function (url, characters) {
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
    CharactersPage.prototype.onGoToDetail = function (c) {
        this.service.currentCharacter = c;
        this.router.navigate(['/character-detail']);
    };
    CharactersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.page.html */ "./src/app/characters/characters.page.html"),
            styles: [__webpack_require__(/*! ./characters.page.scss */ "./src/app/characters/characters.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _star_war_service_service__WEBPACK_IMPORTED_MODULE_2__["StarWarServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CharactersPage);
    return CharactersPage;
}());



/***/ })

}]);
//# sourceMappingURL=characters-characters-module.js.map