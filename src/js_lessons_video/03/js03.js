console.log('js03.js');
let dd = 'ff';


// 1.  function declaration, function expression
// test();

// function test() { // function declaration, может вызываться до обьявления
//     console.log('hello')
// };

// const multiply = () => { // function expression, может вызываться только после объяыления
//     console.log('hi')
// }
// multiply();


// 2. callbacks - once again

// const funct1 = (number) => {
//   return number ** 2;
// };
//
// const funct2 = (number, callback) => {
//   return callback(number) + 5;
// };
//
// const funct3 = (number) => {
//   return number + number;
// }
//
// console.log(funct2(10, funct1));// return 105

// const props = {
//     getAge: (age) => console.log('Age: ', age),
//     sayHi: (name) => console.log("My name is: ", name),
// }
//
// const func = (props, age, name) => {
//     props.getAge(age);
//     props.sayHi(name);
// }
// func(props, 145, 'Duiu');


// const a = num => num ** 2;
// const b = num => num - 100;
// const c = num => num / 2;
// const e = num => num + 22;


// const callbacks = [a, b, c, e];
// const funcR = (callbacks, number) => {
//   return callbacks.reduce((acc, elem, i) => {
//     acc[i] = elem(number);
//     return acc;
//   }, {});
// }
// const result = funcR(callbacks, 15);
// console.log(result);//{0: 225, 1: -85, 2: 7.5, 3: 37}


// const funcR = (callbacks, number) => {
//   return callbacks.reduce((ac, elem)=> elem(ac), number);
// }
// const result = funcR(callbacks, 15);
// console.log(result);//84.5


// const funcF = (callbacks, number) => {
//     const result = [];
//     for (let i = 0; i < callbacks.length; i++) {
//         result.push(callbacks[i](number));
//     }
//     return result;
// }
// const result = funcF(callbacks, 15);
// console.log(result);//[225, -85, 7.5, 37]


// const funM = (callbacks, number) => {
//     return callbacks.map(callback => callback(number));
// }
// const result = funM(callbacks, 10);
// console.log(result); // [100, -90, 5, 32]


// const func = (callbacks, number) => {
//     callbacks.forEach(callback => console.log(callback(number)));
// }
// func(callbacks, 10); // 100, -90, 5, 32


// const func1 = (callback1, callback2, callback3) => {
//   return callback1(callback2, callback3)
// };
// const func2 = (callback1, callback2) => {
// return callback1(callback2)
// };
// const func3 = (callback) => {
// callback();
// };
// const func4 = () => {
//   console.log('i am last hero')
// };
// const funcCall = (callback1, callback2, callback3, callback4) => {
//   return callback1(callback2, callback3, callback4)
// };
// funcCall(func1, func2, func3, func4);


// 3. Destructuring of arrays, objects

// const props = {
//   name: 'Tim',
//   age: 32,
//   city: 'Oslo',
//   carLicense: true,
// }
// const City = (pr) => {
//   console.log('props in city: ', pr)
// }
// const App = ({name, age, ...rest}) => {
//   console.log('name: ', name);
//   console.log('age: ',age);
//   City(rest);
// }
// App(props); // name:  Tim  age:  32 props in city:  {city: 'Oslo', carLicense: true}


// 4. map, filter

//
// const COUNTRIES_TYPE = {
//     BY: 'Belarus',
//     RU: 'Russia',
//     UA: 'Ukraine',
//     PL: 'Poland',
//     DE: 'Germany',
//     LV: 'Latvia',
//     LT: 'Lithuania',
//     EE: 'Estonia'
// };
// const TRANSPORT_TYPE = {
//         BUS: 'bus',
//         MET: 'metro',
//         TRO: 'trolleybus',
//         FUN: 'funicular',
// }
//
// const cities = [
//     {
//         name: 'Minsk',
//         id: 0,
//         population: 215000,
//         country: COUNTRIES_TYPE.BY,
//         airoport: true,
//         marinePort: false,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO,
//     },
//     {
//         name: 'Brest',
//         id: 1,
//         population: 190000,
//         country: COUNTRIES_TYPE.BY,
//         airoport: false,
//         marinePort: false,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO
//     },
//     {
//         name: 'Gomel',
//         id: 2,
//         population: 500000,
//         country: COUNTRIES_TYPE.BY,
//         airoport: true,
//         marinePort: false,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO
//     },
//     {
//         name: 'Moscow',
//         id: 3,
//         population: 12700000,
//         country: COUNTRIES_TYPE.RU,
//         airoport: true,
//         marinePort: false,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO
//     },
//     {
//         name: 'SPb',
//         id: 4,
//         population: 4999000,
//         country: COUNTRIES_TYPE.RU,
//         airoport: true,
//         marinePort: false,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO
//     },
//     {
//         name: 'Sochi',
//         id: 5,
//         population: 364000,
//         country: COUNTRIES_TYPE.RU,
//         airoport: true,
//         marinePort: true,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.FUN
//     },
//     {
//         name: 'Vladivostok',
//         id: 6,
//         population: 600000,
//         country: COUNTRIES_TYPE.RU,
//         airoport: true,
//         marinePort: true,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO, TRANSPORT_TYPE.FUN
//     },
//     {
//         name: 'Kiev',
//         id: 7,
//         population: 2600000,
//         country: COUNTRIES_TYPE.UA,
//         airoport: true,
//         marinePort: false,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO
//     },
//     {
//         name: 'Lvov',
//         id: 8,
//         population: 850000,
//         country: COUNTRIES_TYPE.UA,
//         airoport: true,
//         marinePort: false,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO
//     },
//     {
//         name: 'Kharkov',
//         id: 9,
//         population: 625000,
//         country: COUNTRIES_TYPE.UA,
//         airoport: true,
//         marinePort: false,
//         publicTransport: TRANSPORT_TYPE.BUS, TRANSPORT_TYPE.MET, TRANSPORT_TYPE.TRO
//     },
// ]


// 5. Ternary operator;

// let terExample;
// terExample = false ? 10 : 15;
// console.log(terExample)

export default dd;