'use strict';

const greeting= require('./lib/greet.js');
const math= require('./lib/math.js');

console.log(greeting('Matthew'));
console.log(math.add(16,32));
console.log(math.subtract(32,16));
console.log(math.multiply(5,12));
console.log(math.divide(200,20));
console.log(math.divide(0,25));