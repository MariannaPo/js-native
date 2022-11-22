import React from "react";

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

type PropsType = {
    title: string,
    girl: GirlType,
    food: Array<string>,
    car: {model: string}
}
export const GirlType: React.FC<PropsType> = (props) => {
    const {title} = props;
    const {name} = props.girl;

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {name}
        </div>
    </div>
}