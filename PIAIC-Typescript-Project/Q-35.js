"use strict";
const animals = ['dog', 'cat', 'rabbit'];
const commonCharacteristic = 'would make a great pet';
for (let animal of animals) {
    console.log(animal);
}
console.log('');
for (let animal of animals) {
    console.log(`A ${animal} ${commonCharacteristic}.`);
}
console.log(`\nAny of these animals ${commonCharacteristic}!`);
