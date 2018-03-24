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
    .sort((a ,b) =>
      a.weight === b.weight ?
        a.val > b.val ?
          1 :
          -1 :
        a.weight - b.weight)
    .map(item => item.val)
    .join(' ');
