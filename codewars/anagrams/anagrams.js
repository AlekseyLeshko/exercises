import isEqual from 'lodash/isEqual';

export default function(word, words) {
  const baseCache = word.split('').sort().toString();

  return words.filter(w => w.split('').sort().toString() === baseCache);
}
