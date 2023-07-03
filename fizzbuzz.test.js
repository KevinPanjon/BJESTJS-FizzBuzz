const { FizzBuzz } = require('./FizzBuzz');

describe ("si el numero es multiplo de 3 y 5", () =>{

test("saldra fizz", () =>{
  expect(createFizzBuzz(9)).toBe('Fizz');
});

test("saldra buzz", () =>{
  expect(createFizzBuzz(10)).toBe('Buzz');
});

test("saldra fizzbuzz", () => {
  expect(createFizzBuzz(15)).toBe('FizzBuzz');
});
});

test("debe ser un numero entero", () =>{
  expect(createFizzBuzz(22.5)).toBe("No es un numero entero");
})