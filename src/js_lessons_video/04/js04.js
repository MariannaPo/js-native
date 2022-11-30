console.log('js04.js');
let dd = 'ff';


const todoListID_1 = 'vljdfk-5687k'
const todoListID_2 = 'oaclsd-3653u'

const todoList = [
    {
        id: todoListID_1, //была 1
        title: 'What to learn',
        filter: 'all',
        // tasks: [
        //     {id: 11, title: 'JS', isDone: false},
        //     {id: 12, title: 'HTML', isDone: false},
        //     {id: 13, title: 'CSS', isDone: false}
        // ]
    },
    {
        id: todoListID_2, // была 2
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: 21, title: 'Beer', isDone: false},
        //     {id: 22, title: 'Cola', isDone: false},
        //     {id: 23, title: 'Juice', isDone: false}
        // ]
    },
]

const tasks = {
    [todoListID_1]: [ //пишем измененный через  [], была 1
        {id: 11, title: 'JS', isDone: false},
        {id: 12, title: 'HTML', isDone: false},
        {id: 13, title: 'CSS', isDone: false}
    ],
    [todoListID_2]: [{id: 21, title: 'Beer', isDone: false},
        {id: 22, title: 'Cola', isDone: false},
        {id: 23, title: 'Juice', isDone: false}
    ]
}

//console.log(tasks[1].find(t => t.id === 11)) // id: 11, title: 'JS', isDone: false

//console.log([...tasks[1], {id:14, title: 'LESS', isDone: false}]) // add new 0:{id: 11, title: 'JS', isDone: false}, 1:{id: 12, title: 'HTML', isDone: false}, 2:{id: 13, title: 'CSS', isDone: false}, 3:{id: 14, title: 'LESS', isDone: false}

//console.log(tasks[1].map(t=> t.id === 12 ? {...t, isDone: true} : t)) //0:{id: 11, title: 'JS', isDone: false},1:{id: 12, title: 'HTML', isDone: true},2:{id: 13, title: 'CSS', isDone: false},

//console.log([...todoList, {id: 3, title: 'What to read', filter: 'all'}]) // 0:{id: 1, title: 'What to learn', filter: 'all'},1:{id: 2, title: 'What to buy', filter: 'all'},2:{id: 3, title: 'What to read', filter: 'all'},

//console.log({...tasks, 3:[]})// 1:(3) [{…}, {…}, {…}],2:(3) [{…}, {…}, {…}],3:[]


const secretKey = Math.floor(Math.random() * 100) // добавление рандомного ключа, будет меняться при обновлнеии ot 0-99

const userK = {
    ['name']: 'Bobby',
    'user age': 23,
    [secretKey]: 'password'
}
//console.log(userK)// 64: 'password', name: 'Bobby', user age: 23} , update and ====> 59: 'password', name: 'Bobby', user age: 23}


const user = {
    name: 'Anton',
    'user age': 23
}
//console.log(user["user age"])//через скобки


/////////////////reduce

const numbers = [10, 20, 30]
//console.log(numbers.reduce((acc, el)=>acc + el, 0))//60

Array.prototype.reducePlus = function (func, startValue) {
    let acc = startValue ? startValue : this[0];
    for (let i = startValue ? 0 : 1; i < this.length; i++) {
        acc = func(acc, this[i])
    }
    return acc;
}
//console.log(numbers.reducePlus((acc, el)=>acc + el, 0)) //60

let students = [
    {
        id: '1',
        name: 'Peter',
        age: 45,
        isMarried: false,
        scores: 78
    },
    {
        id: '2',
        name: 'Richi',
        age: 46,
        isMarried: true,
        scores: 48
    },
    {
        id: '3',
        name: 'James',
        age: 35,
        isMarried: false,
        scores: 135
    },
    {
        id: '4',
        name: 'Jim',
        age: 56,
        isMarried: true,
        scores: 52
    },
]

// const updatedStudent = {
//     3: {
//         id: '3',
//         name: 'James',
//         age: 35,
//         isMarried: false,
//         scores: 135
//     },
//     4: {
//         id: '4',
//         name: 'Jim',
//         age: 56,
//         isMarried: true,
//         scores: 52
//     },
// }

const updatedStudents = students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc;
}, {})
console.log(updatedStudents)// return object ==> 1:{name: 'Peter', age: 45, isMarried: false, scores: 78} бeз id



export default dd;
