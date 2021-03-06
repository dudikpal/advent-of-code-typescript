import {readFileSync} from "fs";
import {Day13} from "./day13";

const file = readFileSync('2015/Day13/input.txt', 'utf-8');

const testData = `Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.`;


const testCases = [
    //{input: testData, expected: 330},
    {input: file, expected: 0},
];

testCases.forEach(({input, expected}) => {

    const day = new Day13(input);

    it(`expected :${expected}`, () => {
        expect(day.part1()).toEqual(expected)
    })
});