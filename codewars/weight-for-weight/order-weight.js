export default (string) =>
  string
    .split(' ')
    .map((num, index) => ({
      index, 
      val: num,
      weight: num
        .split('')
        .reduce((weight, char) =>
          weight += +char, 0),
    }))
    .sort((a ,b) =>
      a.weight === b.weight ?
        a.val > b.val :
        a.weight > b.weight)
    .map(item => item.val)
    .join(' ');
