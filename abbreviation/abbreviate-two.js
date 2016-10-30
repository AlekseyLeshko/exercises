function getAbbreviate(str) {
  let res = str[0];
  res += str.length - 2;
  res += str[str.length - 1];

  return res;
}

function isSmallWord(str) {
  return str.length <= 3;
}

let abbreviate = function(str) {
  let arr = str.split(/[\s-!,]+/);
  arr.map(function(curr, index, add) {
    if (isSmallWord(curr) || !str.includes(curr)) {
      return;
    }

    const abbreviateStr = getAbbreviate(curr);
    str = str.replace(curr, abbreviateStr);
  });

  return str;
}

export default abbreviate;
