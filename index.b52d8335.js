function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o),o.register("gUcIm",(function(r,t){e(r.exports,"fetchBreeds",(function(){return i})),e(r.exports,"fetchCatByBreed",(function(){return f}));const n="live_SlFEe9IWVQAp6IfJYFqZgHppglaF6bTCWrSAyJ1wKbYAvKsmxZ3xz1uBC0sD00g6",o="https://api.thecatapi.com/v1/";function i(){return fetch(`${o}breeds?api_key=${n}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function f(e){return fetch(`${o}images/search?breed_ids=${e}&api_key=${n}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}})),o("gUcIm");
//# sourceMappingURL=index.b52d8335.js.map