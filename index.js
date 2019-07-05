const Immutable = require('immutable');
const immutableEqual = require('./immutableEqual.js');
const test1 = require('./test1.js');
const test2 = require('./test2.js');
const test3 = require('./test3.js');
const test4 = require('./test4.js');
const test5 = require('./test5.js');
const test6 = require('./test6.js');
const test7 = require('./test7.js');
const test8 = require('./test8.js');

const runTest = (test, label) => {
  if(immutableEqual(test.transform(test.fromShape), test.toShape)){
    console.log(`${label}: SUCCESS!`);
  } else {
    console.error(`${label}: Objects are not equal`);
  }
}

runTest(test1, 'test1');
runTest(test2, 'test2');
runTest(test3, 'test3');
runTest(test4, 'test4');
runTest(test5, 'test5');
runTest(test6, 'test6');
runTest(test7, 'test7');
runTest(test8, 'test8');