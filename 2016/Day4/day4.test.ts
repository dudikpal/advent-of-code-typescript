import {readFileSync} from "fs";
import {Day4} from "./day4";

const file = readFileSync('2016/Day4/input.txt', 'utf-8');

const testCases = [
    {input: `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
not-a-real-room-404[oarel]
totally-real-room-200[decoy]`, expected: 1514},
    {input: file, expected: 137896},
];

testCases.forEach(({input, expected}) => {

    const day4 = new Day4(input);

    it(`expected :${expected}`, () => {
        expect(day4.part1()).toEqual(expected)
    })
});


const testCases2 = [
    {input: `aaaaa-bbb-z-y-x-123[abxyz]
a-b-c-d-e-f-g-h-987[abcde]
xxx-opsuiqpmf-dddd-285[dxpfi]
totally-real-room-200[decoy]`, expected: 285},
    {input: file, expected: 501},
];

testCases2.forEach(({input, expected}) => {

    const day4 = new Day4(input);

    it(`expected :${expected}`, () => {
        expect(day4.part2()).toEqual(expected)
    })
});

