const { NotImplementedError } = require("../extensions/index.js");

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let array = [...arr];

  array.forEach((el, index) => {
    switch (el) {
      case "--double-next":
        if (index === array.length - 1) {
          array.pop();
        } else {
          array[index] = array[index + 1];
        }
        break;
      case "--double-prev":
        if (index === 0) {
          array.shift();
        } else {
          array[index] = array[index - 1];
        }
        break;
      case "--discard-next":
        array[index] = undefined;
        array[index + 1] = undefined;
        break;
      case "--discard-prev":
        if (index === 0) {
          array.shift();
        } else {
          array.splice(index - 1, 2);
        }
        break;
      default:
        break;
    }
  });
  return array.filter((el) => typeof el !== "undefined");
}

console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);

module.exports = {
  transform,
};
