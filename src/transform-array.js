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
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  
  const func = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']

  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    //добавляю в массив обычный элемент
    if (func.indexOf(item) === -1) resultArr.push(item);

    else if (func.indexOf(item) === 0) {
      //добавляю в массив undefined и пропускаю индекс следующего элемента
      resultArr.push(undefined); 
      i++;
    } else if (func.indexOf(item) === 1) {
      //удаляю предыдущий элемент, если он удален до этого, из массива результов удалится undefined
      resultArr.pop();
    }
    else if (func.indexOf(item) === 2) {
      resultArr.push(arr[i+1], arr[i+1]);
      i++;
    } else if (func.indexOf(item) === 3) {
      //дублирую последний элемент, есди он был удален, дублируется undefined
      resultArr.push(resultArr[resultArr.length - 1]); 
    }
  }

  return resultArr.filter(item => item !== undefined);
}

module.exports = {
  transform
};
