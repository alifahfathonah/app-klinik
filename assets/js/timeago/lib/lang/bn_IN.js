"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

// Bangla (India)
function _default(number, index) {
  return [['এইমাত্র', 'একটা সময়'], ['%s সেকেন্ড আগে', '%s এর সেকেন্ডের মধ্যে'], ['1 মিনিট আগে', '1 মিনিটে'], ['%s এর মিনিট আগে', '%s এর মিনিটের মধ্যে'], ['1 ঘন্টা আগে', '1 ঘন্টা'], ['%s ঘণ্টা আগে', '%s এর ঘন্টার মধ্যে'], ['1 দিন আগে', '1 দিনের মধ্যে'], ['%s এর দিন আগে', '%s এর দিন'], ['1 সপ্তাহ আগে', '1 সপ্তাহের মধ্যে'], ['%s এর সপ্তাহ আগে', '%s সপ্তাহের মধ্যে'], ['1 মাস আগে', '1 মাসে'], ['%s মাস আগে', '%s মাসে'], ['1 বছর আগে', '1 বছরের মধ্যে'], ['%s বছর আগে', '%s বছরে']][index];
}

module.exports = exports.default;