import { trim } from './util';
// 判断输入的字符是否为中文
function isChinese(str) {
    return reg.test(trim(str));
}
// 判断输入内容是否为空
function isNull(str) {
  return trim(str).length === 0 ? true : false;
}

export {
  isNull,
  isChinese
}