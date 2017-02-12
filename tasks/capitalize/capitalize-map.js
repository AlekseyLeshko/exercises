export default function(string = '') {
  const newStr = [...string].map((char, index) => {
    return index ? char.toLowerCase() : char.toUpperCase();
  }).join('');

  return newStr;
}

