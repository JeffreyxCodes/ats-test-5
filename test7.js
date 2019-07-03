const Immutable = require('immutable');

// similar to test6, but group the elements by what they would be mapped to in fizzbuzz 
const transform = (fromShape) => {
  return fromShape;
};

const fromShape = Immutable.fromJS([
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
]);

const toShape = Immutable.fromJS({
  fizz: [
    12,
    18,
  ],
  buzz: [
    10,
    20,
  ],
  fizzbuzz: [
    15,
  ],
  other: [
    11,
    13,
    14,
    16,
    17,
    19,
  ],
});

module.exports = {
  transform,
  toShape,
  fromShape,
};