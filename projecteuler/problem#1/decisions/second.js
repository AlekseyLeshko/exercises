export default (maxVal) => {
  let sum = 0;
  
  var nextStep = function(curretnVal) {
    if (curretnVal === maxVal) {
      return sum;
    }
    
    if (curretnVal % 3 === 0 || curretnVal % 5 === 0) {
      sum += curretnVal;
    }

    return nextStep(curretnVal + 1);
  }

  return nextStep(3);
}
