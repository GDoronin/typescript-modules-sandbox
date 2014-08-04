///// <reference path="external-module.d.ts" />

// Unable to resolve external module "external-module".
// Because definitions are referenced not by filename but module declaration inside file.
//import externalModule = require('external-module'); // !! WRONG !!
import external = require('external');

var some: external.SomeExternal = {
    field1: 'ex1',
    field2: 'ex2'
};
