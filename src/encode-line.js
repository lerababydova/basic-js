const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let char = str[0];
  let count = 0;
  const arr = [];

  for (let i = 0; i <= str.length; i++) {
    const letter = str[i];

    if (char !== letter) {
      const string = `${count === 1 ? "" : count}${char}`;
      arr.push(string);
      count = 1;
      char = letter;
    } else {
      count++;
    }
  }
  return arr.join("");
}

module.exports = {
  encodeLine,
};
