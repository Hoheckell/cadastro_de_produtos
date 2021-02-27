(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MudancasProduto.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MudancasProduto.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      changes: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get('http://localhost:8000/api/changes/' + this.$route.params.id).then(function (response) {
      _this.changes = response.data;
    });
  },
  methods: {
    quantityHistory: function quantityHistory(id) {
      this.$router.push({
        name: 'quantities',
        params: {
          id: id
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MudancasProduto.vue?vue&type=template&id=030880f2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MudancasProduto.vue?vue&type=template&id=030880f2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h3", { staticClass: "text-center" }, [
      _vm._v("Histórico de mudanças do Produto")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        _vm._l(_vm.changes, function(change) {
          return _c("div", { key: change.id }, [
            _c("p"),
            _c("h3", [
              _vm._v("Item[" + _vm._s(change.before_changes.id) + "]["),
              _c("small", [
                _vm._v(_vm._s(_vm._f("formatDate")(change.created_at)))
              ]),
              _vm._v("]")
            ]),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Antes:")]),
            _c("br"),
            _vm._v(" "),
            _c("em", [_vm._v("Nome: " + _vm._s(change.before_changes.nome))]),
            _c("br"),
            _vm._v(" "),
            _c("em", [_vm._v("Preço: " + _vm._s(change.before_changes.preco))]),
            _c("br"),
            _vm._v(" "),
            _c("em", [
              _vm._v("Quantidade: " + _vm._s(change.before_changes.quantidade))
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-dark",
                on: {
                  click: function($event) {
                    return _vm.quantityHistory(change.before_changes.id)
                  }
                }
              },
              [_vm._v("historido de Quantidade")]
            ),
            _vm._v(" "),
            _c("p"),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v("Depois:")]),
              _c("br"),
              _vm._v(" "),
              _c("em", [_vm._v("Nome: " + _vm._s(change.after_changes.nome))]),
              _c("br"),
              _vm._v(" "),
              _c("em", [
                _vm._v("Preço: " + _vm._s(change.after_changes.preco))
              ]),
              _c("br"),
              _vm._v(" "),
              _c("em", [
                _vm._v("Quantidade: " + _vm._s(change.after_changes.quantidade))
              ])
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/MudancasProduto.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/MudancasProduto.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MudancasProduto_vue_vue_type_template_id_030880f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MudancasProduto.vue?vue&type=template&id=030880f2&scoped=true& */ "./resources/js/components/MudancasProduto.vue?vue&type=template&id=030880f2&scoped=true&");
/* harmony import */ var _MudancasProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MudancasProduto.vue?vue&type=script&lang=js& */ "./resources/js/components/MudancasProduto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MudancasProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MudancasProduto_vue_vue_type_template_id_030880f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MudancasProduto_vue_vue_type_template_id_030880f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "030880f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MudancasProduto.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MudancasProduto.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/MudancasProduto.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MudancasProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MudancasProduto.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MudancasProduto.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MudancasProduto_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MudancasProduto.vue?vue&type=template&id=030880f2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/MudancasProduto.vue?vue&type=template&id=030880f2&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MudancasProduto_vue_vue_type_template_id_030880f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MudancasProduto.vue?vue&type=template&id=030880f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MudancasProduto.vue?vue&type=template&id=030880f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MudancasProduto_vue_vue_type_template_id_030880f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MudancasProduto_vue_vue_type_template_id_030880f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);