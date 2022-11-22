 type GirlType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string,
        }
    }
}

let props: GirlType;
beforeEach(() => {
    props = {
        name: 'Marry',
        age: 23,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Pleseckaya'
            }
        }
    }
})


test('', () => {

    const a = props.age;
    const l = props.lessons;


    // const age = props.age;
    // const lessons = props.lessons;

    const {age, lessons} = props;

    const {title} = props.address.street;

    expect(a).toBe(23);
    expect(l.length).toBe(2);


    // expect(age).toBe(23);
    // expect(lessons.length).toBe(2);

    expect(age).toBe(23);
    expect(lessons.length).toBe(2);

    expect(title).toBe('Pleseckaya')
})

 test('dd', () => {
     const l1 = props.lessons[0];
     const l2 = props.lessons[1];


     const [ls1, ls2] = props.lessons;

     const [ , lsn2, ...restlessons] = props.lessons;

     expect(l1.title).toBe('1');
     expect(l2.title).toBe('2');

     // expect(ls1.title).toBe('1');
     // expect(ls2.title).toBe('2');

     expect(lsn2.title).toBe('2');

     expect(restlessons[0].title).toBe('3');
     expect(restlessons.length).toBe(1);

 })