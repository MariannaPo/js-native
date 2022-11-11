type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

 export const student: StudentType = {
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
        }  ,
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
console.log(student.technologies[2].title)