import {readFileSync} from "fs";
import {day2, day2Part2} from "./day2";

const file = readFileSync('2015/Day2/input.txt', 'utf-8');

const testCases = [
    {input: file, expected: 1588178},
    {input: '2x3x4', expected: 58},
    {input: '1x1x10', expected: 43},
];

testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day2(input)).toEqual(expected)
    })
});

const testCases2 = [
    {input: '2x3x4', expected: 34},
    {input: '1x1x10', expected: 14},
    {input: file, expected: 3783758},
];

testCases2.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day2Part2(input)).toEqual(expected)
    })
});