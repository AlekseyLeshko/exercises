import isEqual from 'lodash/isEqual';

export default function(word, words) {
  const baseCache = getCache(word);

  return words.filter(w => isEqual(getCache(w), baseCache));

}

export const getCache = (str) => {
  const cache = {};

  str
    .split('')
    .forEach(c => {
      cache[c] = cache[c] ? cache[c] + 1 : 1;
    });

  return cache;
};
