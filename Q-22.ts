/* Intentional Error: If you haven't received of an array index error in one of your program yet, try to make one happen.
Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.*/
const myArray: number[] = [1, 2, 3];

try {
  //which will throw an error
  console.log(myArray[5]);
} catch (e:any) {
  // Handle the error by displaying an error message
  console.error(`Error: ${e.message}`);
}

// Program complete.
console.log('Program complete.');
