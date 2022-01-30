let utils = {};

utils.removeDuplicates = (arr, keyName) => {
  let newArr = arr.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t[keyName] === value[keyName])
  );

  return newArr;
};

module.exports = utils;
