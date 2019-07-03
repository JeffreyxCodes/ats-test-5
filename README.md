## test-5 - transforms and functional programming

In each of `testN.js`:

Modify the 'transform' function in order to change the 'fromShape' to the 'toShape'. Do it functionally without any mutations. If you're not sure what mutations are, just do it without any immutablejs constructors (e.g. Map(), List(), etc..., except as base cases) or without converting to/from vanilla js objects and arrays (e.g. toJS(), fromJS()).

You ONLY need to modify the transform function, and then run `node index.js` (or `yarn start`, which runs the command for you).

commands:

`npm install` -> install dependencies

`node index.js` -> does the comparison, will print "SUCCESS!" if the object is the same (array / List order doesn't matter)
