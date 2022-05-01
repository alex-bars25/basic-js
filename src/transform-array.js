const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']; 
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (controlSequences.includes(arr[i])) {
      if (arr[i] === controlSequences[0]) {
        result.push(undefined);
        i++;
      }
      if (arr[i] === controlSequences[1]) {
        result.pop();
      }
      if (arr[i] === controlSequences[2]) {
        result.push(arr[i + 1]);
      }
      if (arr[i] === controlSequences[3]) {
        result.push(result[result.length - 1]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result.filter(item => item !== undefined);
}

module.exports = {
  transform
};
