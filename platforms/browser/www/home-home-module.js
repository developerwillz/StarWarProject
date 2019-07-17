(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Star War</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <div class='homeContainer'>\n    <ion-list>\n      <ion-item href=\"/characters\">\n        <ion-avatar slot=\"start\">\n          <img\n            src=\"https://i.pinimg.com/originals/b9/1e/a8/b91ea8179bcab035280f5fa7ead89bc5.jpg\"\n          />\n        </ion-avatar>\n        <ion-label>Characters</ion-label>\n      </ion-item>\n      <ion-item href=\"/films\">\n        <ion-avatar slot=\"start\">\n          <img\n            src=\"https://eln.iranapps.com/resource/w/93b3ac97ea7f5e65c3e489f83f5ead5626f0459e/star.war.videoplayer/2/cover_256.png?t=1550355069315F472C70\"\n          />\n        </ion-avatar>\n        <ion-label>Films</ion-label>\n      </ion-item>\n      <ion-item href=\"/species\">\n        <ion-avatar slot=\"start\">\n          <img\n            src=\"https://pm1.narvii.com/6477/0d6bf37fe2298d51b8b9eba37a96f1df213481b3_128.jpg\"\n          />\n        </ion-avatar>\n        <ion-label>Species</ion-label>\n      </ion-item>\n      <ion-item href=\"starships\">\n        <ion-avatar slot=\"start\">\n          <img\n            src=\"https://static-s.aa-cdn.net/img/gp/20600002183629/cXSvAu2HZaJy6dzTThlnAjPno0rROK6fNLDNd1KmBYBpuUgP021zY5u20u3UJe16Gnw=w300?v=1\"\n          />\n        </ion-avatar>\n        <ion-label>Starships</ion-label>\n      </ion-item>\n      <ion-item href=\"/vehicles\">\n        <ion-avatar slot=\"start\">\n          <img\n            src=\"http://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/256/AT-RT-icon.png\"\n          />\n        </ion-avatar>\n        <ion-label>Vehicles</ion-label>\n      </ion-item>\n      <ion-item href=\"planets\">\n        <ion-avatar slot=\"start\">\n          <img\n            src=\"https://static-s.aa-cdn.net/img/gp/20600005254962/fMR-wCpzfsRuoV-nTuxlgRcABOyhqnDO-uvkzQlJ7nKjgvD0JgPldKvsgzfJMMJXUA=w300?v=1\"\n          />\n        </ion-avatar>\n        <ion-label>Planets</ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  </ion-content>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map