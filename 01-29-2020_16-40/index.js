const { range, filter, compose, modulo, sum } = require("ramda");

const findSum = (min, max) =>
  compose(
    sum,
    filter(n => modulo(n, 3) === 0 || modulo(n, 5) === 0)
  )(range(min, max));

console.log({ answer: findSum(1, 1000) });
