"use strict";
function showMagician(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreats(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}
const magicians1 = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
const greatMagician = makeGreats(magicians1);
showMagician(magicians1);
showMagician(greatMagicians);
