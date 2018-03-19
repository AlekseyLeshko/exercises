export default (numbers) => {
  const list = numbers.split(' ');
  const number = list.filter(num => num % 2 === 0).length === 1 ?
    list.find(num => num % 2 === 0) :
    list.find(num => num % 2 === 1);

  return list.indexOf(number) + 1;
};
