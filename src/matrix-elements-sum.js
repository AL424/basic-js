const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  matrix.forEach((item, indexArr) => {
    if (indexArr === 0) {
      sum = item.reduce((n,k) => n + k)
    } else {
      item.forEach((num, indexNum) => {
        if (matrix[indexArr - 1][indexNum] !== 0) sum += num;
      })
    }
  })

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
