const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];

  for (let indexArr = 0; indexArr < matrix.length; indexArr++) {
    let arr = [];

    for (let indexNum = 0; indexNum < matrix[indexArr].length; indexNum++) {

      let bombs = 0;

      if (matrix[indexArr - 1] ? matrix[indexArr - 1][indexNum - 1] : false) bombs += 1;
      if (matrix[indexArr - 1] ? matrix[indexArr - 1][indexNum] : false) bombs += 1;
      if (matrix[indexArr - 1] ? matrix[indexArr - 1][indexNum + 1] : false) bombs += 1;
    
      if (matrix[indexArr][indexNum - 1]) bombs += 1;
      if (matrix[indexArr][indexNum + 1]) bombs += 1;

      if (matrix[indexArr + 1] ? matrix[indexArr + 1][indexNum - 1] : false) bombs += 1;
      if (matrix[indexArr + 1] ? matrix[indexArr + 1][indexNum] : false) bombs += 1;
      if (matrix[indexArr + 1] ? matrix[indexArr + 1][indexNum + 1] : false) bombs += 1;

      arr.push(bombs);
    }

    result.push(arr);
  }

  return result
}

module.exports = {
  minesweeper
};
