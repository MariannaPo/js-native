import {CityType} from "../02/02_City";
import {addMoneyToBudget} from "./03_02";
import {repairedHouse} from "./03_02";
import {toFireStaff} from "./03_02";
import {toHireStaff} from "./03_02";
import {createMessage} from "./03_02";


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

test('Budget should be changed for HOSPITAL', () => {
    expect(city.govermentBuildings[0].budget).toBe(200000);
    addMoneyToBudget(city.govermentBuildings[0], 100000);
    expect(city.govermentBuildings[0].budget).toBe(300000);
})

test('Budget should be changed for FIRE-STATION', () => {
    expect(city.govermentBuildings[1].budget).toBe(500000);
    addMoneyToBudget(city.govermentBuildings[1], -100000);
    expect(city.govermentBuildings[1].budget).toBe(400000);

})

test('Houses should be repaired', () => {
expect(city.houses[1].repaired).toBe(false);
repairedHouse(city.houses[1]);
expect(city.houses[1].repaired).toBeTruthy();
})

test('staff should be abbreviated', () => {
    expect(city.govermentBuildings[1].staffCount).toBe(1800);
    toFireStaff(city.govermentBuildings[1],20);
    expect(city.govermentBuildings[1].staffCount).toBe(1780);
})

test('staff should be increased', () => {
    expect(city.govermentBuildings[0].staffCount).toBe(200);
    toHireStaff(city.govermentBuildings[0], 50);
    expect(city.govermentBuildings[0].staffCount).toBe(250)
})

test('welcome message should be correct', () => {
    const message = createMessage(city);
    expect(message).toBe("Hello residents of SPb! I wish 150000 people a good mood");
})
