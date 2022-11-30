import {userObj} from "./Associative_array.08";

type UsersType = {
    [key: string]: {id: number, name: string}
}

let  users: UsersType

beforeEach(() => {
    users = {
        '5656': {id: 5656, name: 'Dimych'},
        '656': {id: 656, name: 'Natasha'},
        '4798': {id: 4798, name: 'Valera'},
        '133': {id: 133, name: 'Katya'},
    }
})
test('should update corresponding user', () => {
    users['5656'].name = 'Dmitry';
    users['656'].name = 'Natali';
    users['4798'].name = 'Valeriy';
    users['133'].name = 'Ekaterina';

    expect(users[5656].name).toBe('Dmitry');
    expect(users[656].name).toBe('Natali');
    expect(users[4798].name).toBe('Valeriy');
    expect(users[133].name).toBe('Ekaterina');
})

test('should update corresponding', () => {
    users['5656'].name = 'Dmitry';
    users['656'].name = 'Natali';
    users['4798'].name = 'Valeriy';
    users['133'].name = 'Ekaterina';

    expect(users[5656]).toEqual({id: 5656, name: 'Dmitry'});
    expect(users[656]).toEqual({id: 656, name: 'Natali'});
    expect(users[4798]).toEqual({id: 4798, name: 'Valeriy'});
    expect(users[133]).toEqual({id: 133, name: 'Ekaterina'});
})



test('should select corresponding user from obj', () => {
    expect(userObj[0]).toBe('Dimych');
    expect(userObj[1]).toBe('Natasha');
    expect(userObj[2]).toBe('Valera');
    expect(userObj[3]).toBe('Katya');
})

test('should delete corresponding user', () => {
  delete users['133']

    expect(users['133']).toBeUndefined();
})
