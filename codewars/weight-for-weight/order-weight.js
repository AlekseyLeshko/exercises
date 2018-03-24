export default (string) =>
  string
    .split(' ')
    .map(num => ({
      val: num,
      weight: num
        .split('')
        .reduce((weight, char) =>
          weight += +char, 0),
    }))
    .sort((a ,b) => {
      const res = a.weight === b.weight ?
        a.val > b.val :
        a.weight - b.weight
      return res;
    })
    .map(item => item.val)
    .join(' ');
