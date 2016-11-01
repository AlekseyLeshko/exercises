export default function interval(startVal, endVal, step, logger) {
  step < 0 && startVal >= endVal && logger(startVal);
  step > 0 && startVal <= endVal && logger(startVal);

  step < 0 && startVal + step >= endVal
    && interval(startVal + step, endVal, step, logger);  
  step > 0 && startVal + step <= endVal
    && interval(startVal + step, endVal, step, logger); 
}
