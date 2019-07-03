const Immutable = require('immutable');

// transform into list of attributes, with counts of values encountered.
// e.g. there are 3 elements with attribute 'cute' == 'true', and 1 with 'cute' == 'false'
// so in the result object we want cute: { true: 3, false: 1 }
// similarly, there are 2 elements with 'legs' == 4 (cat and dog), 1 with 'legs' == 2 (bird) and 1 with 'legs' == 0 (snake). 
// so we want legs: { 0: 1, 2: 1, 4: 2}
const transform = (fromShape) => {
  return fromShape;
};

const fromShape = Immutable.fromJS({
  dog: {
    cute: true,
    long: false,
    smart: false,
    heads: 1,
    legs: 4,
    wings: 0,
  },
  cat: {
    cute: true,
    long: true,
    smart: true,
    heads: 1,
    legs: 4,
    wings: 0,
  },
  bird: {
    cute: true,
    long: false,
    smart: false,
    heads: 1,
    legs: 2,
    wings: 2,
  },
  snake: {
    cute: false,
    long: true,
    smart: false,
    heads: 1,
    legs: 0,
    wings: 0,
  },
});

const toShape = Immutable.fromJS({
  cute: {
    true: 3,
    false: 1,
  },
  long: {
    true: 2,
    false: 2,
  },
  smart: {
    true: 1,
    false: 3,
  },
  heads: {
    1: 4,
  },
  legs: {
    0: 1,
    2: 1,
    4: 2,
  },
  wings: {
    0: 3,
    2: 1,
  },
});

module.exports = {
  transform,
  toShape,
  fromShape,
};