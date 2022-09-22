import {ManType} from "./05_01";
import {createGreetingMessage} from "./05_01";

let people: Array<ManType> = []

beforeEach(()=>{
people = [
    {name: 'Alex Ivanov', age: 33},
    {name: 'Andrew Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18}
]
})

test('should be array of greeting message', () => {
    const messages = createGreetingMessage(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Alex. Welcome to IT-incubator');
    expect(messages[1]).toBe('Hello Andrew. Welcome to IT-incubator');
    expect(messages[2]).toBe('Hello Dmitry. Welcome to IT-incubator');
})