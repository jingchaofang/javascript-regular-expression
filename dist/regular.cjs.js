'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
