// Think of something you could store in a array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items. 
import promptSync from 'prompt-sync';

const veto = ['United States', 'France', 'China', 'United Kingdom', 'Russia'];

const prompt = promptSync();
let a: string = '';

function cnames() {
  for (let i = 1; i <= 5; i++) {
    const vcountries: string = prompt("What are the names of the countries with veto power? Please capitalize the first letter of each country name. ");
    console.log(vcountries);
    a += vcountries + ',';
  }
}

cnames();
if (veto.toString() === a) {
  console.log(`Nice you have know all the veto power coutries that is, ${a}`);
}
else
{
    console.log(`You play a good try actuall this is ${a}`);
}