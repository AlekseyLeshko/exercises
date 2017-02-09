export default function(string) {
  let newStr = '';

  string
    .split('')
    .reduce((inWord, char) => {
      if (isSeparator(char)) {
        return true;
      }

      if (inWord) {
        newStr += char.toUpperCase();

        return false;
      }

      newStr += char;

      return false;
    }, false);

  return newStr;
}

export function isSeparator(char) {
  const separators = '_';

  return separators.includes(char);
}

