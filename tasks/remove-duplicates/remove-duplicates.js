export default function removeDuplicates(str) {
  let newStr = '';

  str.split('').reduce((prev, elt, index, array) => {
    if (array[index + 1] === elt) {
      return;
    }

    newStr += elt;

  }, false);

  return newStr;
};

