(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-playlist-playlist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/favorite/favorite.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/favorite/favorite.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-6\" *ngFor=\"let item of youtubeList\">\n      <div class=\"card favorite-card\">\n        <img\n          class=\"card-img-top\"\n          [src]=\"item.snippet.thumbnails.high.url\"\n          alt=\"Card image cap\"\n        />\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ item.snippet.title | truncate: 30 }}</h5>\n          <p class=\"card-text\">\n            {{ item.snippet.description | truncate }}\n          </p>\n\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <a\n              class=\"btn btn-details m-1\"\n              [routerLink]=\"['/details', item.snippet.resourceId.videoId]\"\n            >\n              Details</a\n            >\n\n            <button\n              (click)=\"removeFavorites(item.snippet.resourceId.videoId)\"\n              class=\"remove-favorite\"\n            >\n              <span class=\"material-icons\">\n                delete\n              </span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"youtubeList.length === 0\">\n      <div class=\"text-center\">\n        <div class=\"my-4\">\n          <h4>\n            Your favorite is empty\n          </h4>\n        </div>\n        <a routerLink=\"/\" class=\"btn-remove\">Home page</a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-details/playlist-details.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-details/playlist-details.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe\n  width=\"100%\"\n  height=\"450\"\n  [src]=\"videoURL\"\n  frameborder=\"0\"\n  webkitallowfullscreen\n  mozallowfullscreen\n  allowfullscreen\n></iframe>\n<section class=\"video-details\">\n  <div\n    class=\"video-group d-flex justify-content-between align-items-center flex-wrap\"\n  >\n    <h4 class=\"video-title \">\n      {{ video?.snippet.title }}\n    </h4>\n    <button class=\"btn btn-remove\" (click)=\"addToFavorite(video)\">\n      <span *ngIf=\"favoriteStatus; else addFav\"> Remove from favorite</span>\n      <ng-template #addFav>\n        Add to favorite\n      </ng-template>\n    </button>\n  </div>\n  <div\n    class=\"video-group d-flex justify-content-between align-items-center flex-wrap\"\n  >\n    <h4 class=\"video-rate\">\n      <span>\n        Rate Now\n      </span>\n\n      <star-rating\n        [value]=\"ratingValue\"\n        totalstars=\"5\"\n        checkedcolor=\"red\"\n        uncheckedcolor=\"gray\"\n        size=\"22px\"\n        readonly=\"false\"\n        (rate)=\"onRate(video.id, $event)\"\n      ></star-rating>\n    </h4>\n    <h5 class=\"video-duration\">\n      Duration\n      <span>\n        {{ convertISOToSeconds(video?.contentDetails.duration) }}\n      </span>\n    </h5>\n    <div class=\"video-count\">\n      <span>\n        <i class=\"material-icons search-icon\">\n          remove_red_eye\n        </i>\n        {{ video?.statistics.viewCount }}\n      </span>\n      <span>\n        <i class=\"material-icons search-icon\">\n          thumb_up_alt\n        </i>\n        {{ video?.statistics.likeCount }}\n      </span>\n    </div>\n  </div>\n  <div class=\"video-group\">\n    <h5 class=\"video-publish\">\n      Published on {{ video?.snippet.publishedAt | date }}\n    </h5>\n    <p class=\"video-description\">\n      {{ video?.snippet.description }}\n    </p>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-list/playlist-list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-list/playlist-list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"search-header\">\n  <div class=\"container-fluid\">\n    <div class=\"d-flex justify-content-between align-items-center flex-wrap\">\n      <div class=\"input-group add-form\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"playListUrl\"\n          placeholder=\"Add Playlist  \"\n        />\n        <div class=\"input-group-prepend\">\n          <button\n            class=\"btn btn-remove\"\n            [disabled]=\"!playListUrl\"\n            (click)=\"addNewUrlPlaylist(playListUrl)\"\n          >\n            Add\n          </button>\n        </div>\n      </div>\n      <div class=\"search-field\">\n        <i class=\"material-icons search-icon\">\n          search\n        </i>\n        <input\n          type=\"text\"\n          (keyup)=\"handlerSearch($event)\"\n          placeholder=\"Search by video title\"\n        />\n      </div>\n    </div>\n  </div>\n</section>\n\n<table\n  mat-table\n  [dataSource]=\"listData\"\n  matSort\n  class=\"mat-elevation-z8 youtube-table\"\n>\n  <ng-container matColumnDef=\"image\">\n    <th mat-header-cell *matHeaderCellDef width=\"200\"></th>\n    <td mat-cell *matCellDef=\"let element\">\n      <img\n        [src]=\"element.image || ''\"\n        class=\"img-fluid youtube-image\"\n        alt=\"thumbnails\"\n      />\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{ element.title }}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"videoPublishedAt\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Publish Date</th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{ element.videoPublishedAt | date: \"MM-dd-yyyy\" }}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let element\">\n      <a class=\"btn btn-details m-1\" [routerLink]=\"['/details', element.id]\">\n        Details</a\n      >\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"noData\">\n    <td mat-footer-cell *matFooterCellDef colspan=\"4\" class=\"text-center\">\n      No records found.\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  <tr\n    mat-footer-row\n    *matFooterRowDef=\"['noData']\"\n    [ngClass]=\"{ 'd-none': listData.filteredData.length > 0 }\"\n  ></tr>\n</table>\n\n<div class=\"container-fluid\">\n  <div class=\"pagination justify-content-end text-right\">\n    <button (click)=\"prevPage()\">\n      <i class=\"material-icons \">\n        keyboard_arrow_left\n      </i>\n    </button>\n    <button (click)=\"nextPage()\">\n      <i class=\"material-icons \">\n        keyboard_arrow_right\n      </i>\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/Modules/playlist/components/favorite/favorite.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/Modules/playlist/components/favorite/favorite.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvcGxheWxpc3QvY29tcG9uZW50cy9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Modules/playlist/components/favorite/favorite.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Modules/playlist/components/favorite/favorite.component.ts ***!
  \****************************************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/favorites.service */ "./src/app/core/services/favorites.service.ts");
/* harmony import */ var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/loader.service */ "./src/app/core/services/loader.service.ts");
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast.service */ "./src/app/core/services/toast.service.ts");





let FavoriteComponent = class FavoriteComponent {
    constructor(favoriteService, loaderService, toastService) {
        this.favoriteService = favoriteService;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.youtubeList = [];
    }
    ngOnInit() {
        this.getYoutubePlaylist();
    }
    // get youtube playlist
    getYoutubePlaylist() {
        this.loaderService.show();
        this.subscription = this.favoriteService.getFavorites().subscribe(list => {
            this.loaderService.hide();
            this.youtubeList = list;
        }, error => {
            this.loaderService.hide();
            this.toastService.addToast("Error", "Error");
        });
    }
    // remove favorite
    removeFavorites(id) {
        this.favoriteService.removeFavorites(id);
        this.toastService.addToast("removed successfully", "Success");
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
FavoriteComponent.ctorParameters = () => [
    { type: src_app_core_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"] },
    { type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] },
    { type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-favorite",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/favorite/favorite.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite.component.scss */ "./src/app/Modules/playlist/components/favorite/favorite.component.scss")).default]
    })
], FavoriteComponent);



/***/ }),

/***/ "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/Modules/playlist/components/playlist-details/playlist-details.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvcGxheWxpc3QvY29tcG9uZW50cy9wbGF5bGlzdC1kZXRhaWxzL3BsYXlsaXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Modules/playlist/components/playlist-details/playlist-details.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PlaylistDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistDetailsComponent", function() { return PlaylistDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/youtube.service */ "./src/app/core/services/youtube.service.ts");
/* harmony import */ var src_app_core_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/favorites.service */ "./src/app/core/services/favorites.service.ts");
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toast.service */ "./src/app/core/services/toast.service.ts");







let PlaylistDetailsComponent = class PlaylistDetailsComponent {
    constructor(route, sanitizer, youtubeService, favoriteService, toastService) {
        this.route = route;
        this.sanitizer = sanitizer;
        this.youtubeService = youtubeService;
        this.favoriteService = favoriteService;
        this.toastService = toastService;
        this.favoriteStatus = false;
        this.ratingValue = 0;
        this.subscription = [];
    }
    ngOnInit() {
        const videoId = this.route.snapshot.paramMap.get("id");
        this.getYoutubeVideo(videoId);
        this.showVideoIframe(videoId);
        this.getRating(videoId);
        this.getVideoFavorite(videoId);
    }
    showVideoIframe(videoId) {
        this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + videoId);
    }
    // get video of youtube
    getYoutubeVideo(videoId) {
        this.subscription.push(this.youtubeService
            .getYoutubeVideo(videoId)
            .subscribe((video) => {
            this.video = video.items[0];
        }));
    }
    // convert ISO 8601 time format into normal time duration
    convertISOToSeconds(input) {
        if (input)
            return input
                .replace("PT", "")
                .replace("H", ":")
                .replace("M", ":")
                .replace("S", "");
    }
    // add or remove favorites
    addToFavorite(video) {
        this.favoriteStatus = !this.favoriteStatus;
        if (this.favoriteStatus) {
            this.favoriteService
                .addToFavorite(video)
                .then(() => this.toastService.addToast("added successfully", "Success"));
        }
        else {
            this.favoriteService.removeFavorites(video.id);
            this.toastService.addToast("removed successfully", "Success");
        }
    }
    // add rate
    onRate(videoId, $event) {
        this.favoriteService.addRate(videoId, $event.newValue);
    }
    // get rating
    getRating(videoId) {
        this.subscription.push(this.favoriteService
            .getVideoRate(videoId)
            .subscribe((rating) => {
            if (rating) {
                this.ratingValue = rating.ratingValue;
            }
        }));
    }
    // get get video favorite
    getVideoFavorite(videoId) {
        this.subscription.push(this.favoriteService
            .getVideoFavorite(videoId)
            .subscribe((favorite) => {
            if (favorite) {
                this.favoriteStatus = favorite.favorite;
            }
            else {
                this.favoriteStatus = false;
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.forEach(x => x.unsubscribe());
    }
};
PlaylistDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
    { type: src_app_core_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeService"] },
    { type: src_app_core_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"] },
    { type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
PlaylistDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-playlist-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-details/playlist-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist-details.component.scss */ "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.scss")).default]
    })
], PlaylistDetailsComponent);



/***/ }),

/***/ "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/Modules/playlist/components/playlist-list/playlist-list.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvcGxheWxpc3QvY29tcG9uZW50cy9wbGF5bGlzdC1saXN0L3BsYXlsaXN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Modules/playlist/components/playlist-list/playlist-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PlaylistListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistListComponent", function() { return PlaylistListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_core_services_youtube_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/youtube.service */ "./src/app/core/services/youtube.service.ts");
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toast.service */ "./src/app/core/services/toast.service.ts");





let PlaylistListComponent = class PlaylistListComponent {
    constructor(youTubeServices, toastService) {
        this.youTubeServices = youTubeServices;
        this.toastService = toastService;
        this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.playlistId = localStorage.getItem("playlistId") || "PLF75bDBd1tIdwQq6TNd-wNx0AcB8JPeDK";
        this.subscription = [];
        this.displayedColumns = ["image", "title", "videoPublishedAt", "action"];
    }
    ngOnInit() {
        this.checkInternetStatus();
    }
    // get youtube playlist
    getYoutubePlaylist(next = "", prev = "") {
        this.subscription.push(this.youTubeServices
            .getYoutubePlayList(this.playlistId, next, prev)
            .subscribe((list) => {
            let data = this.listMap(list.items);
            this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            this.youtubeList = list;
            localStorage.setItem("youtubeList", JSON.stringify(list));
            this.setDataSourceAttributes();
        }));
    }
    // get youtube playlist
    setDataSourceAttributes() {
        this.listData.paginator = this.paginator;
        this.listData.sort = this.sort;
    }
    // add new playlist
    addNewUrlPlaylist(url) {
        const validUrl = this.getYoutubePlaylistId(url);
        if (validUrl) {
            this.playlistId = validUrl;
            localStorage.setItem("playlistId", validUrl);
            this.getYoutubePlaylist();
            this.playListUrl = "";
        }
        else {
            this.toastService.addToast("Please select a valid playlist", "Error");
        }
    }
    //get playlist id from url
    getYoutubePlaylistId(url) {
        const id = /[&|\?]list=([a-zA-Z0-9_-]+)/gi.exec(url);
        return id && id.length > 0 ? id[1] : null;
    }
    // handler search
    handlerSearch(event) {
        const filterValue = event.target.value;
        this.listData.filter = filterValue.trim().toLowerCase();
    }
    // map data
    listMap(array) {
        const data = array.map(content => {
            return {
                id: content.snippet.resourceId.videoId,
                image: content.snippet.thumbnails.default.url,
                title: content.snippet.title,
                videoPublishedAt: content.contentDetails.videoPublishedAt
            };
        });
        return data;
    }
    // check internet status
    checkInternetStatus() {
        if (navigator.onLine) {
            this.getYoutubePlaylist();
        }
        else {
            if (localStorage.getItem("youtubeList")) {
                let youtube = JSON.parse(localStorage.getItem("youtubeList"));
                this.youtubeList = youtube;
                let data = this.listMap(youtube.items);
                this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
                this.setDataSourceAttributes();
            }
        }
    }
    // pagination
    nextPage() {
        const next = this.youtubeList.nextPageToken;
        if (next) {
            this.getYoutubePlaylist(next);
        }
    }
    prevPage() {
        const prev = this.youtubeList.prevPageToken;
        if (prev) {
            this.getYoutubePlaylist(prev);
        }
    }
    ngOnDestroy() {
        this.subscription.forEach(x => x.unsubscribe());
    }
};
PlaylistListComponent.ctorParameters = () => [
    { type: src_app_core_services_youtube_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"] },
    { type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true })
], PlaylistListComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], PlaylistListComponent.prototype, "paginator", void 0);
PlaylistListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-playlist-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-list/playlist-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist-list.component.scss */ "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.scss")).default]
    })
], PlaylistListComponent);



/***/ }),

/***/ "./src/app/Modules/playlist/playlist-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Modules/playlist/playlist-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PlaylistRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistRoutingModule", function() { return PlaylistRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_playlist_list_playlist_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/playlist-list/playlist-list.component */ "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.ts");
/* harmony import */ var _components_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/playlist-details/playlist-details.component */ "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.ts");
/* harmony import */ var _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/favorite/favorite.component */ "./src/app/Modules/playlist/components/favorite/favorite.component.ts");






const routes = [
    {
        path: "",
        component: _components_playlist_list_playlist_list_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistListComponent"]
    },
    {
        path: "details/:id",
        component: _components_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistDetailsComponent"]
    },
    {
        path: "favorites",
        component: _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_5__["FavoriteComponent"]
    },
];
let PlaylistRoutingModule = class PlaylistRoutingModule {
};
PlaylistRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PlaylistRoutingModule);



/***/ }),

/***/ "./src/app/Modules/playlist/playlist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Modules/playlist/playlist.module.ts ***!
  \*****************************************************/
/*! exports provided: PlaylistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistModule", function() { return PlaylistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _playlist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist-routing.module */ "./src/app/Modules/playlist/playlist-routing.module.ts");
/* harmony import */ var _components_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/playlist-details/playlist-details.component */ "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.ts");
/* harmony import */ var _components_playlist_list_playlist_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/playlist-list/playlist-list.component */ "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.ts");
/* harmony import */ var _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/favorite/favorite.component */ "./src/app/Modules/playlist/components/favorite/favorite.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let PlaylistModule = class PlaylistModule {
};
PlaylistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_playlist_list_playlist_list_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistListComponent"],
            _components_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistDetailsComponent"],
            _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_6__["FavoriteComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _playlist_routing_module__WEBPACK_IMPORTED_MODULE_3__["PlaylistRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
    })
], PlaylistModule);



/***/ })

}]);
//# sourceMappingURL=Modules-playlist-playlist-module-es2015.js.map