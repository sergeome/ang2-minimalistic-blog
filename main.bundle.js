webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_firebase_service__ = __webpack_require__("../../../../../src/app/service/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_transmitter_service__ = __webpack_require__("../../../../../src/app/service/transmitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_service_post_service__ = __webpack_require__("../../../../../src/app/blog/service/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(firebaseService, loginService, transmitterService, postService) {
        this.firebaseService = firebaseService;
        this.loginService = loginService;
        this.transmitterService = transmitterService;
        this.postService = postService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-component',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_firebase_service__["a" /* FirebaseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_transmitter_service__["a" /* TransmitterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_transmitter_service__["a" /* TransmitterService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__blog_service_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__blog_service_post_service__["a" /* PostService */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_header_header_component__ = __webpack_require__("../../../../../src/app/blog/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_footer_footer_component__ = __webpack_require__("../../../../../src/app/blog/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blog_header_search_search_component__ = __webpack_require__("../../../../../src/app/blog/header/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_header_menu_menu_component__ = __webpack_require__("../../../../../src/app/blog/header/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blog_posts_add_post_add_post_component__ = __webpack_require__("../../../../../src/app/blog/posts/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blog_posts_all_posts_all_posts_component__ = __webpack_require__("../../../../../src/app/blog/posts/all-posts/all-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blog_posts_single_post_single_post_component__ = __webpack_require__("../../../../../src/app/blog/posts/single-post/single-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blog_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/blog/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blog_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/blog/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blog_not_authorized_guard__ = __webpack_require__("../../../../../src/app/blog/not-authorized.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_transmitter_service__ = __webpack_require__("../../../../../src/app/service/transmitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_firebase_service__ = __webpack_require__("../../../../../src/app/service/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__blog_service_post_service__ = __webpack_require__("../../../../../src/app/blog/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angular2_modal__ = __webpack_require__("../../../../angular2-modal/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_modal_plugins_bootstrap__ = __webpack_require__("../../../../angular2-modal/plugins/bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__blog_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__blog_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__blog_header_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__blog_header_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__blog_posts_add_post_add_post_component__["a" /* AddPostComponent */],
                __WEBPACK_IMPORTED_MODULE_10__blog_posts_all_posts_all_posts_component__["a" /* AllPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__blog_posts_single_post_single_post_component__["a" /* SinglePostComponent */],
                __WEBPACK_IMPORTED_MODULE_15__blog_homepage_homepage_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__blog_not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_21_angular2_modal__["e" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__service_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_18__service_transmitter_service__["a" /* TransmitterService */],
                __WEBPACK_IMPORTED_MODULE_19__service_firebase_service__["a" /* FirebaseService */],
                __WEBPACK_IMPORTED_MODULE_20__blog_service_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_17__blog_not_authorized_guard__["a" /* NotAuthorizedGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/blog/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_blog_routing__ = __webpack_require__("../../../../../src/app/blog/blog.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blog_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/blog/not-found/not-found.component.ts");





var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__blog_homepage_homepage_component__["a" /* HomePageComponent */], children: __WEBPACK_IMPORTED_MODULE_3__blog_blog_routing__["a" /* BLOG_ROUTES */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__blog_not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLOG_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__posts_add_post_add_post_component__ = __webpack_require__("../../../../../src/app/blog/posts/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posts_single_post_single_post_component__ = __webpack_require__("../../../../../src/app/blog/posts/single-post/single-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts_all_posts_all_posts_component__ = __webpack_require__("../../../../../src/app/blog/posts/all-posts/all-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_authorized_guard__ = __webpack_require__("../../../../../src/app/blog/not-authorized.guard.ts");




var BLOG_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__posts_all_posts_all_posts_component__["a" /* AllPostsComponent */] },
    { path: 'addpost', component: __WEBPACK_IMPORTED_MODULE_0__posts_add_post_add_post_component__["a" /* AddPostComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__not_authorized_guard__["a" /* NotAuthorizedGuard */]] },
    { path: 'singlepost/:id', component: __WEBPACK_IMPORTED_MODULE_1__posts_single_post_single_post_component__["a" /* SinglePostComponent */] }
];
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/blog.routing.js.map

/***/ }),

/***/ "../../../../../src/app/blog/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-wrapper\" id=\"contact\">\n    <p class=\"copyright\">© 2016 <a href=\"http://sergeome.com\">Sergey Kryvets</a>. All rights reserved.</p>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/blog/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/blog/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/footer/footer.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"header-wrapper\">\n    <div class=\"logo\">\n      <div class=\"title\">\n        <a [routerLink]=\"['']\"><h1>minimal blog</h1></a>\n        <a href=\"http://sergeome.com\"><h2>back to website</h2></a>\n      </div>\n    </div>\n    <app-menu></app-menu>\n  </div>\n</header><!--header-->\n"

/***/ }),

/***/ "../../../../../src/app/blog/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/blog/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/header/header.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/header.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/header/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/header/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-wrapper\">\n  <a class=\"mobile-menu-switcher\"\n     (click)=\"isResponsive = !isResponsive;\">&#9776;</a>\n\n  <ul class=\"top-menu\" [class.responsive]=\"isResponsive\">\n\n    <li (click)=\"isResponsive = !isResponsive;\">\n      <a [routerLink]=\"['']\"\n         routerLinkActive=\"active\"\n         [routerLinkActiveOptions]=\"{exact: true}\">All Posts</a></li>\n\n    <li (click)=\"isResponsive = !isResponsive;\">\n      <a [routerLink]=\"['/addpost']\"\n         *ngIf=\"isAuthenticated\"\n         routerLinkActive=\"active\">Add Post</a></li>\n\n    <li (click)=\"isResponsive = !isResponsive;\"\n        *ngIf=\"isAuthenticated\" >\n      <a style=\"cursor: pointer\"\n         (click)=\"onLogout()\"\n         routerLinkActive=\"active\">Logout</a></li>\n\n    <li (click)=\"isResponsive = !isResponsive;\"\n        *ngIf=\"!isAuthenticated\" >\n      <a [routerLink]=\"['/login']\"\n         routerLinkActive=\"active\">Login</a></li>\n\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/blog/header/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(loginService, router, ngZone) {
        this.loginService = loginService;
        this.router = router;
        this.ngZone = ngZone;
        this.isResponsive = false;
    }
    MenuComponent.prototype.onLogout = function () {
        this.loginService.onSignOut();
    };
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loginService.isAuthenticated().subscribe(function (authState) {
            _this.ngZone.run(function () {
                _this.isAuthenticated = authState;
            });
        });
        this.isSignOutSubscription = this.loginService.isSignOutSuccessful.subscribe(function (signOutState) {
            _this.ngZone.run(function () {
                if (signOutState) {
                    _this.router.navigate(['/']);
                }
            });
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.isSignOutSubscription.unsubscribe();
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/blog/header/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/header/menu/menu.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* NgZone */]) === 'function' && _c) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/header/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/header/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form id=\"searchform\" class=\"search\" method=\"get\" action=\"#\">\n  <input type=\"text\" (focus)=\"enablePlaceholder()\" (blur)=\"disablePlaceholder()\" [placeholder]=\"placeholderValue\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/blog/header/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.placeholderValue = "";
    }
    SearchComponent.prototype.enablePlaceholder = function () {
        this.placeholderValue = "search on blog...";
    };
    SearchComponent.prototype.disablePlaceholder = function () {
        this.placeholderValue = "";
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/blog/header/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/header/search/search.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/search.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/blog/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("../../../../../src/app/blog/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/homepage/homepage.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageComponent);
    return HomePageComponent;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/not-authorized.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthorizedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotAuthorizedGuard = (function () {
    function NotAuthorizedGuard(loginService, router) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.isDirectAccess = false;
        this.loginService.isAuthenticated().subscribe(function (authState) {
            _this.isAuthenticated = authState;
            if (_this.isDirectAccess && _this.isAuthenticated) {
                _this.isDirectAccess = false;
                _this.router.navigate(['/addpost']);
            }
            else if (_this.isDirectAccess && !_this.isAuthenticated) {
                _this.isDirectAccess = false;
                _this.router.navigate(['/login'], { queryParams: { 'page': 'addpost' } });
            }
        });
    }
    NotAuthorizedGuard.prototype.canActivate = function (route, state) {
        this.isDirectAccess = true;
        if (typeof this.isAuthenticated !== 'undefined') {
            this.isDirectAccess = false;
            if (this.isAuthenticated) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(true);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of(false);
            }
        }
    };
    NotAuthorizedGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NotAuthorizedGuard);
    return NotAuthorizedGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/not-authorized.guard.js.map

/***/ }),

/***/ "../../../../../src/app/blog/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found\">\n  <h1 class=\"title-404\">404</h1>\n  <h1 class=\"description-404\">Oops, page you're looking for doesn't exist. Please choose another section you want from the menu:</h1>\n  <div class=\"menu-wrapper\">\n    <ul class=\"top-menu responsive\">\n      <app-menu></app-menu>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/blog/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/not-found/not-found.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/posts/add-post/add-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/posts/add-post/add-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"loader-wrapper\">\n  <div class=\"loader\"></div>\n</div>\n<section class=\"page-body write-post\">\n  <article itemscope itemtype=\"https://schema.org/BlogPosting\">\n    <form class=\"input-fields\" [formGroup]=\"postForm\">\n      <input type=\"text\"\n             class=\"post-title\"\n             id=\"title\"\n             placeholder=\"Title...\"\n             formControlName=\"title\"  >\n      <label for=\"title\"></label>\n      <textarea cols=\"30\"\n                rows=\"8\"\n                id=\"content\"\n                class=\"post-content\"\n                placeholder=\"Post content...\"\n                formControlName=\"content\"></textarea>\n      <label for=\"content\"></label>\n      <input type=\"text\"\n             class=\"post-tags\"\n             id=\"tags\"\n             placeholder=\"Tags...\"\n             formControlName=\"tags\"  >\n      <label for=\"tags\"></label>\n      <button class=\"submit-post\" [disabled]=\"!postForm.valid && !post.imageURL\" (click)=\"onSetPost()\">{{ctaSubmitTitle}}</button>\n      <button class=\"write-new-post\" (click)=\"onNewPost()\" *ngIf=\"postStatus !== 'new'\">Write a new Post</button>\n      <input type=\"file\" name=\"fileInput\" class=\"inputfile\" id=\"fileInput\" #fileInput (change)=\"onImageUpload()\" >\n      <label for=\"fileInput\" class=\"inputfile-label\">Choose an image</label>\n    </form>\n    <div *ngIf=\"post.imageURL\" class=\"post-image\" style=\"width: 300px; height: auto\"><img [src]=\"post.imageURL\" alt=\"\">\n    </div>\n  </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/blog/posts/add-post/add-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_transmitter_service__ = __webpack_require__("../../../../../src/app/service/transmitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_modal__ = __webpack_require__("../../../../angular2-modal/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap_modal__ = __webpack_require__("../../../../angular2-modal/plugins/bootstrap/modal.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPostComponent = (function () {
    function AddPostComponent(transmitterService, overlay, vcRef, modal) {
        this.transmitterService = transmitterService;
        this.modal = modal;
        this.ctaSubmitTitle = "Publish";
        this.postStatus = "new";
        this.isLoading = false;
        this.post = {
            author: "Sergeome",
            content: "",
            imageURL: "",
            title: "",
            tags: [],
            date: ""
        };
        overlay.defaultViewContainer = vcRef;
        this.postForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'title': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'content': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'tags': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('')
        });
    }
    AddPostComponent.prototype.onSetPost = function () {
        switch (this.postStatus) {
            case "new":
                this.onSubmitPost();
                break;
            case "posted":
                this.onEditPost();
                break;
            case "updated":
                this.onEditPost();
                break;
        }
    };
    AddPostComponent.prototype.onNewPost = function () {
        this.postStatus = "new";
        this.postForm.reset();
        this.post.imageURL = "";
        this.ctaSubmitTitle = "Publish";
    };
    AddPostComponent.prototype.onImageUpload = function () {
        var _this = this;
        var image = this.fileInput.nativeElement.files[0];
        var imageName = this.fileInput.nativeElement.files[0].name;
        this.transmitterService.onImageUpload(image, imageName);
        this.imageURLSubscription = this.transmitterService.imageURLEmitter.subscribe(function (imageURL) {
            _this.post.imageURL = imageURL;
        });
    };
    AddPostComponent.prototype.onSubmitPost = function () {
        this.onWaiting();
        this.post.title = this.postForm.value.title;
        this.post.content = this.postForm.value.content;
        if (this.postForm.value.tags) {
            this.post.tags = this.postForm.value.tags.split(" ");
        }
        this.post.date = this.getToday();
        this.transmitterService.sendPost(this.post);
    };
    AddPostComponent.prototype.onEditPost = function () {
        this.onWaiting();
        this.post.title = this.postForm.value.title;
        this.post.content = this.postForm.value.content;
        if (this.postForm.value.tags) {
            this.post.tags = this.postForm.value.tags.split(" ");
        }
        this.post.date = this.getToday();
        this.transmitterService.editPost(this.post);
    };
    AddPostComponent.prototype.getToday = function () {
        var today = new Date;
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        return mm + "." + dd + "." + yyyy;
    };
    AddPostComponent.prototype.isPostPostedSuccess = function () {
        this.modal.alert()
            .size('lg')
            .showClose(false)
            .title('')
            .body("\n            <p>Your post was successfully published!</p>\n           ")
            .open();
    };
    AddPostComponent.prototype.isPostPostedError = function () {
        this.modal.alert()
            .size('lg')
            .showClose(false)
            .title('')
            .body("\n            <p>There was an error during publishing your post</p>\n           ")
            .open();
    };
    AddPostComponent.prototype.isPostUpdatedSuccess = function () {
        this.modal.alert()
            .size('lg')
            .showClose(false)
            .title('')
            .body("\n            <p>Your post was successfully updated!</p>\n           ")
            .open();
    };
    AddPostComponent.prototype.isPostUpdatedError = function () {
        this.modal.alert()
            .size('lg')
            .showClose(false)
            .title('')
            .body("\n            <p>There was an error during updating!</p>\n           ")
            .open();
    };
    AddPostComponent.prototype.onWaiting = function () {
        this.isLoading = true;
    };
    AddPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isPostedSubscription = this.transmitterService.isPostPostedEmitter.subscribe(function (isPosted) {
            _this.isLoading = false;
            if (isPosted) {
                _this.isPostPostedSuccess();
                _this.postStatus = "posted";
                _this.ctaSubmitTitle = "Republish";
            }
            else {
                _this.postStatus = "error during posting";
                _this.isPostPostedError();
            }
        });
        this.isUpdatedSubscription = this.transmitterService.isPostUpdatedEmitter.subscribe(function (isUpdated) {
            _this.isLoading = false;
            if (isUpdated) {
                _this.postStatus = "updated";
                _this.isPostUpdatedSuccess();
            }
            else {
                _this.postStatus = "error during update";
                _this.isPostUpdatedError();
            }
        });
    };
    AddPostComponent.prototype.ngOnDestroy = function () {
        if (this.isPostedSubscription) {
            this.isPostedSubscription.unsubscribe();
        }
        if (this.isUpdatedSubscription) {
            this.isUpdatedSubscription.unsubscribe();
        }
        if (this.imageURLSubscription) {
            this.imageURLSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewChild */])('fileInput'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], AddPostComponent.prototype, "fileInput", void 0);
    AddPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-add-post',
            template: __webpack_require__("../../../../../src/app/blog/posts/add-post/add-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/posts/add-post/add-post.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_transmitter_service__["a" /* TransmitterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_transmitter_service__["a" /* TransmitterService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["h" /* Overlay */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_modal__["h" /* Overlay */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ViewContainerRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ViewContainerRef */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap_modal__["a" /* Modal */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_modal_plugins_bootstrap_modal__["a" /* Modal */]) === 'function' && _e) || Object])
    ], AddPostComponent);
    return AddPostComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/add-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/posts/all-posts/all-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/posts/all-posts/all-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'hide-smoothly': !loader}\" class=\"loader-wrapper hide-all\">\n  <div class=\"loader\"></div>\n</div>\n<section class=\"page-body\">\n<article *ngFor=\"let post of allPosts\">\n  <div class=\"post-date\">Posted at <time>{{post.date}}</time></div>\n  <h3>{{post.title}}</h3>\n  <div class=\"content\">\n    <div class=\"post-image\">\n      <img [src]=\"post.imageURL\" alt=\"\">\n    </div>\n    <p>{{post.contentPreview}}</p>\n    <a (click)=\"onNavigate(post.key)\"  class=\"read-more\">Read more</a>\n  </div>\n</article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/blog/posts/all-posts/all-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_transmitter_service__ = __webpack_require__("../../../../../src/app/service/transmitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_post_service__ = __webpack_require__("../../../../../src/app/blog/service/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllPostsComponent = (function () {
    function AllPostsComponent(transmitterService, postService, zone) {
        this.transmitterService = transmitterService;
        this.postService = postService;
        this.loader = true;
        this.allPosts = [];
        this.post = {
            author: "Sergeome",
            content: "",
            imageURL: "",
            title: "",
            tags: [],
            date: ""
        };
        this.zone = zone;
    }
    AllPostsComponent.prototype.doSomething = function (event) {
        if (window.scrollY === document.body.scrollHeight - window.innerHeight) {
            this.postService.onGetPost();
        }
    };
    AllPostsComponent.prototype.onNavigate = function (postKey) {
        this.postService.setTargetPost(postKey);
    };
    //Setting Post Preview by assigning new property 'contentPreview'
    AllPostsComponent.prototype.getPreviewExcerpt = function (arrayOfPosts) {
        var resultingArrayOfPosts = [];
        arrayOfPosts.forEach(function (post) {
            var currentPost;
            currentPost = post;
            currentPost.contentPreview = currentPost.content.substring(0, 400) + "...";
            resultingArrayOfPosts.push(currentPost);
        });
        return resultingArrayOfPosts;
    };
    AllPostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postEmitterSubscription = this.postService.postsEmitter.subscribe(function (data) {
            _this.zone.run(function () {
                _this.allPosts = _this.getPreviewExcerpt(data);
                _this.loader = false;
            });
        });
        this.postService.onGetPost();
    };
    //Setting "isDestroyed" status in order to save current state to the service.
    AllPostsComponent.prototype.ngOnDestroy = function () {
        this.postService.status = "isDestroyed";
        this.postEmitterSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* HostListener */])('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AllPostsComponent.prototype, "doSomething", null);
    AllPostsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-all-posts',
            template: __webpack_require__("../../../../../src/app/blog/posts/all-posts/all-posts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/posts/all-posts/all-posts.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_transmitter_service__["a" /* TransmitterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_transmitter_service__["a" /* TransmitterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_post_service__["a" /* PostService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* NgZone */]) === 'function' && _c) || Object])
    ], AllPostsComponent);
    return AllPostsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/all-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/posts/single-post/single-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/posts/single-post/single-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'hide-smoothly': !loader}\" class=\"loader-wrapper hide-all\">\n  <div class=\"loader\"></div>\n</div>\n<section class=\"page-body single-post\">\n  <article itemscope itemtype=\"https://schema.org/BlogPosting\">\n    <div class=\"post-date\">Posted at\n      <time pubdate itemprop=\"datePublished\">{{post.date}}</time>\n    </div>\n    <h3>{{post.title}}</h3>\n    <div class=\"content\">\n      <div class=\"post-image\">\n        <img [src]=\"post.imageURL\" alt=\"\">\n      </div>\n      <p>{{post.content}}</p>\n      <ul class=\"tags-list\">\n        <li *ngFor=\"let oneTag of post.tags\"><a href=\"#\">{{oneTag}}</a></li>\n      </ul>\n    </div>\n  </article>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/blog/posts/single-post/single-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service__ = __webpack_require__("../../../../../src/app/blog/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_transmitter_service__ = __webpack_require__("../../../../../src/app/service/transmitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SinglePostComponent = (function () {
    function SinglePostComponent(postService, transmitterService, activatedRoute) {
        this.postService = postService;
        this.transmitterService = transmitterService;
        this.activatedRoute = activatedRoute;
        this.post = {};
        this.postId = "";
        this.loader = true;
        this.postId = this.activatedRoute.snapshot.params['id'];
    }
    SinglePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.post = this.postService.targetPost;
        if (Object.keys(this.post).length === 0) {
            this.targetPostEmitterSubscription = this.transmitterService.targetPostEmitter.subscribe(function (post) {
                _this.post = post;
                _this.loader = false;
            });
            this.transmitterService.getPostByKey(this.postId);
        }
        else {
            this.loader = false;
        }
    };
    SinglePostComponent.prototype.ngOnDestroy = function () {
        if (this.targetPostEmitterSubscription) {
            this.targetPostEmitterSubscription.unsubscribe();
        }
    };
    SinglePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-single-post',
            template: __webpack_require__("../../../../../src/app/blog/posts/single-post/single-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog/posts/single-post/single-post.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_transmitter_service__["a" /* TransmitterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__service_transmitter_service__["a" /* TransmitterService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], SinglePostComponent);
    return SinglePostComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/single-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/service/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_transmitter_service__ = __webpack_require__("../../../../../src/app/service/transmitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(transmitterService, router) {
        var _this = this;
        this.transmitterService = transmitterService;
        this.router = router;
        this.postsEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.targetPost = {};
        this.allPosts = [];
        this.postAmountToLoad = 3;
        this.status = "firstLoad";
        this.transmitterService.getPostEmitter.subscribe(function (posts) {
            _this.allPosts = _this.allPosts.concat(posts);
            _this.postsEmitter.emit(_this.allPosts);
        });
    }
    PostService.prototype.onGetPost = function () {
        switch (this.status) {
            case "firstLoad":
                this.getPostsOnInit();
                break;
            case "loaded":
                this.getPostsOnLoad();
                break;
            case "isDestroyed":
                this.getSavedStateFromService();
                break;
        }
    };
    PostService.prototype.getPostsOnInit = function () {
        this.getPostOnAdd(); //Subscribe to the asynchronous posts updating
        this.status = "loaded";
        this.transmitterService.getPostsOnInit(this.postAmountToLoad);
    };
    PostService.prototype.getPostsOnLoad = function () {
        this.transmitterService.getPostsOnLoad(this.postAmountToLoad);
    };
    PostService.prototype.getSavedStateFromService = function () {
        this.status = "loaded";
        this.postsEmitter.emit(this.allPosts);
    };
    //Navigating to the chosen post by clicking on the "Read More >" link
    PostService.prototype.setTargetPost = function (key) {
        for (var i = 0; i < this.allPosts.length; i++) {
            if (this.allPosts[i].key === key) {
                this.targetPost = this.allPosts[i];
                this.router.navigate(['/singlepost', key]);
            }
        }
    };
    //Receiving post when it was added asynchronously from "transmitterService" and pushing into all-posts component.
    PostService.prototype.getPostOnAdd = function () {
        var _this = this;
        this.transmitterService.addedPostEmitter.subscribe(function (data) {
            _this.allPosts.unshift(data);
            _this.postsEmitter.emit(_this.allPosts);
        });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_transmitter_service__["a" /* TransmitterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_transmitter_service__["a" /* TransmitterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PostService);
    return PostService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/post.service.js.map

/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"loader-wrapper\">\n  <div class=\"loader\"></div>\n</div>\n<div class=\"login-page\">\n  <div class=\"form\">\n    <form class=\"login-form\" [formGroup]=\"loginForm\" *ngIf=\"!isAuthenticated\">\n      <input\n              type=\"text\"\n              placeholder=\"Email...\"\n              formControlName=\"email\"  >\n      <input\n              type=\"password\"\n              placeholder=\"Password...\"\n              formControlName=\"password\" >\n      <button (click)=\"onLogin()\" [disabled]=\"!loginForm.valid\">login</button>\n      <button type=\"button\" [routerLink]=\"['']\" style=\"margin-top: 15px\">Back to blog</button>\n      <p class=\"message\" *ngIf=\"!isLoginCorrect\">Invalid Login Or Password</p>\n    </form>\n    <div class=\"authorized\" *ngIf=\"isAuthenticated\">Login was successful!. You will be redirected in {{timerRemains.toString() | slice:0:1}} seconds...\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_login_service__ = __webpack_require__("../../../../../src/app/service/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(loginService, router, route, ngZone) {
        this.loginService = loginService;
        this.router = router;
        this.route = route;
        this.ngZone = ngZone;
        //Verifying is login correct for "Error Message" on invalid credentials
        this.isLoginCorrect = true;
        //Verifying is authentication state for View Updating
        this.isAuthenticated = true;
        this.redirectAfter = 3000;
        this.timerRemains = this.redirectAfter;
        this.isLoading = false;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        });
    }
    LoginComponent.prototype.onLogin = function () {
        this.onWaiting();
        this.loginService.onLogin(this.loginForm.value);
    };
    LoginComponent.prototype.onWaiting = function () {
        this.isLoading = true;
    };
    LoginComponent.prototype.onRedirect = function () {
        var _this = this;
        this.getRemainingTime();
        setTimeout(function () {
            if (_this.queryParams) {
                _this.router.navigate(['/' + _this.queryParams]);
            }
            else {
                _this.router.navigate(['/']);
            }
        }, this.timerRemains);
    };
    LoginComponent.prototype.getRemainingTime = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].timer(1000, 1000);
        timer.subscribe(function (t) {
            _this.timerRemains -= 1000;
        });
        this.timerRemains = this.redirectAfter;
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Adding body class when component is loaded
        window.document.body.className = "login";
        //Subscribing for the Authentication state changing
        this.subscriptionForAuthState = this.loginService.isAuthenticated().subscribe(function (authState) {
            _this.ngZone.run(function () {
                _this.isAuthenticated = authState;
                if (authState) {
                    _this.onRedirect();
                }
            });
        });
        //Subscribing for the Login Errors
        this.isLoginCorrectSubscription = this.loginService.isLoginCorrectEmitter.subscribe(function (isLoginCorrect) {
            _this.ngZone.run(function () {
                _this.isLoginCorrect = isLoginCorrect;
                _this.isLoading = false;
            });
        });
        this.subscriptionForQueryParams = this.route.queryParams.subscribe(function (queryParams) { return _this.queryParams = queryParams['page']; });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        //Removing body class when component is unloaded
        window.document.body.className = "";
        this.isLoginCorrectSubscription.unsubscribe();
        this.subscriptionForAuthState.unsubscribe();
        this.subscriptionForQueryParams.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* NgZone */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* NgZone */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var FirebaseService = (function () {
    function FirebaseService() {
        //Production configuration
        // var config = {
        //   apiKey: "AIzaSyBKY38SyQufFFBTItQd9IoCtocEi4ex6mE",
        //   authDomain: "sergeblog-prod.firebaseapp.com",
        //   databaseURL: "https://sergeblog-prod.firebaseio.com",
        //   storageBucket: "sergeblog-prod.appspot.com",
        //   messagingSenderId: "268964783113"
        // };
        // firebase.initializeApp( config );
        //Development configuration
        var config = {
            apiKey: "AIzaSyBwh7oeuple3XgUirUO0sshFHHNGIXM3GE",
            authDomain: "sergeblog-dev.firebaseapp.com",
            databaseURL: "https://sergeblog-dev.firebaseio.com",
            storageBucket: "sergeblog-dev.appspot.com",
            messagingSenderId: "109993123326"
        };
        __WEBPACK_IMPORTED_MODULE_0_firebase__["initializeApp"](config);
    }
    return FirebaseService;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService() {
        this.isLoginCorrectEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.isSignOutSuccessful = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    LoginService.prototype.onLogin = function (user) {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signInWithEmailAndPassword(user.email, user.password)
            .then(function () {
            self.isLoginCorrectEmitter.emit(true);
            return;
        }, function (error) {
            console.log(error);
            self.isLoginCorrectEmitter.emit(false);
        });
    };
    LoginService.prototype.onSignOut = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut().then(function () {
            self.isSignOutSuccessful.emit(true);
        }, function (error) {
            console.log(error);
            self.isSignOutSuccessful.emit(false);
        });
    };
    LoginService.prototype.isAuthenticated = function () {
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]();
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                subject.next(true);
            }
            else {
                subject.next(false);
            }
        });
        return subject.asObservable();
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], LoginService);
    return LoginService;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/login.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/transmitter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransmitterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransmitterService = (function () {
    function TransmitterService(http) {
        var _this = this;
        this.http = http;
        this.getPostEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.nextKey = "";
        this.amountOfPostsToLoad = 0;
        this.amountOfPostsIsLoaded = 0;
        this.imageURLEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.isPostPostedEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.isPostUpdatedEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.targetPostEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.addedPostEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.subscribedToAsync = false;
        //Promise to the first key in the firebase
        this.getFirstKey = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("posts").orderByKey().limitToFirst(1).on('child_added', function (childSnapshot, prevChildKey) {
                resolve(childSnapshot.key);
            });
        });
        //Promise to the last key in the firebase
        this.getLastKey = new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("posts").orderByKey().limitToLast(1).on('child_added', function (childSnapshot, prevChildKey) {
                resolve(childSnapshot.key);
            });
        });
        //Promise to get total amount of posts in the firebase
        this.getPostAmount = new Promise(function (resolve, reject) {
            _this.amountOfPostsTotal = 0;
            var query = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("posts").orderByKey();
            query.once("value")
                .then(function (snapshot) {
                resolve(Object.keys(snapshot.val()).length);
            });
        });
    }
    //Get target post when user was navigating via direct url
    TransmitterService.prototype.getPostByKey = function (key) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("posts").child(key).once('value').then(function (snapshot) {
            _this.targetPostEmitter.emit(snapshot.val());
        });
    };
    //Asynchronously receive post when it was added
    TransmitterService.prototype.getPostAsync = function () {
        var _this = this;
        var tempPost;
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("posts");
        ref.orderByKey().limitToLast(1).on('child_added', function (childSnapshot, prevChildKey) {
            tempPost = childSnapshot.val();
            tempPost.key = childSnapshot.key;
            _this.addedPostEmitter.emit(tempPost);
        });
    };
    //Getting initial amount of posts when application was loaded
    TransmitterService.prototype.getPostsOnInit = function (amountOfPostsToRetrieve) {
        var _this = this;
        //Waiting three promises in order to get first, last keys and amount of posts in database
        Promise.all([this.getFirstKey, this.getLastKey, this.getPostAmount])
            .then(function (keys) {
            _this.firstKey = keys[0];
            _this.lastKey = keys[1];
            _this.amountOfPostsTotal = keys[2];
            var isFirstEnter = true;
            var keepingFlag = false;
            var tempArray = [];
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("posts").orderByKey().limitToLast(amountOfPostsToRetrieve + 1).on('child_added', function (childSnapshot, prevChildKey) {
                if ((isFirstEnter && _this.firstKey == childSnapshot.key && _this.amountOfPostsTotal !== amountOfPostsToRetrieve + 1) || keepingFlag) {
                    keepingFlag = true;
                    var tempPost = childSnapshot.val();
                    tempPost.key = childSnapshot.key;
                    tempArray.push(tempPost);
                    _this.amountOfPostsIsLoaded++;
                    if (tempArray.length == _this.amountOfPostsTotal) {
                        _this.getPostEmitter.emit(tempArray.reverse());
                    }
                }
                else if (isFirstEnter) {
                    isFirstEnter = false;
                    _this.nextKey = childSnapshot.key;
                }
                else {
                    _this.amountOfPostsIsLoaded++;
                    var tempPost = childSnapshot.val();
                    tempPost.key = childSnapshot.key;
                    tempArray.push(tempPost);
                    if (tempArray.length == amountOfPostsToRetrieve) {
                        _this.getPostEmitter.emit(tempArray.reverse());
                    }
                }
            });
        });
    };
    //Getting rest amount of posts when application when infinity scroll was performed
    TransmitterService.prototype.getPostsOnLoad = function (amountOfPostsToRetrieve) {
        var _this = this;
        if (this.nextKey) {
            var isFirstEnter = true;
            var tempArray = [];
            var keepingFlag = false;
            this.amountOfPostsToLoad = this.amountOfPostsTotal - this.amountOfPostsIsLoaded;
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref("posts").orderByKey().endAt(this.nextKey).limitToLast(amountOfPostsToRetrieve + 1).on('child_added', function (childSnapshot, prevChildKey) {
                if ((isFirstEnter && _this.firstKey == childSnapshot.key && _this.amountOfPostsToLoad !== amountOfPostsToRetrieve + 1) || keepingFlag) {
                    keepingFlag = true;
                    var tempPost = childSnapshot.val();
                    tempPost.key = childSnapshot.key;
                    tempArray.push(tempPost);
                    if (tempArray.length == _this.amountOfPostsToLoad) {
                        _this.getPostEmitter.emit(tempArray.reverse());
                    }
                    _this.nextKey = "";
                }
                else if (isFirstEnter) {
                    isFirstEnter = false;
                    _this.nextKey = childSnapshot.key;
                }
                else {
                    _this.amountOfPostsIsLoaded++;
                    var tempPost = childSnapshot.val();
                    tempPost.key = childSnapshot.key;
                    tempArray.push(tempPost);
                    if (tempArray.length == amountOfPostsToRetrieve) {
                        _this.getPostEmitter.emit(tempArray.reverse());
                    }
                }
            });
        }
    };
    //Get image url when it was uploaded to the Firebase
    TransmitterService.prototype.onImageUpload = function (image, imageName) {
        var _this = this;
        var postImageDirectory = "Post Images/";
        __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref(postImageDirectory + imageName).put(image).then(function (snapshot) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref().child(postImageDirectory + imageName).getDownloadURL().then(function (URL) {
                _this.imageURLEmitter.emit(URL);
            });
        });
    };
    //Sending post to the firebase
    TransmitterService.prototype.sendPost = function (post) {
        this.postKey = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().child('posts').push(post).key;
        if (this.postKey) {
            this.isPostPostedEmitter.emit(true);
            if (!this.subscribedToAsync) {
                this.subscribedToAsync = true;
                this.getPostAsync();
            }
        }
        else {
            this.isPostPostedEmitter.emit(false);
        }
    };
    //Updating post in the firebase
    TransmitterService.prototype.editPost = function (post) {
        var _this = this;
        var updates = {};
        updates['/posts/' + this.postKey] = post;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().update(updates).then(function (_) {
            _this.isPostUpdatedEmitter.emit(true);
        }, function (error) {
            _this.isPostUpdatedEmitter.emit(false);
        });
    };
    TransmitterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], TransmitterService);
    return TransmitterService;
    var _a;
}());
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/transmitter.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__("../../../../../src/app/index.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/sergeome/Code/personal/archive/present_ang2_minimal_blog_2016/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map