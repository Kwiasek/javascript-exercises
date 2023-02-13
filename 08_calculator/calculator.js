const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let result = 0;
	for (let elem in a) {
    result += a[elem];
  }
  return result;
};

const multiply = function(a) {
  result = 1;
  for (let elem in a) {
    result *= a[elem];
  }
  return result;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a == 0) return 1;
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
