import {GovermentBuildingType, HouseType} from "../02/02_City";

export const getStreetTitlesOfGovermentsBuildings = (buildings: Array<GovermentBuildingType>) => {
   return  buildings.map(b => b.address.street.title)
}
export const getStreetsTitleHouse = (houses: Array<HouseType>) => {
   return houses.map(h => h.address.street.title)
}
export const greetingMessageForPeople = (houses: Array<HouseType>) => {
   return houses.map(h => `Hello a citizen ${h.address.street.title}`)
}