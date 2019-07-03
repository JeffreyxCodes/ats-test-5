const Immutable = require('immutable');

module.exports = (key, value) => {
  return Immutable.Iterable.isKeyed(value) ? value.toMap() : value.toSet();
}