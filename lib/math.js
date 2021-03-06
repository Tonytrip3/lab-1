'use strict';

let mathematics= module.exports= {};

mathematics.add=(a, b)=>{
  if(typeof a !== "number" || typeof b !== "number"){
    return null;
  }
  return a+b;
};

mathematics.subtract=(c, d)=>{
  if(typeof c !== "number" || typeof d !== "number"){
    return null;
  }
  return c-d;
};

mathematics.multiply=(e, f)=>{
  if(typeof e !== "number" || typeof f !== "number"){
    return null;
  }
  return e*f;
};

mathematics.divide=(g, h)=>{
  if(typeof g !== "number" || typeof h !== "number"){
    if(g !== 0 || h !== 0){
      return g/h;
    }else{
      return 'Error: You have attempted to divide by zero. This is not possible. Please enter a number greater than 0';
    }
  }else{
    return null;
  }
};