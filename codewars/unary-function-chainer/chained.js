export default (functions) => {
  return (firstVal) => {
    return functions.reduce((val, fun) => {
      return fun(val);
    }, firstVal);
  };
}

