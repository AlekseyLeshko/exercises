export const deleteNth = (list, number) => {
  const dictionary = {};

  return list.filter(item => {
    if (dictionary[item] === undefined) {
      dictionary[item] = 0;
    }

    return dictionary[item]++ < number;
  });
};
