"use strict";
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`The Great ${magician}`);
    }
    return greatMagicians;
}
const magicians1 = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
const greatMagicians = makeGreat(magicians1);
showMagicians(magicians1);
showMagicians(greatMagicians);
