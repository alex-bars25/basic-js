const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let test = [];
  let x = [...n.toString()];
  for (let i = 0; i < x.length; i++) {
    x.splice(i, 1);
    test.push(+x.join(''));
    x = [...n.toString()];
  }
  return Math.max.apply(null, test);
}

module.exports = {
  deleteDigit
};
