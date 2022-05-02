const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let firstLetters = members[i].replace(/\s/g, "").charAt(0);
      arr.push(firstLetters.toUpperCase());
    }
  }
  if (arr.length === 0) {
    return false;
  }
  arr = arr.sort().join("");
  return arr;
}

module.exports = {
  createDreamTeam,
};
