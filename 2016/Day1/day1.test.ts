import {readFileSync} from "fs";
import {Day1} from "./day1";

const file = readFileSync('2016/Day1/input.txt', 'utf-8');

const testCases = [
    {input: 'R2, L3', expected: 5},
    {input: 'R2, R2, R2', expected: 2},
    {input: 'R5, L5, R5, R3', expected: 12},
    {input: file, expected: 288},
];

testCases.forEach(({input, expected}) => {

    const day1 = new Day1(input);

    it(`expected :${expected}`, () => {
        expect(day1.day1().part1).toEqual(expected)
    })
});

const testCases2 = [
    {input: 'R8, R4, R4, R8', expected: 4},
    {input: file, expected: 111},
];

testCases2.forEach(({input, expected}) => {

    const day1 = new Day1(input);

    it(`expected :${expected}`, () => {
        expect(day1.day1().part2).toEqual(expected)
    })
});
