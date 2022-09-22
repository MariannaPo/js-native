import {CityType} from "../02/02_City";

export const removeHouse = (city: CityType, street: string) => {
     city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const correctStuff = (building: CityType, count: number) => {
    building.govermentBuildings = building.govermentBuildings.filter(b => b.staffCount > 500)
}