"use strict";
const guest = ['Arif Alvi', 'Zia', 'Thomas', 'Atif Aslm', 'Danayal', 'Jahzaib'];
for (let i = 0; i <= 5; i++) {
    console.log(`Hi,`, guest[i], `I inviting you to dinner tonight at PC hotel`);
}
console.log("\nToday we inviting total six peopele");
console.log(`\nI'm`, guest[3], `I didn't make it because i have concert\n`);
const Favoriteplaces = ['Dublin', 'Angel Falls', 'Edinburgh', 'Copenhagen', 'Brooklyn\n'];
console.log("Here a dinner schedule follow this we are inviting so all the cost taken by us");
console.log("22-3-2023 our dinner in " + Favoriteplaces[0] + ", so enjoy your dinner in Ireland");
console.log("25-3-2023 our dinner in " + Favoriteplaces[1] + ", so enjoy your dinner in Venezuela");
console.log("28-3-2023 our dinner in " + Favoriteplaces[2] + ", so enjoy your dinner in Scotland");
console.log("4-4-2023 our dinner in " + Favoriteplaces[3] + ", so enjoy your dinner in Denmark");
console.log("6-4-2023 our dinner in " + Favoriteplaces[4] + ", so enjoy your dinner in Newyork");
console.log(`\n\nwe have short of space that's why\n\n`); // shrinking list
console.log(`Hi,`, guest[2], `I'm sorry Thomas Table is short we wil reach you next time `);
guest.splice(2, 1);
console.log(`Hi,`, guest[4], `I'm sorry Jahazaib Table is short we wil reach you next time `);
guest.pop();
console.log(`Hi,`, guest[3], `I'm sorry Danayal Table is short we wil reach you next time `);
guest.pop();
console.log(`Hi,`, guest[2], `I'm sorry Atif Aslm Table is short we wil reach you next time `);
guest.pop();
console.log(`\nTaday we invited `, guest, `Because table is available for two people`);
guest.pop();
guest.pop();
console.log(`\nEmpty List`, guest);
