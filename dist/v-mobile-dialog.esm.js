/**
 * v-mobile-dialog v0.0.0
 * (c) 2017 Limichange
 * @license MIT
 */
var mobileDialog$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticStyle:{"opacity":"1"}},[_c('div',{staticClass:"weui-mask"}),_c('div',{staticClass:"weui-dialog"},[_c('div',{staticClass:"weui-dialog__hd"},[_c('strong',{staticClass:"weui-dialog__title"},[_vm._v(_vm._s(_vm.title))])]),_c('div',{staticClass:"weui-dialog__bd"},[_vm._v(_vm._s(_vm.content))]),_c('div',{staticClass:"weui-dialog__ft"},[_c('a',{staticClass:"weui-dialog__btn weui-dialog__btn_default",attrs:{"href":"javascript:;"}},[_vm._v("cancel ")]),_c('a',{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{"href":"javascript:;"},on:{"click":_vm.ok}},[_vm._v("ok")])])])]):_vm._e()},staticRenderFns: [],
  name: 'v-mobile-dialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ok: function ok () {
      this.$emit('ok');
    }
  }
};

export default mobileDialog$1;
