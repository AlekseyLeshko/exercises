export const deleteNth = (list, number) => {
  const dictionary = {};
  const result = [];

  list.forEach(item => {
    if (dictionary[item] === undefined) {
      dictionary[item] = 0;
    }

    if (dictionary[item] + 1 > number) {
      return;
    } else {
      dictionary[item]++;
      result.push(item);
    }
  });

  return result;
};
