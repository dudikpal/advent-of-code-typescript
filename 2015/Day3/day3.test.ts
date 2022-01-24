import {readFileSync} from "fs";
import {day3, day3Part2} from "./day3";

const file = readFileSync('2015/Day3/input.txt', 'utf-8');

const testCases = [
    {input: '^v^v^v^v^v', expected: 2},
    {input: '^>v<', expected: 4},
    {input: '>', expected: 2},
    {input: file, expected: 2565},
];

testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day3(input)).toEqual(expected)
    })
});


const testCases2 = [
    {input: '^v^v^v^v^v', expected: 11},
    {input: '^>v<', expected: 3},
    {input: '^v', expected: 3},
    {input: file, expected: 2639},
];

testCases2.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day3Part2(input)).toEqual(expected)
    })
});
