const Immutable = require('immutable');
const reviver = require('./reviver');

module.exports = (a, b) => {
  if(!Immutable.Iterable.isIterable(a) || !Immutable.Iterable.isIterable(b)){
    throw new Error('need two iterables!');
  }
  return Immutable.is(
    Immutable.fromJS(a.toJS(), reviver),
    Immutable.fromJS(b.toJS(), reviver),
  );
}