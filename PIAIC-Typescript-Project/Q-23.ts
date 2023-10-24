import promptSync from "prompt-sync";

const prompt = promptSync();
let vehicle: string = "subaru";

// Test for vehicle equal to "subaru"
console.log(`Is vehicle equal to "subaru"? ${vehicle === "subaru"}`);

let fish: string = "Humpback Whale";

// Test for fish equal to "Humpback Whale"
console.log(`Is fish equal to "Humpback Whale"? ${fish === "Humpback Whale"}`);

let jude: string = "Total number is 10";
let total: number = 10;
const inumber: any = prompt("Predict any number between 1 to 10: ");

// Convert inumber to a number
const num = parseInt(inumber);

// Check if num is within the range of 1 to 10
if (num >= 1 && num <= 10) {
  const predict: number = (num / total) * 100;

  // Display the prediction
  console.log(`Your prediction: ${predict}%`);

  // Test if prediction is correct
  if (predict >= 1 && predict <= 100) {
    console.log("Your prediction is correct!");
  } else {
    console.log("Your prediction is incorrect.");
  }
} else {
  console.log("Invalid number entered.");
}
