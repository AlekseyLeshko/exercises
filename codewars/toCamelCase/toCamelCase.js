export default function(string) {
  let newStr = '';

  string
    .split('')
    .reduce((withinWord, char, index) => {
      if (isSeparator(char)) {
        return false;
      }

      if (!withinWord) {
        newStr += char.toUpperCase();

        return true;
      }

      newStr += char;

      return true;
    }, false);

  newStr = newStr[0].toLowerCase() + newStr.slice(1, newStr.lenght);

  return newStr;
}

export function isSeparator(char) {
  const separators = '_';

  return separators.includes(char);
}

