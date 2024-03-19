const { kmtom, mtokm, cmstom, mtocms } = require('./calci.js');


let kilometers = 5;
let meters = kmtom(kilometers);
console.log(kilometers + " kilometers is equal to " + meters + " meters.");

let meters2 = 2500;
let kilometers2 = mtokm(meters2);
console.log(meters2 + " meters is equal to " + kilometers2 + " kilometers.");

let centimeters = 150;
let meters3 = cmstom(centimeters);
console.log(centimeters + " centimeters is equal to " + meters3 + " meters.");

let meters4 = 2.5;
let centimeters2 = mtocms(meters4);
console.log(meters4 + " meters is equal to " + centimeters2 + " centimeters.");