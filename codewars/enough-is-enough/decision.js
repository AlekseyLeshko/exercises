export const deleteNth = (list, number) => {
  const dic = {};

  return list.filter(item => {
    if (!dic[item]) {
      dic[item] = 0;
    }

    return dic[item]++ < number;
  });
};
