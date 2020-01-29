const { add, compose, filter, modulo, sum } = require("ramda");

const recursiveFib = (arr, max) => {
  const x = arr[arr.length - 1];
  const y = arr[arr.length - 2];
  const newValue = add(x, y);
  const newArr = [...arr, newValue];
  if (newValue < max) {
    return recursiveFib(newArr, max);
  } else {
    return arr;
  }
};

const numbers = recursiveFib([1, 2], 4000000);

const answer = compose(
  sum,
  filter(n => modulo(n, 2) === 0)
)(numbers);

console.log({ answer });
