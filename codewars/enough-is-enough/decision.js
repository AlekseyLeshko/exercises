export const deleteNth = (list, number) => {
  return list.reduce((arr, item) => {
    return count(arr, item) < number ? arr.concat(item) : arr;
  }, []);
};

const count = (arr, item) => arr.filter(i => i === item).length;
