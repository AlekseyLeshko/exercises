export const deleteNth = (list, number) => {
  const frequencyDictionary = {};

  return list.filter(item => {
    if (frequencyDictionary[item] === undefined) {
      frequencyDictionary[item] = 0;
    }

    return frequencyDictionary[item]++ < number;
  });
};
