export default function(string) {
  const separators = /[_-\s]/ig;

  const newStr = string
    .split(separators)
    .filter((word) => word)
    .map((word, index) => {
      word = word.toLowerCase();

      return index? word.charAt(0).toUpperCase() + word.substring(1): word;
    })
    .join('');

  return newStr;
}

