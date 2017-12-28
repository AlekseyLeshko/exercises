export default (functions) => {
  return (val) => {
    let newVal = functions[0](val);
    newVal = functions[1](newVal);

    return functions[2](newVal);
  };
}

