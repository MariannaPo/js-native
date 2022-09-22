test('should tale old men older than 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    const predicate = (age:number) => {
        return age > 90;
    }

    const oldAges = ages.filter(predicate);
    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should tale chip courses', () => {
    const courses = [
        {title: 'css', price: 110},
        {title: 'js', price: 200},
        {title: 'react', price: 150},
    ];
    const chipPredicate = (course: CourseType) => {
        return course.price < 160;
    }
    const predicated = courses.filter(chipPredicate);

    expect(predicated.length).toBe(2);
    expect(predicated[0].title).toBe('css');
    expect(predicated[1].title).toBe('react')
})

test('get only completed tasks', () => {
    type TasksType = {
        id: number,
        title: string,
        isDone: boolean,
    }

    const tasks = [
        {id: 1, title: "Bread", isDone: true},
        {id: 2, title: "Milk", isDone: false},
        {id: 3, title: "Cherry", isDone: true},
        {id: 4, title: "Paper", isDone: true},
    ];

    const tasksDone = (tasks: TasksType) => {
        return tasks.isDone;
    }

    const isDoneFoo = tasks.filter(tasksDone);

    expect(isDoneFoo.length).toBe(3);
    expect(isDoneFoo[0].title).toBe('Bread');
    expect(isDoneFoo[1].title).toBe('Cherry');
    expect(isDoneFoo[2].id).toBe(4);
})

test('get only uncompleted tasks', () => {

    const tasks = [
        {id: 1, title: "Bread", isDone: true},
        {id: 2, title: "Milk", isDone: false},
        {id: 3, title: "Cherry", isDone: true},
        {id: 4, title: "Paper", isDone: true},
    ];

    const isNotDoneFoo = tasks.filter(task => !task.isDone);

    expect(isNotDoneFoo.length).toBe(1);
    expect(isNotDoneFoo[0].title).toBe('Milk');
    expect(isNotDoneFoo[0].id).toBe(2);
})