const Fplaces = ['Dublin','Angel Falls','Edinburgh','Copenhagen','Brooklyn']
console.log(`Original Orderd\\n`,Fplaces);
console.log(`Here Aplhabetic sorted list\\n`,[...Fplaces].sort());
console.log(`Its still original orderd\\n`,Fplaces);
console.log(`Reverse order`,[...Fplaces].sort().reverse());
console.log(`original order`,Fplaces);
Fplaces.reverse();
console.log("Reversed order:",Fplaces);
Fplaces.reverse();
console.log("Back to original order:",Fplaces);
Fplaces.sort();
console.log("Sorted in alphabetical order",Fplaces);
Fplaces.sort().reverse();
console.log("Sorted in reverse alphabetical order:",Fplaces);