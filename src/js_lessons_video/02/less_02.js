const example = [
    {name:'Ivan'},
    {name:'Valera'},
    {name: 'Angela'}
];
const copy = example.map((elem) => {
    return {...elem};
});
// console.log(copy);

const copy2 = [...example];
// console.log(copy2);

const example3 = [];
for(let i = 0; i < example.length; i++) {
    example3.push(example[i]);
};
// console.log(example3);

const copyHi = example.map((elem) => 'Hello ' + elem.name + '!');
// console.log(copyHi);

