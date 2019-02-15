(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.regular = {}));
}(this, function (exports) { 'use strict';

  function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }

  // 判断输入的字符是否为中文
  function isChinese(str) {
      return reg.test(trim(str));
  }
  // 判断输入内容是否为空
  function isNull(str) {
    return trim(str).length === 0 ? true : false;
  }

  exports.isNull = isNull;
  exports.isChinese = isChinese;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
