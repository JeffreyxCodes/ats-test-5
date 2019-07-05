const Immutable = require('immutable');

// similar to test6, but group the elements by what they would be mapped to in fizzbuzz 
const transform = (fromShape) => {
  return Immutable.Map().withMutations(mutable => {
    mutable.set('fizz', Immutable.List())
      .set('buzz', Immutable.List())
      .set('fizzbuzz', Immutable.List())
      .set('other', Immutable.List());
    fromShape.forEach(num => {
      if (num % 15 === 0) {
        mutable.setIn(['fizzbuzz', mutable.get('fizzbuzz').size], num);
      } else if (num % 3 === 0) {
        mutable.setIn(['fizz', mutable.get('fizz').size], num);
      } else if (num % 5 === 0) {
        mutable.setIn(['buzz', mutable.get('buzz').size], num);
      } else {
        mutable.setIn(['other', mutable.get('other').size], num);
      }
    });
  });
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