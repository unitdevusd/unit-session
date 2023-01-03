(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
      var map = {
        "./af": "./node_modules/moment/locale/af.js",
        "./af.js": "./node_modules/moment/locale/af.js",
        "./ar": "./node_modules/moment/locale/ar.js",
        "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
        "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
        "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
        "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
        "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
        "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
        "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
        "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
        "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
        "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
        "./ar.js": "./node_modules/moment/locale/ar.js",
        "./az": "./node_modules/moment/locale/az.js",
        "./az.js": "./node_modules/moment/locale/az.js",
        "./be": "./node_modules/moment/locale/be.js",
        "./be.js": "./node_modules/moment/locale/be.js",
        "./bg": "./node_modules/moment/locale/bg.js",
        "./bg.js": "./node_modules/moment/locale/bg.js",
        "./bm": "./node_modules/moment/locale/bm.js",
        "./bm.js": "./node_modules/moment/locale/bm.js",
        "./bn": "./node_modules/moment/locale/bn.js",
        "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
        "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
        "./bn.js": "./node_modules/moment/locale/bn.js",
        "./bo": "./node_modules/moment/locale/bo.js",
        "./bo.js": "./node_modules/moment/locale/bo.js",
        "./br": "./node_modules/moment/locale/br.js",
        "./br.js": "./node_modules/moment/locale/br.js",
        "./bs": "./node_modules/moment/locale/bs.js",
        "./bs.js": "./node_modules/moment/locale/bs.js",
        "./ca": "./node_modules/moment/locale/ca.js",
        "./ca.js": "./node_modules/moment/locale/ca.js",
        "./cs": "./node_modules/moment/locale/cs.js",
        "./cs.js": "./node_modules/moment/locale/cs.js",
        "./cv": "./node_modules/moment/locale/cv.js",
        "./cv.js": "./node_modules/moment/locale/cv.js",
        "./cy": "./node_modules/moment/locale/cy.js",
        "./cy.js": "./node_modules/moment/locale/cy.js",
        "./da": "./node_modules/moment/locale/da.js",
        "./da.js": "./node_modules/moment/locale/da.js",
        "./de": "./node_modules/moment/locale/de.js",
        "./de-at": "./node_modules/moment/locale/de-at.js",
        "./de-at.js": "./node_modules/moment/locale/de-at.js",
        "./de-ch": "./node_modules/moment/locale/de-ch.js",
        "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
        "./de.js": "./node_modules/moment/locale/de.js",
        "./dv": "./node_modules/moment/locale/dv.js",
        "./dv.js": "./node_modules/moment/locale/dv.js",
        "./el": "./node_modules/moment/locale/el.js",
        "./el.js": "./node_modules/moment/locale/el.js",
        "./en-au": "./node_modules/moment/locale/en-au.js",
        "./en-au.js": "./node_modules/moment/locale/en-au.js",
        "./en-ca": "./node_modules/moment/locale/en-ca.js",
        "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
        "./en-gb": "./node_modules/moment/locale/en-gb.js",
        "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
        "./en-ie": "./node_modules/moment/locale/en-ie.js",
        "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
        "./en-il": "./node_modules/moment/locale/en-il.js",
        "./en-il.js": "./node_modules/moment/locale/en-il.js",
        "./en-in": "./node_modules/moment/locale/en-in.js",
        "./en-in.js": "./node_modules/moment/locale/en-in.js",
        "./en-nz": "./node_modules/moment/locale/en-nz.js",
        "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
        "./en-sg": "./node_modules/moment/locale/en-sg.js",
        "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
        "./eo": "./node_modules/moment/locale/eo.js",
        "./eo.js": "./node_modules/moment/locale/eo.js",
        "./es": "./node_modules/moment/locale/es.js",
        "./es-do": "./node_modules/moment/locale/es-do.js",
        "./es-do.js": "./node_modules/moment/locale/es-do.js",
        "./es-mx": "./node_modules/moment/locale/es-mx.js",
        "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
        "./es-us": "./node_modules/moment/locale/es-us.js",
        "./es-us.js": "./node_modules/moment/locale/es-us.js",
        "./es.js": "./node_modules/moment/locale/es.js",
        "./et": "./node_modules/moment/locale/et.js",
        "./et.js": "./node_modules/moment/locale/et.js",
        "./eu": "./node_modules/moment/locale/eu.js",
        "./eu.js": "./node_modules/moment/locale/eu.js",
        "./fa": "./node_modules/moment/locale/fa.js",
        "./fa.js": "./node_modules/moment/locale/fa.js",
        "./fi": "./node_modules/moment/locale/fi.js",
        "./fi.js": "./node_modules/moment/locale/fi.js",
        "./fil": "./node_modules/moment/locale/fil.js",
        "./fil.js": "./node_modules/moment/locale/fil.js",
        "./fo": "./node_modules/moment/locale/fo.js",
        "./fo.js": "./node_modules/moment/locale/fo.js",
        "./fr": "./node_modules/moment/locale/fr.js",
        "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
        "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
        "./fr.js": "./node_modules/moment/locale/fr.js",
        "./fy": "./node_modules/moment/locale/fy.js",
        "./fy.js": "./node_modules/moment/locale/fy.js",
        "./ga": "./node_modules/moment/locale/ga.js",
        "./ga.js": "./node_modules/moment/locale/ga.js",
        "./gd": "./node_modules/moment/locale/gd.js",
        "./gd.js": "./node_modules/moment/locale/gd.js",
        "./gl": "./node_modules/moment/locale/gl.js",
        "./gl.js": "./node_modules/moment/locale/gl.js",
        "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
        "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
        "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
        "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
        "./gu": "./node_modules/moment/locale/gu.js",
        "./gu.js": "./node_modules/moment/locale/gu.js",
        "./he": "./node_modules/moment/locale/he.js",
        "./he.js": "./node_modules/moment/locale/he.js",
        "./hi": "./node_modules/moment/locale/hi.js",
        "./hi.js": "./node_modules/moment/locale/hi.js",
        "./hr": "./node_modules/moment/locale/hr.js",
        "./hr.js": "./node_modules/moment/locale/hr.js",
        "./hu": "./node_modules/moment/locale/hu.js",
        "./hu.js": "./node_modules/moment/locale/hu.js",
        "./hy-am": "./node_modules/moment/locale/hy-am.js",
        "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
        "./id": "./node_modules/moment/locale/id.js",
        "./id.js": "./node_modules/moment/locale/id.js",
        "./is": "./node_modules/moment/locale/is.js",
        "./is.js": "./node_modules/moment/locale/is.js",
        "./it": "./node_modules/moment/locale/it.js",
        "./it-ch": "./node_modules/moment/locale/it-ch.js",
        "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
        "./it.js": "./node_modules/moment/locale/it.js",
        "./ja": "./node_modules/moment/locale/ja.js",
        "./ja.js": "./node_modules/moment/locale/ja.js",
        "./jv": "./node_modules/moment/locale/jv.js",
        "./jv.js": "./node_modules/moment/locale/jv.js",
        "./ka": "./node_modules/moment/locale/ka.js",
        "./ka.js": "./node_modules/moment/locale/ka.js",
        "./kk": "./node_modules/moment/locale/kk.js",
        "./kk.js": "./node_modules/moment/locale/kk.js",
        "./km": "./node_modules/moment/locale/km.js",
        "./km.js": "./node_modules/moment/locale/km.js",
        "./kn": "./node_modules/moment/locale/kn.js",
        "./kn.js": "./node_modules/moment/locale/kn.js",
        "./ko": "./node_modules/moment/locale/ko.js",
        "./ko.js": "./node_modules/moment/locale/ko.js",
        "./ku": "./node_modules/moment/locale/ku.js",
        "./ku.js": "./node_modules/moment/locale/ku.js",
        "./ky": "./node_modules/moment/locale/ky.js",
        "./ky.js": "./node_modules/moment/locale/ky.js",
        "./lb": "./node_modules/moment/locale/lb.js",
        "./lb.js": "./node_modules/moment/locale/lb.js",
        "./lo": "./node_modules/moment/locale/lo.js",
        "./lo.js": "./node_modules/moment/locale/lo.js",
        "./lt": "./node_modules/moment/locale/lt.js",
        "./lt.js": "./node_modules/moment/locale/lt.js",
        "./lv": "./node_modules/moment/locale/lv.js",
        "./lv.js": "./node_modules/moment/locale/lv.js",
        "./me": "./node_modules/moment/locale/me.js",
        "./me.js": "./node_modules/moment/locale/me.js",
        "./mi": "./node_modules/moment/locale/mi.js",
        "./mi.js": "./node_modules/moment/locale/mi.js",
        "./mk": "./node_modules/moment/locale/mk.js",
        "./mk.js": "./node_modules/moment/locale/mk.js",
        "./ml": "./node_modules/moment/locale/ml.js",
        "./ml.js": "./node_modules/moment/locale/ml.js",
        "./mn": "./node_modules/moment/locale/mn.js",
        "./mn.js": "./node_modules/moment/locale/mn.js",
        "./mr": "./node_modules/moment/locale/mr.js",
        "./mr.js": "./node_modules/moment/locale/mr.js",
        "./ms": "./node_modules/moment/locale/ms.js",
        "./ms-my": "./node_modules/moment/locale/ms-my.js",
        "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
        "./ms.js": "./node_modules/moment/locale/ms.js",
        "./mt": "./node_modules/moment/locale/mt.js",
        "./mt.js": "./node_modules/moment/locale/mt.js",
        "./my": "./node_modules/moment/locale/my.js",
        "./my.js": "./node_modules/moment/locale/my.js",
        "./nb": "./node_modules/moment/locale/nb.js",
        "./nb.js": "./node_modules/moment/locale/nb.js",
        "./ne": "./node_modules/moment/locale/ne.js",
        "./ne.js": "./node_modules/moment/locale/ne.js",
        "./nl": "./node_modules/moment/locale/nl.js",
        "./nl-be": "./node_modules/moment/locale/nl-be.js",
        "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
        "./nl.js": "./node_modules/moment/locale/nl.js",
        "./nn": "./node_modules/moment/locale/nn.js",
        "./nn.js": "./node_modules/moment/locale/nn.js",
        "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
        "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
        "./pa-in": "./node_modules/moment/locale/pa-in.js",
        "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
        "./pl": "./node_modules/moment/locale/pl.js",
        "./pl.js": "./node_modules/moment/locale/pl.js",
        "./pt": "./node_modules/moment/locale/pt.js",
        "./pt-br": "./node_modules/moment/locale/pt-br.js",
        "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
        "./pt.js": "./node_modules/moment/locale/pt.js",
        "./ro": "./node_modules/moment/locale/ro.js",
        "./ro.js": "./node_modules/moment/locale/ro.js",
        "./ru": "./node_modules/moment/locale/ru.js",
        "./ru.js": "./node_modules/moment/locale/ru.js",
        "./sd": "./node_modules/moment/locale/sd.js",
        "./sd.js": "./node_modules/moment/locale/sd.js",
        "./se": "./node_modules/moment/locale/se.js",
        "./se.js": "./node_modules/moment/locale/se.js",
        "./si": "./node_modules/moment/locale/si.js",
        "./si.js": "./node_modules/moment/locale/si.js",
        "./sk": "./node_modules/moment/locale/sk.js",
        "./sk.js": "./node_modules/moment/locale/sk.js",
        "./sl": "./node_modules/moment/locale/sl.js",
        "./sl.js": "./node_modules/moment/locale/sl.js",
        "./sq": "./node_modules/moment/locale/sq.js",
        "./sq.js": "./node_modules/moment/locale/sq.js",
        "./sr": "./node_modules/moment/locale/sr.js",
        "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr.js": "./node_modules/moment/locale/sr.js",
        "./ss": "./node_modules/moment/locale/ss.js",
        "./ss.js": "./node_modules/moment/locale/ss.js",
        "./sv": "./node_modules/moment/locale/sv.js",
        "./sv.js": "./node_modules/moment/locale/sv.js",
        "./sw": "./node_modules/moment/locale/sw.js",
        "./sw.js": "./node_modules/moment/locale/sw.js",
        "./ta": "./node_modules/moment/locale/ta.js",
        "./ta.js": "./node_modules/moment/locale/ta.js",
        "./te": "./node_modules/moment/locale/te.js",
        "./te.js": "./node_modules/moment/locale/te.js",
        "./tet": "./node_modules/moment/locale/tet.js",
        "./tet.js": "./node_modules/moment/locale/tet.js",
        "./tg": "./node_modules/moment/locale/tg.js",
        "./tg.js": "./node_modules/moment/locale/tg.js",
        "./th": "./node_modules/moment/locale/th.js",
        "./th.js": "./node_modules/moment/locale/th.js",
        "./tk": "./node_modules/moment/locale/tk.js",
        "./tk.js": "./node_modules/moment/locale/tk.js",
        "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
        "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
        "./tlh": "./node_modules/moment/locale/tlh.js",
        "./tlh.js": "./node_modules/moment/locale/tlh.js",
        "./tr": "./node_modules/moment/locale/tr.js",
        "./tr.js": "./node_modules/moment/locale/tr.js",
        "./tzl": "./node_modules/moment/locale/tzl.js",
        "./tzl.js": "./node_modules/moment/locale/tzl.js",
        "./tzm": "./node_modules/moment/locale/tzm.js",
        "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm.js": "./node_modules/moment/locale/tzm.js",
        "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
        "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
        "./uk": "./node_modules/moment/locale/uk.js",
        "./uk.js": "./node_modules/moment/locale/uk.js",
        "./ur": "./node_modules/moment/locale/ur.js",
        "./ur.js": "./node_modules/moment/locale/ur.js",
        "./uz": "./node_modules/moment/locale/uz.js",
        "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
        "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
        "./uz.js": "./node_modules/moment/locale/uz.js",
        "./vi": "./node_modules/moment/locale/vi.js",
        "./vi.js": "./node_modules/moment/locale/vi.js",
        "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
        "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
        "./yo": "./node_modules/moment/locale/yo.js",
        "./yo.js": "./node_modules/moment/locale/yo.js",
        "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
        "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
        "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
        "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
        "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
        "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
        "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
        "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-unitTabs-tabs-tabs-module */
          "pages-unitTabs-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/unitTabs/tabs/tabs.module */
          "./src/app/pages/unitTabs/tabs/tabs.module.ts")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-login-login-module */
          "pages-auth-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/login/login.module */
          "./src/app/pages/auth/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'forgot-password',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-forgot-password-forgot-password-module */
          "pages-auth-forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/forgot-password/forgot-password.module */
          "./src/app/pages/auth/forgot-password/forgot-password.module.ts")).then(function (m) {
            return m.ForgotPasswordPageModule;
          });
        }
      }, {
        path: 'phone-verification',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-auth-phone-verification-phone-verification-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-auth-phone-verification-phone-verification-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/auth/phone-verification/phone-verification.module */
          "./src/app/pages/auth/phone-verification/phone-verification.module.ts")).then(function (m) {
            return m.PhoneVerificationPageModule;
          });
        }
      }, {
        path: 'select-role',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-auth-select-role-select-role-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-auth-select-role-select-role-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/auth/select-role/select-role.module */
          "./src/app/pages/auth/select-role/select-role.module.ts")).then(function (m) {
            return m.SelectRolePageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-auth-signup-signup-module */
          "pages-auth-signup-signup-module").then(__webpack_require__.bind(null,
          /*! ./pages/auth/signup/signup.module */
          "./src/app/pages/auth/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'checkr',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-auth-checkr-checkr-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-auth-checkr-checkr-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/auth/checkr/checkr.module */
          "./src/app/pages/auth/checkr/checkr.module.ts")).then(function (m) {
            return m.CheckrPageModule;
          });
        }
      }, {
        path: 'space-type',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-admin-space-type-space-type-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-admin-space-type-space-type-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/admin/space-type/space-type.module */
          "./src/app/pages/admin/space-type/space-type.module.ts")).then(function (m) {
            return m.SpaceTypePageModule;
          });
        }
      }, {
        path: 'revenue-share',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-admin-revenue-share-revenue-share-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-admin-revenue-share-revenue-share-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/admin/revenue-share/revenue-share.module */
          "./src/app/pages/admin/revenue-share/revenue-share.module.ts")).then(function (m) {
            return m.RevenueSharePageModule;
          });
        }
      }, {
        path: 'access-type',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-admin-access-type-access-type-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-admin-access-type-access-type-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/admin/access-type/access-type.module */
          "./src/app/pages/admin/access-type/access-type.module.ts")).then(function (m) {
            return m.AccessTypePageModule;
          });
        }
      }, {
        path: 'add-feature',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-admin-add-feature-add-feature-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-admin-add-feature-add-feature-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/admin/add-feature/add-feature.module */
          "./src/app/pages/admin/add-feature/add-feature.module.ts")).then(function (m) {
            return m.AddFeaturePageModule;
          });
        }
      }, {
        path: 'send-notifications',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-admin-send-notifications-send-notifications-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-admin-send-notifications-send-notifications-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/admin/send-notifications/send-notifications.module */
          "./src/app/pages/admin/send-notifications/send-notifications.module.ts")).then(function (m) {
            return m.SendNotificationsPageModule;
          });
        }
      }, {
        path: 'access-period',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-admin-access-period-access-period-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-admin-access-period-access-period-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/admin/access-period/access-period.module */
          "./src/app/pages/admin/access-period/access-period.module.ts")).then(function (m) {
            return m.AccessPeriodPageModule;
          });
        }
      }, {
        path: 'intro',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-intro-intro-module */
          "pages-intro-intro-module").then(__webpack_require__.bind(null,
          /*! ./pages/intro/intro.module */
          "./src/app/pages/intro/intro.module.ts")).then(function (m) {
            return m.IntroPageModule;
          });
        }
      }, {
        path: 'add-address',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-owner-add-address-add-address-module */
          "pages-owner-add-address-add-address-module").then(__webpack_require__.bind(null,
          /*! ./pages/owner/add-address/add-address.module */
          "./src/app/pages/owner/add-address/add-address.module.ts")).then(function (m) {
            return m.AddAddressPageModule;
          });
        }
      }, {
        path: 'edit-space',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-edit-space-edit-space-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-edit-space-edit-space-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/edit-space/edit-space.module */
          "./src/app/pages/owner/edit-space/edit-space.module.ts")).then(function (m) {
            return m.EditSpacePageModule;
          });
        }
      }, {
        path: 'view-earnings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-view-earnings-view-earnings-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-view-earnings-view-earnings-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/view-earnings/view-earnings.module */
          "./src/app/pages/owner/view-earnings/view-earnings.module.ts")).then(function (m) {
            return m.ViewEarningsPageModule;
          });
        }
      }, {
        path: 'space-details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-Add-space-space-details-space-details-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-Add-space-space-details-space-details-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/Add-space/space-details/space-details.module */
          "./src/app/pages/owner/Add-space/space-details/space-details.module.ts")).then(function (m) {
            return m.SpaceDetailsPageModule;
          });
        }
      }, {
        path: 'space-publish',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-Add-space-space-publish-space-publish-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-Add-space-space-publish-space-publish-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/Add-space/space-publish/space-publish.module */
          "./src/app/pages/owner/Add-space/space-publish/space-publish.module.ts")).then(function (m) {
            return m.SpacePublishPageModule;
          });
        }
      }, {
        path: 'edit-profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-auth-edit-profile-edit-profile-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-auth-edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/auth/edit-profile/edit-profile.module */
          "./src/app/pages/auth/edit-profile/edit-profile.module.ts")).then(function (m) {
            return m.EditProfilePageModule;
          });
        }
      }, {
        path: 'change-password',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-auth-change-password-change-password-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-auth-change-password-change-password-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/auth/change-password/change-password.module */
          "./src/app/pages/auth/change-password/change-password.module.ts")).then(function (m) {
            return m.ChangePasswordPageModule;
          });
        }
      }, {
        path: 'location',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-owner-location-select-location-select-module */
          "pages-owner-location-select-location-select-module").then(__webpack_require__.bind(null,
          /*! ./pages/owner/location-select/location-select.module */
          "./src/app/pages/owner/location-select/location-select.module.ts")).then(function (m) {
            return m.LocationSelectPageModule;
          });
        }
      }, {
        path: 'space-properties',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-Add-space-space-properties-space-properties-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-Add-space-space-properties-space-properties-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/Add-space/space-properties/space-properties.module */
          "./src/app/pages/owner/Add-space/space-properties/space-properties.module.ts")).then(function (m) {
            return m.SpacePropertiesPageModule;
          });
        }
      }, {
        path: 'space-description',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-Add-space-space-description-space-description-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-Add-space-space-description-space-description-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/Add-space/space-description/space-description.module */
          "./src/app/pages/owner/Add-space/space-description/space-description.module.ts")).then(function (m) {
            return m.SpaceDescriptionPageModule;
          });
        }
      }, {
        path: 'space-features',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-Add-space-space-features-space-features-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-Add-space-space-features-space-features-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/Add-space/space-features/space-features.module */
          "./src/app/pages/owner/Add-space/space-features/space-features.module.ts")).then(function (m) {
            return m.SpaceFeaturesPageModule;
          });
        }
      }, {
        path: 'edit-space',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-owner-Add-space-edit-space-edit-space-module */
          "pages-owner-Add-space-edit-space-edit-space-module").then(__webpack_require__.bind(null,
          /*! ./pages/owner/Add-space/edit-space/edit-space.module */
          "./src/app/pages/owner/Add-space/edit-space/edit-space.module.ts")).then(function (m) {
            return m.EditSpacePageModule;
          });
        }
      }, {
        path: 'place-detail',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tanent-place-detail-place-detail-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-tanent-place-detail-place-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tanent/place-detail/place-detail.module */
          "./src/app/pages/tanent/place-detail/place-detail.module.ts")).then(function (m) {
            return m.PlaceDetailPageModule;
          });
        }
      }, {
        path: 'start-booking',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tanent-start-booking-start-booking-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-tanent-start-booking-start-booking-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tanent/start-booking/start-booking.module */
          "./src/app/pages/tanent/start-booking/start-booking.module.ts")).then(function (m) {
            return m.StartBookingPageModule;
          });
        }
      }, {
        path: 'show-payment-info',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tanent-show-payment-info-show-payment-info-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-tanent-show-payment-info-show-payment-info-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tanent/show-payment-info/show-payment-info.module */
          "./src/app/pages/tanent/show-payment-info/show-payment-info.module.ts")).then(function (m) {
            return m.ShowPaymentInfoPageModule;
          });
        }
      }, {
        path: 'booking-detail/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-booking-detail-booking-detail-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-booking-detail-booking-detail-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/booking-detail/booking-detail.module */
          "./src/app/pages/owner/booking-detail/booking-detail.module.ts")).then(function (m) {
            return m.BookingDetailPageModule;
          });
        }
      }, {
        path: 'confirm-payment',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tanent-confirm-payment-confirm-payment-module */
          "pages-tanent-confirm-payment-confirm-payment-module").then(__webpack_require__.bind(null,
          /*! ./pages/tanent/confirm-payment/confirm-payment.module */
          "./src/app/pages/tanent/confirm-payment/confirm-payment.module.ts")).then(function (m) {
            return m.ConfirmPaymentPageModule;
          });
        }
      }, {
        path: 'payment',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tanent-payment-payment-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-tanent-payment-payment-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tanent/payment/payment.module */
          "./src/app/pages/tanent/payment/payment.module.ts")).then(function (m) {
            return m.PaymentPageModule;
          });
        }
      }, {
        path: 'select-type',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tanent-select-type-select-type-module */
          "pages-tanent-select-type-select-type-module").then(__webpack_require__.bind(null,
          /*! ./pages/tanent/select-type/select-type.module */
          "./src/app/pages/tanent/select-type/select-type.module.ts")).then(function (m) {
            return m.SelectTypePageModule;
          });
        }
      }, {
        path: 'pick-up',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tanent-pick-up-pick-up-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-tanent-pick-up-pick-up-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tanent/pick-up/pick-up.module */
          "./src/app/pages/tanent/pick-up/pick-up.module.ts")).then(function (m) {
            return m.PickUpPageModule;
          });
        }
      }, {
        path: 'extend-booking',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tanent-extend-booking-extend-booking-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-tanent-extend-booking-extend-booking-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tanent/extend-booking/extend-booking.module */
          "./src/app/pages/tanent/extend-booking/extend-booking.module.ts")).then(function (m) {
            return m.ExtendBookingPageModule;
          });
        }
      }, {
        path: 'request-for-extension',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-owner-request-for-extension-request-for-extension-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-owner-request-for-extension-request-for-extension-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/owner/request-for-extension/request-for-extension.module */
          "./src/app/pages/owner/request-for-extension/request-for-extension.module.ts")).then(function (m) {
            return m.RequestForExtensionPageModule;
          });
        }
      }, {
        path: 'payment-for-extension',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-tanent-payment-for-extension-payment-for-extension-module */
          "pages-tanent-payment-for-extension-payment-for-extension-module").then(__webpack_require__.bind(null,
          /*! ./pages/tanent/payment-for-extension/payment-for-extension.module */
          "./src/app/pages/tanent/payment-for-extension/payment-for-extension.module.ts")).then(function (m) {
            return m.PaymentForExtensionPageModule;
          });
        }
      }, {
        path: 'invite',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-auth-invite-invite-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-auth-invite-invite-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/auth/invite/invite.module */
          "./src/app/pages/auth/invite/invite.module.ts")).then(function (m) {
            return m.InvitePageModule;
          });
        }
      }, {
        path: 'stored-item-type',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-admin-item-storeage-type-item-storeage-type-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-admin-item-storeage-type-item-storeage-type-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/admin/item-storeage-type/item-storeage-type.module */
          "./src/app/pages/admin/item-storeage-type/item-storeage-type.module.ts")).then(function (m) {
            return m.ItemStoreageTypePageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_fcm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/fcm.service */
      "./src/app/services/fcm.service.ts");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");

      var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Network;

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, _loader, fcmService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this._loader = _loader;
          this.fcmService = fcmService;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.statusBar.styleDefault();
                        this.splashScreen.hide();
                        this.networkListener = Network.addListener('networkStatusChange', function (status) {
                          _this2.networkStatus = status;

                          if (_this2.networkStatus.connected) {
                            _this2._loader.dismiss();
                          } else {
                            _this2.presentLoading('You are offline. Waiting for internet connection.');
                          }
                        });
                        _context.next = 5;
                        return Network.getStatus();

                      case 5:
                        this.networkStatus = _context.sent;
                        // Trigger the push setup 
                        this.fcmService.initPush();

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._loader.create({
                        message: message
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_fcm_service__WEBPACK_IMPORTED_MODULE_5__["FcmService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ion2-calendar */
      "./node_modules/ion2-calendar/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var ion2_calendar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/app-version/ngx */
      "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
          hardwareBackButton: false
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
        })],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_13__["NativeGeocoder"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_11__["SocialSharing"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_16__["AppVersion"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_15__["Network"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/pages/config/config.ts":
    /*!****************************************!*\
      !*** ./src/app/pages/config/config.ts ***!
      \****************************************/

    /*! exports provided: config, KEY, URL, UNITURL, configEmail, CTA */

    /***/
    function srcAppPagesConfigConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return config;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KEY", function () {
        return KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "URL", function () {
        return URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UNITURL", function () {
        return UNITURL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "configEmail", function () {
        return configEmail;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CTA", function () {
        return CTA;
      });

      var config = {
        // url: 'http://localhost:3000'
        url: 'https://gur.sandbox.imkloud.com'
      };
      var KEY = {
        // apikey: 'YPBWEoixPMYs94QdW9n7kdqoy5n4iA' //local
        apikey: 'rGpTKMEZjs3RR5vcfwg6pujoA54i33'
      };
      var URL = {
        signIn: '/api/v1/imli/signin',
        resetPassword: '/api/v1/imli/resetpassword',
        changePassword: '/api/v1/imli/changepassword',
        signUp: '/api/v1/imli/signup',
        updateProfile: '/api/v1/imli/updateprofile',
        forgotPassword: '/api/v1/imli/forgotpassword',
        getOnboardRoles: '/api/v1/imli/org/onboarding/meta',
        verifyToken: '/api/v1/imli/verify-token',
        imageUpload: '/api/v1/imli/storage/upload/base64image',
        reviews: '/api/v1/myrivu/public/reviews',
        countriesList: '/api/v1/imli/countries'
      };
      var UNITURL = {
        sendOtp: '/api/v1/unit/sendOtp',
        verifyOtp: '/api/v1/unit/verifyOtp',
        allNotifications: '/api/v1/unit/allNotifications',
        markAsRead: '/api/v1/unit/markAsRead',
        mybookings: '/api/v1/unit/mybookings',
        spaces: '/api/v1/unit/spaces',
        placeMeta: '/api/v1/unit/placeMeta',
        myPlaces: '/api/v1/unit/myPlaces',
        storedItemtype: '/api/v1/unit/itemTypeList',
        updateStoredItemtype: '/api/v1/unit/updateItemType',
        deleteStoredItemtype: '/api/v1/unit/deleteItemType',
        addStoredItemtype: '/api/v1/unit/itemType',
        accessTimeList: '/api/v1/unit/accessTimeList',
        updateAccessTime: '/api/v1/unit/updateAccessTime',
        addAccessTime: '/api/v1/unit/addAccessTime',
        deleteAccessTimeType: '/api/v1/unit/deleteAccessTimeType',
        accessTypeList: '/api/v1/unit/accessTypeList',
        updateAccessType: '/api/v1/unit/updateAccessType',
        addAccessType: '/api/v1/unit/addAccessType',
        deleteAccessType: '/api/v1/unit/deleteAccessType',
        amenities: '/api/v1/unit/features',
        updateAmenity: '/api/v1/unit/updateFeature',
        addAmenity: '/api/v1/unit/addFeature',
        deleteAmenity: '/api/v1/unit/deleteFeature',
        revenueShareList: '/api/v1/unit/revenueShareList',
        updaterevenueShare: '/api/v1/unit/updaterevenueShare',
        addrevenueShare: '/api/v1/unit/addrevenueShare',
        deleterevenueShare: '/api/v1/unit/deleterevenueShare',
        adminNotfication: '/api/v1/unit/adminNotfication',
        spaceTypeList: '/api/v1/unit/spaceTypeList',
        updateSpaceType: '/api/v1/unit/updateSpaceType',
        spaceType: '/api/v1/unit/spaceType',
        deleteSpaceType: '/api/v1/unit/deleteSpaceType',
        bookedPlaces: '/api/v1/unit/bookedPlaces',
        addSpace: '/api/v1/unit/addSpace',
        updateSpace: '/api/v1/unit/updateSpace',
        publishSpace: '/api/v1/unit/publishSpace',
        removePlace: '/api/v1/unit/removePlace',
        editSpace: '/api/v1/unit/editSpace',
        getBookingDates: '/api/v1/unit/getBookingDates',
        getCustomerProfile: '/api/v1/unit/getCustomerProfile',
        createCustomerForPayments: '/api/v1/unit/createCustomerForPayments',
        booking: '/api/v1/unit/booking',
        createSubscription: '/api/v1/unit/createSubscription',
        chargeCustomer: '/api/v1/unit/chargeCustomer',
        addUserInformation: '/api/v1/unit/addUserInformation',
        getUserInformation: '/api/v1/unit/getUserInformation',
        updateUserInformation: '/api/v1/unit/updateUserInformation',
        bookingDetails: '/api/v1/unit/bookingDetails',
        placeWithTotalEarnings: '/api/v1/unit/placeWithTotalEarnings',
        deleteCustomerProfile: '/api/v1/unit/deleteCustomerProfile',
        cancelBooking: '/api/v1/unit/cancelBooking',
        getCountForAdmin: '/api/v1/unit/getCountForAdmin',
        removeDevice: '/api/v1/unit/removeDevice',
        schedulePickup: '/api/v1/unit/schedulePickup',
        extensionRequest: '/api/v1/unit/extensionRequest',
        approveExtension: '/api/v1/unit/approveExtension',
        saveDevice: '/api/v1/unit/registerDevice',
        addToken: '/api/v1/unit/addToken',
        sendInvite: '/api/v1/unit/sendInvite',
        updateRole: '/api/v1/unit/updateRole'
      };
      var configEmail = {
        siteName: "",
        from: "",
        subject: "",
        resetUrl: "",
        team: ""
      };
      var CTA = {
        // cta Url
        url: '/api/v1/cta/'
      };
      /***/
    },

    /***/
    "./src/app/services/api-service.service.ts":
    /*!*************************************************!*\
      !*** ./src/app/services/api-service.service.ts ***!
      \*************************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppServicesApiServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
        }

        _createClass(ApiService, [{
          key: "extractData",
          value: function extractData(res) {
            var body = res;
            return body || {};
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              console.error('An error occurred:', error.error.message);
            } else {
              console.log(error);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
          }
        }, {
          key: "postRequest",
          value:
          /*
          POST REQUEST
          */
          function postRequest(url, param) {
            return this.http.post(url, param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
          /*
          GET REQUEST
          */

        }, {
          key: "getRequest",
          value: function getRequest(url) {
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "uploadBase64image",
          value: function uploadBase64image(url, params) {
            var _this3 = this;

            return new Promise(function (resolve, reject) {
              if (!params.base64) {
                resolve({
                  success: false,
                  message: 'Image data is requried.'
                });
              }

              console.log(params);

              _this3.http.post(url, params).subscribe(function (result) {
                console.log(result);
                resolve(result);
              },
              /*
              console.log(params);
              return this.http.post('https://unit-storage-default-rtdb.firebaseio.com/offered-places.json', {...newPlace, id: null}).subscribe((result: any) => {
                console.log(result);
                resolve(result);
              },
              */
              function (error) {
                console.log(error);
                resolve({
                  success: false,
                  message: error
                });
              });
            });
          }
        }]);

        return ApiService;
      }();

      ApiService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], ApiService);
      /***/
    },

    /***/
    "./src/app/services/fcm.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/fcm.service.ts ***!
      \*****************************************/

    /*! exports provided: FcmService */

    /***/
    function srcAppServicesFcmServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FcmService", function () {
        return FcmService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./api-service.service */
      "./src/app/services/api-service.service.ts");
      /* harmony import */


      var _pages_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pages/config/config */
      "./src/app/pages/config/config.ts");
      /* harmony import */


      var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./global.service */
      "./src/app/services/global.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
          PushNotifications = _capacitor_core__WEBP.PushNotifications,
          Device = _capacitor_core__WEBP.Device;

      var FcmService = /*#__PURE__*/function () {
        function FcmService(_apiService, zone, _gs, storage) {
          _classCallCheck(this, FcmService);

          this._apiService = _apiService;
          this.zone = zone;
          this._gs = _gs;
          this.storage = storage;
          this.url = _pages_config_config__WEBPACK_IMPORTED_MODULE_4__["config"].url;
        }

        _createClass(FcmService, [{
          key: "initPush",
          value: function initPush() {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].platform !== 'web') {
              this.registerPush();
            }
          }
        }, {
          key: "registerPush",
          value: function registerPush() {
            var _this4 = this;

            PushNotifications.requestPermission().then(function (permission) {
              if (permission.granted) {
                PushNotifications.register();
              } else {// No permission for push granted
              }
            });
            PushNotifications.addListener('registration', function (token) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _this5 = this;

                var tokeninfo, info, deviceInfo;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        tokeninfo = token;

                        if (tokeninfo) {
                          this.storage.set("fcm_token", tokeninfo.value);
                        }

                        _context4.next = 4;
                        return Device.getInfo();

                      case 4:
                        info = _context4.sent;
                        deviceInfo = {
                          apiKey: _pages_config_config__WEBPACK_IMPORTED_MODULE_4__["KEY"].apikey,
                          deviceId: info.uuid,
                          firebaseToken: tokeninfo.value,
                          deviceType: info.operatingSystem,
                          enableNotifications: true
                        };

                        this._apiService.postRequest(this.url + _pages_config_config__WEBPACK_IMPORTED_MODULE_4__["UNITURL"].saveDevice, deviceInfo).subscribe(function (result) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    console.log(result);

                                  case 1:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3);
                          }));
                        }, function (error) {
                          console.log('error', error);
                        });

                      case 7:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
            PushNotifications.addListener('registrationError', function (error) {
              console.log('Error: ' + JSON.stringify(error));
            });
            PushNotifications.addListener('pushNotificationReceived', function (notification) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        console.log('Push received: ' + JSON.stringify(notification));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
            });
            PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _this6 = this;

                var data;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        data = notification.notification.data; // navigate to page according to  api info

                        if (data.notificationType) {
                          console.log('Action performed: ' + data.notificationType);
                          this.zone.run(function () {
                            _this6._gs.fcmData(data.notification);
                          });
                        }

                      case 2:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6, this);
              }));
            });
          }
        }]);

        return FcmService;
      }();

      FcmService.ctorParameters = function () {
        return [{
          type: _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }];
      };

      FcmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], FcmService);
      /***/
    },

    /***/
    "./src/app/services/global.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/global.service.ts ***!
      \********************************************/

    /*! exports provided: GlobalService */

    /***/
    function srcAppServicesGlobalServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalService", function () {
        return GlobalService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var GlobalService = /*#__PURE__*/function () {
        function GlobalService() {
          _classCallCheck(this, GlobalService);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.logout = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.filterObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.refershMyStays = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.fcmInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        } // Used For update  users


        _createClass(GlobalService, [{
          key: "sendData",
          value: function sendData(user) {
            this.subject.next(user);
          }
        }, {
          key: "clearData",
          value: function clearData() {
            this.subject.next();
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.subject.asObservable();
          } // Update tabs

        }, {
          key: "updateTabs",
          value: function updateTabs(status) {
            this.status.next(status);
          }
        }, {
          key: "getUpdatedTabs",
          value: function getUpdatedTabs() {
            return this.status.asObservable();
          } // logOut 

        }, {
          key: "logOut",
          value: function logOut() {
            this.logout.next(true);
          }
        }, {
          key: "getLogOut",
          value: function getLogOut() {
            return this.logout.asObservable();
          }
          /*
          REFRESH FILTERS
          */

        }, {
          key: "setFilterRefresh",
          value: function setFilterRefresh(refresh) {
            this.filterObject.next({
              refresh: refresh
            });
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            return this.filterObject.asObservable();
          }
          /*
          REFRESH MY PLACES FOR HOST
          */

        }, {
          key: "sendRefershScreen",
          value: function sendRefershScreen(refresh) {
            this.refresh.next({
              refresh: refresh
            });
          }
        }, {
          key: "getRefreshScreen",
          value: function getRefreshScreen() {
            return this.refresh.asObservable();
          }
        }, {
          key: "clearRefresh",
          value: function clearRefresh() {
            this.refresh.next();
          }
          /*
            REFRESH MY STAYS
            */

        }, {
          key: "refreshMyStays",
          value: function refreshMyStays(refresh) {
            this.refershMyStays.next({
              refresh: refresh
            });
          }
        }, {
          key: "getMyStaysRefresh",
          value: function getMyStaysRefresh() {
            return this.refershMyStays.asObservable();
          }
        }, {
          key: "clearMyStaysObserver",
          value: function clearMyStaysObserver() {
            this.refershMyStays.next();
          }
          /*
          FCM data
          */

        }, {
          key: "fcmData",
          value: function fcmData(refresh) {
            this.fcmInfo.next({
              refresh: refresh
            });
          }
        }, {
          key: "getfcmData",
          value: function getfcmData() {
            return this.fcmInfo.asObservable();
          }
        }, {
          key: "clearfcmData",
          value: function clearfcmData() {
            this.fcmInfo.next();
          }
        }]);

        return GlobalService;
      }();

      GlobalService.ctorParameters = function () {
        return [];
      };

      GlobalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GlobalService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Wai\desktop\unit-storage\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map