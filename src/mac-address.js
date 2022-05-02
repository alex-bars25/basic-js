const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let test = n.split('-');
  test = test.map(item => item.match(/[A-F, 0-9]/g).length);
  if (test.every(item => item === 2) && test.length === 6)
    return true;
  else
    return false;
}

console.log(isMAC48Address('00-1B-63-84-45-E6'));

module.exports = {
  isMAC48Address
};
