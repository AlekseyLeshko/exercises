export default (numbers) => {
  const list = numbers.split(' ');
  let number;
  if (list.filter(num => num % 2 === 0).length === 1) {
    number = list.find(num => num % 2 === 0);
  }
  if (list.filter(num => num % 2 === 1).length === 1) {
    number = list.find(num => num % 2 === 1);
  }

  return list.indexOf(number) + 1;
};
