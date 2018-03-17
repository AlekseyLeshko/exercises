export const deleteNth = (list, number) => {
  const cache = {};

  return list.filter(item => {
    cache[item] = cache[item] ? cache[item] + 1 : 1;
    return cache[item] <= number;
  });
};
