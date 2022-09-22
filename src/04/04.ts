const ages = [18, 20, 22, 1, 100, 90, 14];
const oldAges = [100];
const predicate = (age:number) => {
    return age > 90;
}




type CourseType = {
    title: string,
    price: number,
}

const courses = [
    {title: 'css', price: 110},
    {title: 'js', price: 200},
    {title: 'react', price: 150},
];
const chipPredicate = (course: CourseType) => {
return course.price < 160;
}
const chipCourse = [];