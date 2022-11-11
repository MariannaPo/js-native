import {CityType, GovermentBuildingType, HouseType} from "../02/02_City";

export const addMoneyToBudget = (building: GovermentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairedHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovermentBuildingType, staffCount: number) => {
    building.staffCount -= staffCount;
}

export const toHireStaff = (building: GovermentBuildingType, staffCount: number) => {
    building.staffCount += staffCount;
}

export const createMessage = (city: CityType) => {
    return "Hello residents of " + city.title + "! I wish " + city.citiesNumber + " people a good mood";
}