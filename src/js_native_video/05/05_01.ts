export type ManType = {
    name: string
    age: number
}


const people: Array<ManType> = [
    {name: 'Alex Ivanov', age: 33},
    {name: 'Andrew Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]

const marryTransformator = (man: ManType) => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split('')[0],
    lastName: man.name.split('')[1]
})


const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Alex', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry', lastName: 'Sidorov'
    },
]
let d1 = marryTransformator(people[0])

const dev2 = people.map(marryTransformator);
const dev3 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split('')[0],
    lastName: man.name.split('')[1]
}))

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-incubator`);

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-incubator`);
}