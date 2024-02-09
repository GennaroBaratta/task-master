// const generatePeople = () => {
//     const amNames = ["Alice", "Bob"];
//     const dmNames = ["David", "Eva", "Frank", "Grace"];
//     const pbNames = ["Harry", "Ivy", "Jack", "Kara", "Liam", "Mia"];

//     let people = [];

//     for (let am = 0; am < amNames.length; am++) {
//         // AM record
//         people.push({
//             struttura: {
//                 NOMINATIVO_AM: `${amNames[am]}`,
//                 NOMINATIVO_DM: `${amNames[am]}`,
//                 NOMINATIVO_PB: `${amNames[am]}`,
//                 CODICE_AM: `AM${(am + 1).toString().padStart(3, '0')}`,
//                 CODICE_DM: `AM${(am + 1).toString().padStart(3, '0')}`,
//                 CODICE_PB: `AM${(am + 1).toString().padStart(3, '0')}`,
//                 RUOLO: 'AM',
//             },
//             data: { val_a: 1 }
//         });

//         for (let dm = 0; dm < dmNames.length; dm++) {
//             // DM record
//             people.push({
//                 struttura: {
//                     NOMINATIVO_AM: `${amNames[am]}`,
//                     NOMINATIVO_DM: `${dmNames[dm]}`,
//                     NOMINATIVO_PB: `${dmNames[dm]}`,
//                     CODICE_AM: `AM${(am + 1).toString().padStart(3, '0')}`,
//                     CODICE_DM: `DM${(am + 1).toString().padStart(2, '0')}${dm + 1}`,
//                     CODICE_PB: `DM${(am + 1).toString().padStart(2, '0')}${dm + 1}`,
//                     RUOLO: 'DM',
//                 },
//                 data: { val_a: 1 }
//             });

//             for (let pb = 0; pb < pbNames.length; pb++) {
//                 // PB records
//                 people.push({
//                     struttura: {
//                         NOMINATIVO_AM: `${amNames[am]}`,
//                         NOMINATIVO_DM: `${dmNames[dm]}`,
//                         NOMINATIVO_PB: `${pbNames[pb]} ${am + 1}-${dm + 1}-${pb + 1}`,
//                         CODICE_AM: `AM${(am + 1).toString().padStart(3, '0')}`,
//                         CODICE_DM: `DM${(am + 1).toString().padStart(2, '0')}${dm + 1}`,
//                         CODICE_PB: `PB${(am + 1).toString().padStart(1, '0')}${dm + 1}${pb + 1}`,
//                         RUOLO: 'PB',
//                     },
//                     data: { val_a: 1 }
//                 });
//             }
//         }
//     }

//     return people;
// };

// const peopleDataset = generatePeople();
