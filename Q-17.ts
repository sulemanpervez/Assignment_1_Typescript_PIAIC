let Fguest = ['Arif Alvi','Zia','Junaid','Danayal','Jahazaib'];
console.log(`Hi,`,Fguest[2],`I'm sorry Junaid Table is short we wil reach you next time `);
Fguest.splice(2,1);
console.log(`Hi,`,Fguest[3],`I'm sorry Jahazaib Table is short we wil reach you next time `);
Fguest.pop();
console.log(`Hi,`,Fguest[2],`I'm sorry Danayal Table is short we wil reach you next time `);
Fguest.pop();
console.log(`Taday we invited `,Fguest,`Because table is available for two people`);
Fguest.pop();
Fguest.pop();
console.log(`Empty List`,Fguest);