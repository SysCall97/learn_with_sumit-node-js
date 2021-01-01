const fs = require('fs');

const fileName = 'createdFromFs.js';

const content = `a = 5;
b = 6;
console.log(a+b);`;

const content2 = `
c = 7;
console.log(a+b*c);`

// fs.writeFileSync(fileName, content);
// fs.appendFileSync(fileName, content2);
// console.log(fs.readFileSync(fileName).toString());


// fs.writeFile(fileName, content, () => {
//     fs.appendFile(fileName, content2, ()=>{
//         fs.readFile(fileName, (err, data) => {
//             console.log(data.toString());
//         });
//     });
// });


// fs.unlink(fileName, (error, success) => {
//     if(error === null) {
//         console.log("Deleted successfully")
//     }
// });