import { StudentType } from "../02/02"
import { addSkill } from "./03";
import {makeStudentActive} from "./03";
import {doesStudentLive} from "./03";


let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Marianna',
        age: 23,
        isActive: false,
        address: {
            streetTitle: 'Pleseckaya 6 ',
            city: {
                title: "SPb",
                countryTitle: "Russia"
            }
        },
        technologies: [
            {
                 id: 1,
                title: "HTML",
            },
            {
                id: 2,
                title: "JS",
            },
            {
                id: 3,
                title: "REACT",
            }
        ]
    }
})

test('new skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})


test('student should be active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);

})
test('student live in city', () => {
    expect(student.address.city.title).toBe("SPb");

    let result1 = doesStudentLive(student, "Moscow");
    let result2 = doesStudentLive(student, "SPb");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})

