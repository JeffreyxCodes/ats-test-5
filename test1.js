const Immutable = require('immutable');

// map each object to the 'name' attribute
const transform = (fromShape) => {
  return fromShape.map(animal => animal.get('name'));
};

const fromShape = Immutable.fromJS([
  {
    id: 1,
    name: 'dog', 
  },
  {
    id: 2,
    name: 'cat', 
  },
  {
    id: 3,
    name: 'bird', 
  },
  {
    id: 4,
    name: 'snake', 
  },
]);

const toShape = Immutable.fromJS([
  'dog',
  'cat',
  'bird',
  'snake',
]);

module.exports = {
  transform,
  toShape,
  fromShape,
};