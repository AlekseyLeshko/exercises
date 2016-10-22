function isChar(str) {
  return str.length === 1 && str.match(/[a-z]/i) !== null;
}

function isSmallWord(startIndex, endIndex) {
  return endIndex - startIndex < 4;
}

function getAbbreviate(startIndex, endIndex, arr) {
  let res = arr[startIndex];
  if (isSmallWord(startIndex, endIndex)) {
    for (let i = startIndex + 1; i <= endIndex; i++) {
      res += arr[i]; 
    }
  } else {
    res += endIndex - startIndex - 1;
    res += arr[endIndex];
  }

  return res;
}

let abbreviate = function(str) {
  let startIndex = 0;
  let endIndex = 0;
  let list = [];
  const res = str
    .split('')
    .reduce(function(inWord, curr, index, arr) {
      if (inWord) {
        if (!isChar(curr)) {
          endIndex = index - 1;
          list.push(getAbbreviate(startIndex, endIndex, arr));
          list.push(curr);
          return false;
        } else {
          return true;
        }
      }

      if (!inWord) {
        if (!isChar(curr)) {
          list.push(curr);
          return false;
        } else {
          startIndex = index;
          return true;
        }
      }

      return false;
    }, false);

  return list.join('');
}

module.exports = abbreviate;
