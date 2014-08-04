/// <reference path="internal-module.d.ts" />

//import internalModule = require('internal-module');
//import internal = require('internal');

var some: internal.SomeInternal = {
    field1: '1',
    field2: '2'
};

console.log(some);
