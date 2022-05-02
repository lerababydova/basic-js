const { NotImplementedError } = require("../extensions/index.js");

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
  const arr = n.toString().split("");
  const operationsCount = arr.length;
  let numbers = [];

  for (let i = 0; i < operationsCount; i++) {
    const newArr = arr.filter((_, index) => {
      return i !== index;
    });

    numbers.push(Number(newArr.join("")));
  }

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit,
};
