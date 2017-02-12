import capitalize from '../../tasks/capitalize/capitalize-simple-decision';

export default function(string) {
  const separators = /[_-\s]/ig;

  const newStr = string
    .split(separators)
    .filter((word) => word)
    .map((word, index) => index? capitalize(word): word.toLowerCase())
    .join('');

  return newStr;
}

