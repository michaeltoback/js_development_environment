// This file is not transpiled, so must use CommonJS and ES5

// register babel to transpile before our tests run
require('babel-register');

// disable webpack features that mocha does not understand
require.extensions['css'] = function(){};