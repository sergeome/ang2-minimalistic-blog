webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500,700,400italic);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Merriweather:300,400);", ""]);

// module
exports.push([module.i, "/*\nColor schema\n#0D415C - DARK IMPERIAL BLUE - Main Color\n#FFFFFF - White - background color\n#00171F - Rich Black - Font color\n#007EA7 - cerulian - blue\n#00A8E8 - white blie\n*/\n\n/*Color schema 2\n#FFFFFF - background\n#223139 - Footer\n#353531 - Text color\n#16425B - Links\n#0D0A0B - Black\n\n#1b729b - hover\n*/\n\n/*CSS Common declaration 2\n*/\n* {\n  margin: 0;\n  padding: 0;\n}\nimg {\n  border: 0;\n}\nul li {\n  list-style: none;\n}\n@font-face {\n  font-family: \"Gotham Bold\";\n  src: url(\"/ang2-minimalistic-blog/assets/fonts/GOTHAM-BOLD.TTF\");\n}\n@font-face {\n  font-family: \"Gotham Thin\";\n  src: url(\"/ang2-minimalistic-blog/assets/fonts/GOTHAM-THIN.TTF\");\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n}\na {\n  text-decoration: none;\n  color: #ffffff;\n}\nh3 {\n  font: 700 30px \"Roboto\", sans-serif;\n  text-align: center;\n  color: #353531;\n}\np {\n  font-family: \"Roboto\", sans-serif;\n  color: #ffffff;\n}\nh1 {\n  font-family: \"Gotham Bold\", sans-serif;\n  font-size: 24px;\n}\nh2 {\n  font-family: \"Gotham Thin\", sans-serif;\n  font-size: 13px;\n}\nh4 {\n  font-size: 24px;\n  font-weight: 300;\n}\nh5 {\n  font-weight: 500;\n  font-size: 36px;\n}\n/*HEADER section*/\nheader {\n  width: 100%;\n  overflow: hidden;\n  padding: 22px 0;\n}\n.header-wrapper {\n  overflow: hidden;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n.logo {\n  display: block;\n  float: left;\n  margin: 0 0 20px 0;\n}\n.logo img {\n  border-radius: 50%;\n}\n.title {\n  display: block;\n  float: left;\n}\n.title h1 {\n  color: #16425B;\n  transition: .3s;\n}\n.title h1:hover {\n  color: #1b729b;\n}\n.title h2 {\n  color: #223139;\n  margin: 8px 0 0 0;\n  transition: .3s;\n  position: relative;\n}\n.title h2:hover {\n  padding: 0 0 0 20px;\n}\n.title h2:hover:before {\n  content: \" \";\n  position: absolute;\n  background: url(\"/ang2-minimalistic-blog/assets/images/return.png\") no-repeat top center;\n  width: 16px;\n  height: 16px;\n  top: -3px;\n  left: 0;\n}\n/*Search*/\nheader .search {\n  float: right;\n  margin: 14px 0 0 0;\n}\nheader input[type=\"text\"] {\n  background: url(\"/ang2-minimalistic-blog/assets/images/search.png\") no-repeat right 3px;\n  color: #0d415c;\n  border: none;\n  outline: none;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 17px;\n  cursor: pointer;\n  transition: .3s;\n  width: 16px;\n}\nheader input[type=\"text\"]:focus {\n  background-position: left 3px;\n  padding-left: 30px;\n  width: 140px;\n}\n/*Menu*/\n.mobile-menu-switcher {\n  display: none;\n  line-height: 50px;\n}\n.menu-wrapper {\n  clear: both;\n  border-top: 1px solid #c9d4da;\n  border-bottom: 1px solid #c9d4da;\n}\n.top-menu {\n  display: table;\n  clear: both;\n  overflow: hidden;\n  margin: 0 auto;\n  text-transform: uppercase;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 17px;\n}\n.top-menu li {\n  display: inline-block;\n  float: left;\n  position: relative;\n}\n.top-menu li:after {\n  content: \"/\";\n  position: absolute;\n  right: 0;\n  top: 7px;\n  color: #16425B;\n}\n.top-menu li:last-child:after {\n  display: none;\n}\n.top-menu li:last-child {\n  background: none;\n}\n.top-menu li a {\n  display: block;\n  position: relative;\n  padding: 8px 20px;\n  color: #16425B;\n  transition: .2s;\n}\n.top-menu li a:after {\n  content: \" \";\n  position: absolute;\n  margin: 0 20px;\n  bottom: 8px;\n  left: 0;\n  width: calc(100% - 40px);\n  height: 1px;\n  transition: 1s;\n}\n.top-menu li a:hover:after, .top-menu li a.active:after {\n  background: #16425B;\n}\n/*.top-menu li.active {*/\n/*float: left;*/\n/*border-radius: 5px;*/\n/*}*/\n/*.top-menu li.active a {*/\n/*color: #16425B;*/\n/*}*/\n/*.top-menu li:hover {*/\n/*border-radius: 5px;*/\n/*}*/\n.top-menu li a:hover {\n  color: #1b729b;\n}\n/*ALL POSTS section*/\narticle {\n  max-width: 740px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .04);\n  border: 1px solid #c9d4da;\n  margin: 20px auto;\n  padding: 20px;\n  overflow: hidden;\n}\narticle h3 {\n  clear: both;\n  margin: 20px 0 10px;\n}\narticle p {\n  margin: 29px 0 0 0;\n  font: 400 16px/23px 'Merriweather', serif;\n  color: #616161;\n}\narticle p a {\n  color: #16425B;\n  font-style: italic;\n  text-decoration: underline;\n}\narticle p a:hover {\n  color: #1b729b;\n}\n.post-date {\n  float: left;\n  margin: 0 10px 0 0;\n  color: #16425B;\n  font-style: italic;\n}\n.post-image {\n  width: 450px;\n  height: auto;\n  margin: 30px auto;\n}\narticle img {\n  width: 100%;\n}\nul.tags-list li {\n  display: inline-block;\n}\nul.tags-list li a {\n  display: block;\n  background: #16425B;\n  padding: 3px 10px 3px 25px;\n  border-radius: 5%;\n  color: #fff;\n  font-size: 13px;\n  margin: 10px 5px 0 0;\n  transition: .3s;\n  position: relative;\n  line-height: 17px;\n}\nul.tags-list li a:hover {\n  background: #223139;\n}\nul.tags-list li a:before {\n  content: \" \";\n  position: absolute;\n  background: url(\"/ang2-minimalistic-blog/assets/images/tag.png\") no-repeat top center;\n  width: 16px;\n  height: 16px;\n  left: 5px;\n  top: 4px;\n}\n.content p {\n  color: #353531;\n  margin: 20px 0;\n}\n.read-more {\n  float: right;\n  color: #16425B;\n  position: relative;\n  transition: .3s;\n  margin: 7px 0 0 10px;\n  text-transform: uppercase;\n}\n.read-more:hover {\n  padding: 0 20px 0 0;\n  cursor: pointer;\n}\n.read-more:hover:after {\n  content: \" \";\n  position: absolute;\n  background: url(\"/ang2-minimalistic-blog/assets/images/read-more-hover.png\") no-repeat top center;\n  width: 16px;\n  height: 16px;\n  right: 0;\n  bottom: 2px;\n  transition: .3s;\n}\n/*Single post*/\n.single-post .tags-list {\n  margin: 40px 0 0 0;\n}\n.single-post article p {\n  font: 400 17px/30px 'Merriweather', serif;\n}\n/*Login page*/\nbody.login {\n  background: #16425B;\n}\nbody.login .login-page {\n  width: 360px;\n  padding: 8% 0 0;\n  margin: auto;\n}\nbody.login .form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto 100px;\n  padding: 45px;\n  text-align: center;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\nbody.login .form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n  border-radius: 5px;\n}\nbody.login .form input:focus {\n  outline: none;\n  border-color: #0d5877;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(13, 88, 119, 0.6);\n}\nbody.login .form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: #16425B;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\nbody.login .form button:hover, .form button:active, .form button:focus {\n  background: #1b729b;\n}\nbody.login .form button[disabled] {\n  background: #f2f2f2;\n  cursor: not-allowed;\n}\nbody.login .form .message {\n  margin: 15px 0 0;\n  color: red;\n  font-size: 12px;\n}\nbody.login .login .form .register-form {\n  display: none;\n}\nbody.login .container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\nbody.login .container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\nbody.login .container .info {\n  margin: 50px auto;\n  text-align: center;\n}\nbody.login .container .info h1 {\n  margin: 0 0 15px;\n  padding: 0;\n  font-size: 36px;\n  font-weight: 300;\n  color: #1a1a1a;\n}\nbody.login .container .info span {\n  color: #4d4d4d;\n  font-size: 12px;\n}\nbody.login .container .info span a {\n  color: #000000;\n  text-decoration: none;\n}\nbody.login .container .info span .fa {\n  color: #EF3B3A;\n}\n/*Footer section*/\nfooter {\n  width: 100%;\n  background: #223139;;\n}\n.footer-wrapper {\n  padding: 25px 0;\n  max-width: 1140px;\n  background: #223139;\n  text-align: center;\n  margin: 0 auto;\n}\n/*copyright*/\n.copyright {\n  font-size: 12px;\n}\n.copyright a {\n  position: relative;\n}\n.copyright a:after {\n  content: \" \";\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: #5b7481;\n  transition: 1s;\n}\n.copyright a:hover:after {\n  background: #fff;\n}\n.back {\n  position: fixed;\n  background: url(\"/ang2-minimalistic-blog/assets/images/arrowup.png\");\n  width: 64px;\n  height: 64px;\n  right: 20px;\n  bottom: 20px;\n  opacity: 0.7;\n}\n.back:hover {\n  opacity: 1;\n}\n/*404 headers*/\n.not-found {\n  width: 70%;\n  margin: 10% 0 0 15%;\n}\n.title-404 {\n  color: #000;\n  font-size: 400%;\n  text-align: center;\n  margin: 0 0 40px 0;\n}\n.description-404 {\n  color: #000;\n  text-align: center;\n  line-height: 45px;\n  margin: 0 0 30px 0;\n}\n.not-found .top-menu li a {\n  color: #000;\n}\n/*Write Post*/\n/*Inputs*/\n.write-post input[type=text].post-title {\n  font-size: 25px;\n  padding: 0 0 10px 0;\n}\n.write-post input[type=text],\n.write-post textarea {\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  outline: none;\n  width: 100%;\n  margin: 0 0 20px 0;\n  box-shadow: none;\n  box-sizing: content-box;\n}\n.write-post input[type=text]:focus:not([readonly]),\n.write-post textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #1b729b;\n  box-shadow: 0 1px 0 0 #1b729b;\n}\n.write-post textarea {\n  font: 400 15px/30px 'Merriweather', serif;\n}\n.write-post input[type=text].post-tags {\n  font-size: 15px;\n  padding: 0 0 10px 0;\n}\n.inputfile {\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.write-post .inputfile-label {\n  display: inline-block;\n  box-sizing: border-box;\n}\n.write-post button, .write-post .inputfile-label, .modal-footer button {\n  font: normal 14px Roboto, sans-serif;\n  color: #fff;\n  background-color: #16425B;\n  text-align: center;\n  cursor: pointer;\n  transition: 0.3s;\n  border: none;\n  border-radius: 2px;\n  outline: 0;\n  padding: 10px 25px;\n  text-transform: uppercase;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.write-post button:hover {\n  background-color: #1b729b;\n}\n.write-post button[disabled] {\n  background: #f2f2f2;\n  cursor: not-allowed;\n}\n.attach-image {\n  float: left;\n}\n.write-new-post {\n  float: right;\n  margin-right: 20px;\n}\n.submit-post {\n  float: right;\n}\n/*Spinner*/\n.loader-wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background: rgba(52, 69, 87, 1);\n  opacity: 0.8;\n  /*For transition*/\n  visibility: visible;\n}\n.loader {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n  -webkit-animation: spin 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n.loader:before {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #e74c3c;\n  -webkit-animation: spin 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n.loader:after {\n  content: \"\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #f9c922;\n  -webkit-animation: spin 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: spin 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */ /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg); /* Chrome, Opera 15+, Safari 3.1+ */ /* IE 9 */\n    transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */\n  }\n}\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */ /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg); /* Chrome, Opera 15+, Safari 3.1+ */ /* IE 9 */\n    transform: rotate(360deg); /* Firefox 16+, IE 10+, Opera */\n  }\n}\n/*Class hide. Used for body and spinner hide*/\n.hide {\n  display: none;\n}\n.hide-all {\n  opacity: 1;\n}\n.hide-smoothly {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 1s linear, opacity 1s linear;\n}\n\n\n/*Modal Window*/\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  transition:         -webkit-transform .3s ease-out;\n  transition:         transform .3s ease-out;\n  transition:         transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  padding: 15px;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.modal-body p{\n  font: 400 20px/30px 'Merriweather', serif;\n  color: #353531;\n  margin: 20px 0;\n  text-align: center;\n}\n\n\n\n/*Adding left indent for header and skills*/\n@media screen and (max-width: 1170px) {\n  .header-wrapper {\n    margin: 0 2%;\n  }\n}\n@media screen and (max-width: 815px) {\n  /*Added article margin for small resolution*/\n  article {\n    margin: 20px 2%;\n  }\n  /*Responsive login page*/\n  body.login .login-page {\n    width: 100%;\n    padding: 25% 20px 0;\n    margin: auto;\n    box-sizing: border-box;\n  }\n  body.login .form {\n    position: relative;\n    z-index: 1;\n    max-width: 100%;\n    margin: 0 auto 50px;\n    padding: 45px;\n  }\n}\n/*Menu restyle and reduce social icons margin*/\n@media screen and (max-width: 780px) {\n\n  .top-menu li:not(:last-child) {\n    background: none;\n  }\n  /*Hide elements on the main menu*/\n  ul.top-menu {\n    display: none;\n  }\n  /*********************************/\n  /*Styles for the mobile menu icon*/\n  .mobile-menu-switcher {\n    display: block;\n    text-align: center;\n    font-size: 30px;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    color: #0d415c;\n    cursor: pointer;\n  }\n  /*Create mobile menu name \"responsive\" and overwrite styles of top-menu*/\n  ul.top-menu.responsive {\n    clear: both;\n    display: block;\n    float: none;\n    overflow: hidden;\n  }\n  ul.top-menu.responsive li {\n    clear: both;\n    display: block;\n    float: none;\n    overflow: hidden;\n    text-align: center;\n    border-top: 1px solid rgba(118, 161, 184, .2);\n  }\n  ul.top-menu.responsive li:after {\n    display: none;\n  }\n  ul.top-menu.responsive li:first-child {\n    border-top: none;\n  }\n  ul.top-menu.responsive li.active {\n    background: none;\n  }\n  ul.top-menu.responsive li.active a {\n    color: #ffffff;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n  ul.top-menu.responsive li a {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n  ul.top-menu.responsive li a:after {\n    display: none;\n  }\n  ul.top-menu.responsive li:hover {\n    background: none;\n  }\n  ul.top-menu.responsive li:first-child {\n    background: none;\n  }\n  /*Mobile add post buttons*/\n  .attach-image, .write-new-post, .submit-post, .write-post .inputfile-label {\n    float: none;\n    display: block;\n    margin: 0 auto;\n  }\n  .write-post .inputfile-label {\n    max-width: 180px;\n  }\n  .write-new-post, .submit-post {\n    margin-bottom: 20px;\n  }\n\n}\n@media screen and (max-width: 772px) {\n  article {\n    margin: 20px 2%;\n  }\n}\n/*Redefine styles for the mobile version*/\n@media screen and (max-width: 715px) {\n\n  /*Fonts overwriting*/\n  h3 {\n    font-size: 25px;\n    margin: 20px 0 20px;\n  }\n  .post-date {\n    float: none;\n    text-align: center;\n  }\n  /*Modifying styles for CONTACT section*/\n  footer {\n    padding: 6% 0;\n  }\n  .footer-wrapper {\n    padding: 0 10%;\n    margin: 0 auto;\n  }\n  .footer-wrapper h5 {\n    margin: 0 0 15px 0;\n  }\n\n}\n/*Post image fixing for the small resolution*/\n@media screen and (max-width: 510px) {\n  .post-image {\n    width: 100%;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[1]);
//# sourceMappingURL=styles.bundle.js.map