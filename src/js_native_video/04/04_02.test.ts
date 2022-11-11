import {AddressType, CityType, HouseType} from "../02/02_City";
import {correctStuff, removeHouse} from "./04_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: "SPb",
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: {number: 108, street: {title: "White street"}}
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy street"}}
            },
        ],
        govermentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {street: {title: "Central Str"}}
            },

            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1800,
                address: {street: {title: "South Str"}}
            }
        ],
        citiesNumber: 150000
    }
})

test('Houses should be destroy', () => {
    removeHouse(city, "Happy street");
    expect(city.houses.length).toBe(1);
    expect(city.houses[0].address.street.title).toBe('White street');

})

test('building ith correct stuff count', () => {
    correctStuff(city, 600);
    expect(city.govermentBuildings.length).toBe(1);
    expect(city.govermentBuildings[0].staffCount).toBe(1800);
})
