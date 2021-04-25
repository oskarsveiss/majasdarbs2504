
import {fill, reverse, compact, arrayFromPairs } from "./src/Helpers.js";

const filled = fill(5, "d");
console.log("fill() -");
console.log(filled);


const reversedArray = reverse([1,2,3,4,5,6,7,8,9,10]);
console.log("reverse() - " + reversedArray);


const compactArray = compact([1, null, "". false, 4, undefined, 2]);
console.log("compact() - " + compactArray);


const fromPairs = arrayFromPairs([['a', 1], ['b', 2]]);
console.log("arrayFromPairs() - ");
console.log(fromPairs);