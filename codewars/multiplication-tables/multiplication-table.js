export default (row, col) => {
  const res = [];
  for (let i = 1; i <= row; i++) {
    const r = [];
    for (let j = 1; j <= col; j++) {
      r.push(j * i);
    }
    res.push(r);
  }

  return res;
};
