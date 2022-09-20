import { StudentType } from "../02/02";
import {GovermentBuildingType} from "../02/02_City";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: 5665,
        title: skill,
    })
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export function doesStudentLive(student: StudentType, cityName: string) {
   return  student.address.city.title === cityName;
}
