import {CityType} from "../02/02_City";
import {getStreetTitlesOfGovermentsBuildings, greetingMessageForPeople} from "./05_02";
import {getStreetsTitleHouse} from "./05_02";

let city: CityType;
beforeEach(() => {
    city = {
        title: "SPb",
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 108, street: {title: "White street"}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy street"}}
            },
            {
                buildedAt: 2020, repaired: false,
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

test('list of streets titles of goverments buildings', () => {
    let streetNames = getStreetTitlesOfGovermentsBuildings(city.govermentBuildings);

    expect(streetNames.length).toBe(2);
    expect(streetNames[0]).toBe('Central Str');
    expect(streetNames[1]).toBe('South Str');
})

test('list of streets titles', () => {
    let streets = getStreetsTitleHouse(city.houses);

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street");
    expect(streets[1]).toBe("Happy street");
    expect(streets[2]).toBe("Happy street");
})

test('create greeting messages', () => {
    let greetingMes = greetingMessageForPeople(city.houses);

    expect(greetingMes.length).toBe(3);
    expect(greetingMes[0]).toBe('Hello a citizen White street');
    expect(greetingMes[1]).toBe('Hello a citizen Happy street');
    expect(greetingMes[2]).toBe('Hello a citizen Happy street');
})