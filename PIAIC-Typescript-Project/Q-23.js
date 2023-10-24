"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let vehicle = "subaru";
// Test for vehicle equal to "subaru"
console.log(`Is vehicle equal to "subaru"? ${vehicle === "subaru"}`);
let fish = "Humpback Whale";
// Test for fish equal to "Humpback Whale"
console.log(`Is fish equal to "Humpback Whale"? ${fish === "Humpback Whale"}`);
let jude = "Total number is 10";
let total = 10;
const inumber = prompt("Predict any number between 1 to 10: ");
// Convert inumber to a number
const num = parseInt(inumber);
// Check if num is within the range of 1 to 10
if (num >= 1 && num <= 10) {
    const predict = (num / total) * 100;
    // Display the prediction
    console.log(`Your prediction: ${predict}%`);
    // Test if prediction is correct
    if (predict >= 1 && predict <= 100) {
        console.log("Your prediction is correct!");
    }
    else {
        console.log("Your prediction is incorrect.");
    }
}
else {
    console.log("Invalid number entered.");
}
