const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indexes = [];
  arr.forEach((e, index) => {
    if (e === -1) {
      indexes.push(index);
    }
  });
  let sorted = arr
    .filter((el) => !!~el)
    .sort((a, b) => {
      return a - b;
    });

  indexes.forEach((index) => {
    sorted.splice(index, 0, -1);
  });
  return sorted;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
module.exports = {
  sortByHeight,
};
