export default function(string) {
  const separators = /[_-\s]/ig;
  const arr = string.split(separators);

  const newStr = arr
    .filter((word) => word)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
    .join('');

  return newStr;
}

export function isSeparator(char) {
  const separators = '_- ';

  return separators.includes(char);
}

export function isFirstLetterOfWord(letter) {
  if (letter === letter.toUpperCase()) {
    return true;
  }

  return false;
}

