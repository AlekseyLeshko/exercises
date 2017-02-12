export default function([first, ...rest]) {
  const newStr = first.toUpperCase() + rest.join('').toLowerCase();

  return newStr;
}

