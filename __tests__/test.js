'use strict';

const greeting= require('./../lib/greet');
const mathematics= require('./../lib/math');
const faker= require('faker');

describe('#greeting.test.js',()=>{
  const testGreet= greeting.sayHi('Vinicio');
  const numGreet= greeting.sayHi(faker.random.number());
  const nullGreet= greeting.sayHi(false);
  test('test for greeting.sayHi, should return \'Hello World!\'', () => {
    expect(testGreet).toEqual('Hello World!');
  });
  test('make sure that sayHi parameter can\'t take in numbers', () => {
    expect(numGreet).toEqual(null);
  });
  test('make sure that sayHi parameter can\'t take in null', () => {
    expect(nullGreet).toEqual(null);
  });
});

describe('#mathematics.test.js', () => {
  // test for add
  test('Addition test',()=>{
    expect(mathematics.add(16, 32)).toEqual(48);
  });
  // test for subtract
  test('Subtraction test',()=>{
    expect(mathematics.subtract(32, 16)).toEqual(16);
  });
  // test for multiply
  test('Multiplication test',()=>{
    expect(mathematics.multiply(8, 20)).toEqual(160);
  });
  // test for divide
  test('Division test',()=>{
    expect(mathematics.divide(200, 20)).toEqual(10);
  });
  // divide by zero test
  test('Divide by zero test',()=>{
    expect(mathematics.divide(0, 25)).toEqual('Error: You have attempted to divide by zero. This is not possible. Please enter a number greater than 0');
  })
});