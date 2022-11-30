export const userArray = ['Dimych', 'Natasha', 'Valera', 'Katya']

export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersType = {
    '5656': {id: 5656, name: 'Dimych'},
    '656': {id: 656, name: 'Natasha'},
    '4798': {id: 4798, name: 'Valera'},
    '133': {id: 133, name: 'Katya'},
}
// users[1] // поиск проще и быстрее (когда достаем нужное свойство)

// let user = {id: 5789, name: 'Igor'}
// users[user.id] = user; // добавление нового свойства
// delete.users[user.id] // удаление
// users[user.id].name = 'Vitek' //добавлние нового пользователя




export const usersArray = [
    {id: 5656, name: 'Dimych'},
    {id: 656, name: 'Natasha'},
    {id: 4798, name: 'Valera'},
    {id: 133, name: 'Katya'},
]
// usersArray.findIndex()
// usersArray.find(u => u.id === 1) // поиск требует более сложного написания (когда достаем нужное свойство)

// usersArray.push(user)
// let usersCopy = [...usersArray.filter(), user] // два варианта добавления нового пользователя

//let users = usersArray.filter(a => u.id !== user.id) //удаление