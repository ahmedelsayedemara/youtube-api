function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-playlist-playlist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/favorite/favorite.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/favorite/favorite.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPlaylistComponentsFavoriteFavoriteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-6\" *ngFor=\"let item of youtubeList\">\n      <div class=\"card favorite-card\">\n        <img\n          class=\"card-img-top\"\n          [src]=\"item.snippet.thumbnails.high.url\"\n          alt=\"Card image cap\"\n        />\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ item.snippet.title | truncate: 30 }}</h5>\n          <p class=\"card-text\">\n            {{ item.snippet.description | truncate }}\n          </p>\n\n          <div class=\"d-flex justify-content-between align-items-center\">\n            <a\n              class=\"btn btn-details m-1\"\n              [routerLink]=\"['/details', item.snippet.resourceId.videoId]\"\n            >\n              Details</a\n            >\n\n            <button\n              (click)=\"removeFavorites(item.snippet.resourceId.videoId)\"\n              class=\"remove-favorite\"\n            >\n              <span class=\"material-icons\">\n                delete\n              </span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-12\" *ngIf=\"youtubeList.length === 0\">\n      <div class=\"text-center\">\n        <div class=\"my-4\">\n          <h4>\n            Your favorite is empty\n          </h4>\n        </div>\n        <a routerLink=\"/\" class=\"btn-remove\">Home page</a>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-details/playlist-details.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-details/playlist-details.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPlaylistComponentsPlaylistDetailsPlaylistDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<iframe\n  width=\"100%\"\n  height=\"450\"\n  [src]=\"videoURL\"\n  frameborder=\"0\"\n  webkitallowfullscreen\n  mozallowfullscreen\n  allowfullscreen\n></iframe>\n<section class=\"video-details\">\n  <div\n    class=\"video-group d-flex justify-content-between align-items-center flex-wrap\"\n  >\n    <h4 class=\"video-title \">\n      {{ video?.snippet.title }}\n    </h4>\n    <button class=\"btn btn-remove\" (click)=\"addToFavorite(video)\">\n      <span *ngIf=\"favoriteStatus; else addFav\"> Remove from favorite</span>\n      <ng-template #addFav>\n        Add to favorite\n      </ng-template>\n    </button>\n  </div>\n  <div\n    class=\"video-group d-flex justify-content-between align-items-center flex-wrap\"\n  >\n    <h4 class=\"video-rate\">\n      <span>\n        Rate Now\n      </span>\n\n      <star-rating\n        [value]=\"ratingValue\"\n        totalstars=\"5\"\n        checkedcolor=\"red\"\n        uncheckedcolor=\"gray\"\n        size=\"22px\"\n        readonly=\"false\"\n        (rate)=\"onRate(video.id, $event)\"\n      ></star-rating>\n    </h4>\n    <h5 class=\"video-duration\">\n      Duration\n      <span>\n        {{ convertISOToSeconds(video?.contentDetails.duration) }}\n      </span>\n    </h5>\n    <div class=\"video-count\">\n      <span>\n        <i class=\"material-icons search-icon\">\n          remove_red_eye\n        </i>\n        {{ video?.statistics.viewCount }}\n      </span>\n      <span>\n        <i class=\"material-icons search-icon\">\n          thumb_up_alt\n        </i>\n        {{ video?.statistics.likeCount }}\n      </span>\n    </div>\n  </div>\n  <div class=\"video-group\">\n    <h5 class=\"video-publish\">\n      Published on {{ video?.snippet.publishedAt | date }}\n    </h5>\n    <p class=\"video-description\">\n      {{ video?.snippet.description }}\n    </p>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-list/playlist-list.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-list/playlist-list.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPlaylistComponentsPlaylistListPlaylistListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"search-header\">\n  <div class=\"container-fluid\">\n    <div class=\"d-flex justify-content-between align-items-center flex-wrap\">\n      <div class=\"input-group add-form\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"playListUrl\"\n          placeholder=\"Add Playlist  \"\n        />\n        <div class=\"input-group-prepend\">\n          <button\n            class=\"btn btn-remove\"\n            [disabled]=\"!playListUrl\"\n            (click)=\"addNewUrlPlaylist(playListUrl)\"\n          >\n            Add\n          </button>\n        </div>\n      </div>\n      <div class=\"search-field\">\n        <i class=\"material-icons search-icon\">\n          search\n        </i>\n        <input\n          type=\"text\"\n          (keyup)=\"handlerSearch($event)\"\n          placeholder=\"Search by video title\"\n        />\n      </div>\n    </div>\n  </div>\n</section>\n\n<table\n  mat-table\n  [dataSource]=\"listData\"\n  matSort\n  class=\"mat-elevation-z8 youtube-table\"\n>\n  <ng-container matColumnDef=\"image\">\n    <th mat-header-cell *matHeaderCellDef width=\"200\"></th>\n    <td mat-cell *matCellDef=\"let element\">\n      <img\n        [src]=\"element.image || ''\"\n        class=\"img-fluid youtube-image\"\n        alt=\"thumbnails\"\n      />\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{ element.title }}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"videoPublishedAt\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Publish Date</th>\n    <td mat-cell *matCellDef=\"let element\">\n      {{ element.videoPublishedAt | date: \"MM-dd-yyyy\" }}\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef></th>\n    <td mat-cell *matCellDef=\"let element\">\n      <a class=\"btn btn-details m-1\" [routerLink]=\"['/details', element.id]\">\n        Details</a\n      >\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"noData\">\n    <td mat-footer-cell *matFooterCellDef colspan=\"4\" class=\"text-center\">\n      No records found.\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  <tr\n    mat-footer-row\n    *matFooterRowDef=\"['noData']\"\n    [ngClass]=\"{ 'd-none': listData.filteredData.length > 0 }\"\n  ></tr>\n</table>\n\n<div class=\"container-fluid\">\n  <div class=\"pagination justify-content-end text-right\">\n    <button (click)=\"prevPage()\">\n      <i class=\"material-icons \">\n        keyboard_arrow_left\n      </i>\n    </button>\n    <button (click)=\"nextPage()\">\n      <i class=\"material-icons \">\n        keyboard_arrow_right\n      </i>\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/Modules/playlist/components/favorite/favorite.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/Modules/playlist/components/favorite/favorite.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPlaylistComponentsFavoriteFavoriteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvcGxheWxpc3QvY29tcG9uZW50cy9mYXZvcml0ZS9mYXZvcml0ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Modules/playlist/components/favorite/favorite.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Modules/playlist/components/favorite/favorite.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FavoriteComponent */

  /***/
  function srcAppModulesPlaylistComponentsFavoriteFavoriteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function () {
      return FavoriteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/favorites.service */
    "./src/app/core/services/favorites.service.ts");
    /* harmony import */


    var src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/loader.service */
    "./src/app/core/services/loader.service.ts");
    /* harmony import */


    var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/toast.service */
    "./src/app/core/services/toast.service.ts");

    var FavoriteComponent = /*#__PURE__*/function () {
      function FavoriteComponent(favoriteService, loaderService, toastService) {
        _classCallCheck(this, FavoriteComponent);

        this.favoriteService = favoriteService;
        this.loaderService = loaderService;
        this.toastService = toastService;
        this.youtubeList = [];
      }

      _createClass(FavoriteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getYoutubePlaylist();
        } // get youtube playlist

      }, {
        key: "getYoutubePlaylist",
        value: function getYoutubePlaylist() {
          var _this = this;

          this.loaderService.show();
          this.subscription = this.favoriteService.getFavorites().subscribe(function (list) {
            _this.loaderService.hide();

            _this.youtubeList = list;
          }, function (error) {
            _this.loaderService.hide();

            _this.toastService.addToast("Error", "Error");
          });
        } // remove favorite

      }, {
        key: "removeFavorites",
        value: function removeFavorites(id) {
          this.favoriteService.removeFavorites(id);
          this.toastService.addToast("removed successfully", "Success");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return FavoriteComponent;
    }();

    FavoriteComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]
      }, {
        type: src_app_core_services_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }, {
        type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }];
    };

    FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-favorite",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/favorite/favorite.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorite.component.scss */
      "./src/app/Modules/playlist/components/favorite/favorite.component.scss"))["default"]]
    })], FavoriteComponent);
    /***/
  },

  /***/
  "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/Modules/playlist/components/playlist-details/playlist-details.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPlaylistComponentsPlaylistDetailsPlaylistDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvcGxheWxpc3QvY29tcG9uZW50cy9wbGF5bGlzdC1kZXRhaWxzL3BsYXlsaXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/Modules/playlist/components/playlist-details/playlist-details.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: PlaylistDetailsComponent */

  /***/
  function srcAppModulesPlaylistComponentsPlaylistDetailsPlaylistDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistDetailsComponent", function () {
      return PlaylistDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/youtube.service */
    "./src/app/core/services/youtube.service.ts");
    /* harmony import */


    var src_app_core_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/services/favorites.service */
    "./src/app/core/services/favorites.service.ts");
    /* harmony import */


    var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/services/toast.service */
    "./src/app/core/services/toast.service.ts");

    var PlaylistDetailsComponent = /*#__PURE__*/function () {
      function PlaylistDetailsComponent(route, sanitizer, youtubeService, favoriteService, toastService) {
        _classCallCheck(this, PlaylistDetailsComponent);

        this.route = route;
        this.sanitizer = sanitizer;
        this.youtubeService = youtubeService;
        this.favoriteService = favoriteService;
        this.toastService = toastService;
        this.favoriteStatus = false;
        this.ratingValue = 0;
        this.subscription = [];
      }

      _createClass(PlaylistDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var videoId = this.route.snapshot.paramMap.get("id");
          this.getYoutubeVideo(videoId);
          this.showVideoIframe(videoId);
          this.getRating(videoId);
          this.getVideoFavorite(videoId);
        }
      }, {
        key: "showVideoIframe",
        value: function showVideoIframe(videoId) {
          this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + videoId);
        } // get video of youtube

      }, {
        key: "getYoutubeVideo",
        value: function getYoutubeVideo(videoId) {
          var _this2 = this;

          this.subscription.push(this.youtubeService.getYoutubeVideo(videoId).subscribe(function (video) {
            _this2.video = video.items[0];
          }));
        } // convert ISO 8601 time format into normal time duration

      }, {
        key: "convertISOToSeconds",
        value: function convertISOToSeconds(input) {
          if (input) return input.replace("PT", "").replace("H", ":").replace("M", ":").replace("S", "");
        } // add or remove favorites

      }, {
        key: "addToFavorite",
        value: function addToFavorite(video) {
          var _this3 = this;

          this.favoriteStatus = !this.favoriteStatus;

          if (this.favoriteStatus) {
            this.favoriteService.addToFavorite(video).then(function () {
              return _this3.toastService.addToast("added successfully", "Success");
            });
          } else {
            this.favoriteService.removeFavorites(video.id);
            this.toastService.addToast("removed successfully", "Success");
          }
        } // add rate

      }, {
        key: "onRate",
        value: function onRate(videoId, $event) {
          this.favoriteService.addRate(videoId, $event.newValue);
        } // get rating

      }, {
        key: "getRating",
        value: function getRating(videoId) {
          var _this4 = this;

          this.subscription.push(this.favoriteService.getVideoRate(videoId).subscribe(function (rating) {
            if (rating) {
              _this4.ratingValue = rating.ratingValue;
            }
          }));
        } // get get video favorite

      }, {
        key: "getVideoFavorite",
        value: function getVideoFavorite(videoId) {
          var _this5 = this;

          this.subscription.push(this.favoriteService.getVideoFavorite(videoId).subscribe(function (favorite) {
            if (favorite) {
              _this5.favoriteStatus = favorite.favorite;
            } else {
              _this5.favoriteStatus = false;
            }
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }]);

      return PlaylistDetailsComponent;
    }();

    PlaylistDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
      }, {
        type: src_app_core_services_youtube_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeService"]
      }, {
        type: src_app_core_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"]
      }, {
        type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }];
    };

    PlaylistDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-playlist-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./playlist-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-details/playlist-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./playlist-details.component.scss */
      "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.scss"))["default"]]
    })], PlaylistDetailsComponent);
    /***/
  },

  /***/
  "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/Modules/playlist/components/playlist-list/playlist-list.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPlaylistComponentsPlaylistListPlaylistListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvcGxheWxpc3QvY29tcG9uZW50cy9wbGF5bGlzdC1saXN0L3BsYXlsaXN0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/Modules/playlist/components/playlist-list/playlist-list.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PlaylistListComponent */

  /***/
  function srcAppModulesPlaylistComponentsPlaylistListPlaylistListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistListComponent", function () {
      return PlaylistListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_core_services_youtube_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/youtube.service */
    "./src/app/core/services/youtube.service.ts");
    /* harmony import */


    var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/toast.service */
    "./src/app/core/services/toast.service.ts");

    var PlaylistListComponent = /*#__PURE__*/function () {
      function PlaylistListComponent(youTubeServices, toastService) {
        _classCallCheck(this, PlaylistListComponent);

        this.youTubeServices = youTubeServices;
        this.toastService = toastService;
        this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.playlistId = localStorage.getItem("playlistId") || "PLF75bDBd1tIdwQq6TNd-wNx0AcB8JPeDK";
        this.subscription = [];
        this.displayedColumns = ["image", "title", "videoPublishedAt", "action"];
      }

      _createClass(PlaylistListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkInternetStatus();
        } // get youtube playlist

      }, {
        key: "getYoutubePlaylist",
        value: function getYoutubePlaylist() {
          var _this6 = this;

          var next = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          this.subscription.push(this.youTubeServices.getYoutubePlayList(this.playlistId, next, prev).subscribe(function (list) {
            var data = _this6.listMap(list.items);

            _this6.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this6.youtubeList = list;
            localStorage.setItem("youtubeList", JSON.stringify(list));

            _this6.setDataSourceAttributes();
          }));
        } // get youtube playlist

      }, {
        key: "setDataSourceAttributes",
        value: function setDataSourceAttributes() {
          this.listData.paginator = this.paginator;
          this.listData.sort = this.sort;
        } // add new playlist

      }, {
        key: "addNewUrlPlaylist",
        value: function addNewUrlPlaylist(url) {
          var validUrl = this.getYoutubePlaylistId(url);

          if (validUrl) {
            this.playlistId = validUrl;
            localStorage.setItem("playlistId", validUrl);
            this.getYoutubePlaylist();
            this.playListUrl = "";
          } else {
            this.toastService.addToast("Please select a valid playlist", "Error");
          }
        } //get playlist id from url

      }, {
        key: "getYoutubePlaylistId",
        value: function getYoutubePlaylistId(url) {
          var id = /[&|\?]list=([a-zA-Z0-9_-]+)/gi.exec(url);
          return id && id.length > 0 ? id[1] : null;
        } // handler search

      }, {
        key: "handlerSearch",
        value: function handlerSearch(event) {
          var filterValue = event.target.value;
          this.listData.filter = filterValue.trim().toLowerCase();
        } // map data

      }, {
        key: "listMap",
        value: function listMap(array) {
          var data = array.map(function (content) {
            return {
              id: content.snippet.resourceId.videoId,
              image: content.snippet.thumbnails["default"].url,
              title: content.snippet.title,
              videoPublishedAt: content.contentDetails.videoPublishedAt
            };
          });
          return data;
        } // check internet status

      }, {
        key: "checkInternetStatus",
        value: function checkInternetStatus() {
          if (navigator.onLine) {
            this.getYoutubePlaylist();
          } else {
            if (localStorage.getItem("youtubeList")) {
              var youtube = JSON.parse(localStorage.getItem("youtubeList"));
              this.youtubeList = youtube;
              var data = this.listMap(youtube.items);
              this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
              this.setDataSourceAttributes();
            }
          }
        } // pagination

      }, {
        key: "nextPage",
        value: function nextPage() {
          var next = this.youtubeList.nextPageToken;

          if (next) {
            this.getYoutubePlaylist(next);
          }
        }
      }, {
        key: "prevPage",
        value: function prevPage() {
          var prev = this.youtubeList.prevPageToken;

          if (prev) {
            this.getYoutubePlaylist(prev);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.forEach(function (x) {
            return x.unsubscribe();
          });
        }
      }]);

      return PlaylistListComponent;
    }();

    PlaylistListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_youtube_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"]
      }, {
        type: src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    })], PlaylistListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], PlaylistListComponent.prototype, "paginator", void 0);
    PlaylistListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-playlist-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./playlist-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Modules/playlist/components/playlist-list/playlist-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./playlist-list.component.scss */
      "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.scss"))["default"]]
    })], PlaylistListComponent);
    /***/
  },

  /***/
  "./src/app/Modules/playlist/playlist-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Modules/playlist/playlist-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PlaylistRoutingModule */

  /***/
  function srcAppModulesPlaylistPlaylistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistRoutingModule", function () {
      return PlaylistRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_playlist_list_playlist_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/playlist-list/playlist-list.component */
    "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.ts");
    /* harmony import */


    var _components_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/playlist-details/playlist-details.component */
    "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.ts");
    /* harmony import */


    var _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/favorite/favorite.component */
    "./src/app/Modules/playlist/components/favorite/favorite.component.ts");

    var routes = [{
      path: "",
      component: _components_playlist_list_playlist_list_component__WEBPACK_IMPORTED_MODULE_3__["PlaylistListComponent"]
    }, {
      path: "details/:id",
      component: _components_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistDetailsComponent"]
    }, {
      path: "favorites",
      component: _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_5__["FavoriteComponent"]
    }];

    var PlaylistRoutingModule = function PlaylistRoutingModule() {
      _classCallCheck(this, PlaylistRoutingModule);
    };

    PlaylistRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlaylistRoutingModule);
    /***/
  },

  /***/
  "./src/app/Modules/playlist/playlist.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Modules/playlist/playlist.module.ts ***!
    \*****************************************************/

  /*! exports provided: PlaylistModule */

  /***/
  function srcAppModulesPlaylistPlaylistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistModule", function () {
      return PlaylistModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _playlist_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./playlist-routing.module */
    "./src/app/Modules/playlist/playlist-routing.module.ts");
    /* harmony import */


    var _components_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/playlist-details/playlist-details.component */
    "./src/app/Modules/playlist/components/playlist-details/playlist-details.component.ts");
    /* harmony import */


    var _components_playlist_list_playlist_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/playlist-list/playlist-list.component */
    "./src/app/Modules/playlist/components/playlist-list/playlist-list.component.ts");
    /* harmony import */


    var _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/favorite/favorite.component */
    "./src/app/Modules/playlist/components/favorite/favorite.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var PlaylistModule = function PlaylistModule() {
      _classCallCheck(this, PlaylistModule);
    };

    PlaylistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_playlist_list_playlist_list_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistListComponent"], _components_playlist_details_playlist_details_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistDetailsComponent"], _components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_6__["FavoriteComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _playlist_routing_module__WEBPACK_IMPORTED_MODULE_3__["PlaylistRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
    })], PlaylistModule);
    /***/
  }
}]);
//# sourceMappingURL=Modules-playlist-playlist-module-es5.js.map