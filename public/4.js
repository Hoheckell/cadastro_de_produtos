(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Produtos.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Produtos.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
      produtos: [],
      selecteds: []
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get('http://localhost:8000/api/produtos/').then(function (response) {
      _this.produtos = response.data;
    });
  },
  methods: {
    deleteProduto: function deleteProduto() {
      var _this2 = this;

      this.axios["delete"]("http://localhost:8000/api/produtos/" + this.selecteds).then(function (response) {
        var _loop = function _loop(x) {
          var i = _this2.produtos.map(function (data) {
            return _this2.selecteds[x];
          }).indexOf(_this2.selecteds[x]);

          _this2.produtos.splice(i, 1);
        };

        for (var x = 0; x < _this2.selecteds.length; x++) {
          _loop(x);
        }

        _this2.selecteds = [];
      });
    },
    editProduto: function editProduto() {
      this.$router.push({
        name: 'edit',
        params: {
          id: JSON.stringify(this.selecteds)
        }
      });
    },
    detalheProduto: function detalheProduto() {
      this.$router.push({
        name: 'show',
        params: {
          id: JSON.stringify(this.selecteds)
        }
      });
    },
    historyProduto: function historyProduto() {
      this.$router.push({
        name: 'changes',
        params: {
          id: JSON.stringify(this.selecteds)
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Produtos.vue?vue&type=template&id=5b156df6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Produtos.vue?vue&type=template&id=5b156df6& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("h2", { staticClass: "text-center" }, [_vm._v("Lista de Produtos")]),
    _vm._v(" "),
    _vm.produtos.length
      ? _c("table", { staticClass: "table table-hover" }, [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("ID")]),
              _vm._v(" "),
              _c("th", [_vm._v("Nome")]),
              _vm._v(" "),
              _c("th", [_vm._v("Preço ($)")]),
              _vm._v(" "),
              _c("th", [_vm._v("Quantidade")]),
              _vm._v(" "),
              _c("th", { attrs: { width: "40%" } }, [
                this.selecteds.length
                  ? _c(
                      "div",
                      { staticClass: "btn-group", attrs: { role: "group" } },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.editProduto()
                              }
                            }
                          },
                          [_vm._v("Alterar")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.deleteProduto()
                              }
                            }
                          },
                          [_vm._v("Excluir")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.detalheProduto()
                              }
                            }
                          },
                          [_vm._v("Detalhes")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.historyProduto()
                              }
                            }
                          },
                          [_vm._v("Historico")]
                        )
                      ]
                    )
                  : _c("div", [_vm._v("Selecione pelo menos um item")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.produtos, function(produto) {
              return _c("tr", { key: produto.id }, [
                _c("td", [_vm._v(_vm._s(produto.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(produto.nome))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(produto.preco))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(produto.quantidade))]),
                _vm._v(" "),
                _c("td", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selecteds,
                        expression: "selecteds"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: produto.id,
                      checked: Array.isArray(_vm.selecteds)
                        ? _vm._i(_vm.selecteds, produto.id) > -1
                        : _vm.selecteds
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.selecteds,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = produto.id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.selecteds = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.selecteds = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.selecteds = $$c
                        }
                      }
                    }
                  })
                ])
              ])
            }),
            0
          )
        ])
      : _c("div", [
          _c("img", { attrs: { src: "/images/loading.gif", width: "200" } })
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Produtos.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Produtos.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Produtos_vue_vue_type_template_id_5b156df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Produtos.vue?vue&type=template&id=5b156df6& */ "./resources/js/components/Produtos.vue?vue&type=template&id=5b156df6&");
/* harmony import */ var _Produtos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Produtos.vue?vue&type=script&lang=js& */ "./resources/js/components/Produtos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Produtos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Produtos_vue_vue_type_template_id_5b156df6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Produtos_vue_vue_type_template_id_5b156df6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Produtos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Produtos.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Produtos.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Produtos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Produtos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Produtos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Produtos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Produtos.vue?vue&type=template&id=5b156df6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Produtos.vue?vue&type=template&id=5b156df6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produtos_vue_vue_type_template_id_5b156df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Produtos.vue?vue&type=template&id=5b156df6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Produtos.vue?vue&type=template&id=5b156df6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produtos_vue_vue_type_template_id_5b156df6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Produtos_vue_vue_type_template_id_5b156df6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);