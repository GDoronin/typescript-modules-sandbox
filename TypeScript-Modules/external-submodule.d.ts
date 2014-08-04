/// <reference path="external-module.d.ts" />

// 'declare' modifier required for top level element.
//import external = require('external'); // !! WRONG !!

declare module 'external.sub' {
    import external = require('external');
    export function sub(some: external.SomeExternal);
}
