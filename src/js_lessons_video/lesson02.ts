type UserType = {
    name: string,
    age: number,
    city: string
};

// type UserType = Array<UserType>;

const user: UserType = {
    name: 'Petro',
    age: 55,
    city: 'Bychary'
};

type TadamPropsType = {
    user: UserType,
    sayHello: (name: string) => void,
}

const tadamFun = (props: TadamPropsType) => {
    return props.user;
}
// console.log(tadamFun);

type autoType = {
    name: string,
    age: number,
    power: number,
    byKn: number,
    range: number
};

type PropsType = {
    user: UserType,
    auto: autoType,
    id: string,
    sayHello: (user: UserType) => void,
    getName: (user: UserType) => string,
    getAge: (user: UserType) => number,
    getAverage: (byKn: number, range: number) => number,
}


const obj: PropsType = {
    user: {
        name: 'Vlad',
        age: 27,
        city: 'Sevastopol'
    },
    auto: {
        name: 'Outlander',
        age: 12,
        power: 20,
        byKn: 190000,
        range: 140
    },
    id: 'rt5656j7',
    sayHello: (user) => console.log(user.name),
    getAge: (user) => user.age,
    getName: (user) => user.name,
    getAverage: (byKn, range) => range / byKn,
};

function component(props: PropsType){
    console.log('user: ', props.user);
}

function exampleFunction(num: number){
    switch (num){
        case 20: {
            console.log('case1');
            break;
        }
        case 30: {
            console.log('case2');
            break;
        }
        case 40: {
            console.log('case3');
            break;
        }
        default: {
            console.log('so bad')
        }s
    }
    console.log('end of exampleFunction')
    return;
}
// exampleFunction(45);

function exampleFunctionAge(num: number){
    let age = 100;
    switch (num){
        case 20: {
            age = num + 10;
            break;
        }
        case 30: {
            age = num + 20;
            break;
        }
        case 40: {
            age = num + 30;
            break;
        }
        default: {
            age = num;
        }
    }
    return age * 2;
}
// exampleFunctionAge(45);