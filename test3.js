const Immutable = require('immutable');

// transform into a map with attributes being keys, and values being a list of animals from the original list
// who have the attribute as 'true'
// e.g. in the fromShape, we have cat and snake with 'long' == true
// so in the toShape, we want long: [ 'cat', 'snake' ]
const transform = (fromShape) => {
  const animals = fromShape.keySeq();
  const traits = fromShape.get(animals.get('0')).keySeq();

  return Immutable.Map().withMutations(mutable => {
    traits.forEach(trait => {
      mutable.set(trait, animals.filter(animal => fromShape.get(animal).get(trait)));
    })
  });
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