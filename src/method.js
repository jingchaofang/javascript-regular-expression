import { trim } from './util';
// 判断输入的字符是否为中文
function isChinese(str) {
  let reg = /^[\u0391-\uFFE5]+$/;
  return reg.test(trim(str));
}
// 判断输入内容去除空白符后是否为空
function isNull(str) {
  return trim(str).length === 0;
}
// 判断输入的EMAIL格式是否正确    
function isEmail(str) {
  let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return reg.test(trim(str));
}
// 判断输入的邮编(只能为六位)是否正确    
function isZIP(str) {
  let reg = /^\d{6}$/;
  return reg.test(trim(str));
}

// 电话
function isPhone(str) {
  let reg = /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/;
  return reg.test(trim(str));
}

// 手机号
function isMobile(str) {
  let reg = /^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$/;
  return reg.test(trim(str));
}

// URL
function isUrl(str) {
  let reg = /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
  return reg.test(trim(str));
}

// IDCARD
function isIdCard(str) {
  let reg = /^\d{15}(\d{2}[A-Za-z0-9])?$/;
  return reg.test(trim(str));
}

// QQ号
function isQQ(str) {
  let reg = /^[1-9]\d{4,9}$/;
  return reg.test(trim(str));
}

// 判断日期类型是否为YYYY-MM-DD格式的类型 
function isDate(str) {
  let reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
  return reg.test(trim(str));
}

// 判断日期类型是否为YYYY-MM-DD hh:mm:ss格式的类型
function isDateTime(str) {
  let reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
  return reg.test(trim(str));
}

// 判断日期类型是否为hh:mm:ss格式的类型 
function isTime(str) {
  let reg = /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/;
  return reg.test(trim(str));
}

// 判断输入的字符是否为英文字母    
function isLetter(str) {
  let reg = /^[a-zA-Z]+$/;
  return reg.test(trim(str));
}

// 判断输入的字符是否为正负整数
function isInteger(str) {
  let reg = /^[-+]?\d*$/;
  return reg.test(trim(str));
}

// 判断输入的字符是否为双精度
function isDouble(str) {
  let reg = /^[-\+]?\d+(\.\d+)?$/;
  return reg.test(trim(str));
}

// https://www.cnblogs.com/hai-ping/articles/2997538.html

export {
  isNull,
  isChinese
}