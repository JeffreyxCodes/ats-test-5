const Immutable = require('immutable');

// transform into a map with attributes being keys, and values being a list of animals from the original list
// who have the attribute as 'true'
// e.g. in the fromShape, we have cat and snake with 'long' == true
// so in the toShape, we want long: [ 'cat', 'snake' ]
const transform = (fromShape) => {
  return fromShape;
};

const fromShape = Immutable.fromJS({
  dog: {
    cute: true,
    long: false,
    smart: false,
  },
  cat: {
    cute: true,
    long: true,
    smart: true,
  },
  bird: {
    cute: true,
    long: false,
    smart: false,
  },
  snake: {
    cute: false,
    long: true,
    smart: false,
  },
});

const toShape = Immutable.fromJS({
  cute: [
    'dog',
    'cat',
    'bird',
  ],
  long: [
    'cat',
    'snake',
  ],
  smart: [
    'cat',
  ],
});

module.exports = {
  transform,
  toShape,
  fromShape,
};