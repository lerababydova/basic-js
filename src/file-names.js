const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fileNames = names.reduce((accum, name, index) => {
    const rawNames = [...names];
    rawNames.length = index;
    const rawFiles = rawNames.filter((n) => n === name);

    const sameFiles = accum.filter(
      (n) => n === name || n === `${name}(${rawFiles.length - 1})`
    );
    const count = sameFiles.length;
    const newName = `${name}${count ? `(${count})` : ""}`;

    return [...accum, newName];
  }, []);

  return fileNames;
}

module.exports = {
  renameFiles,
};
