import {day1, day1Part2} from "./day1";
import {readFileSync} from "fs";

const file = readFileSync('2015/Day1/input.txt', 'utf-8');

const testCases = [
    {input: '(())', expected: 0},
    {input: '()()', expected: 0},
    {input: '))(((((', expected: 3},
    {input: ')())())', expected: -3},
    {input: file, expected: 232},
];

testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day1(input)).toEqual(expected)
    })
});


const testCases2 = [
    {input: '()())', expected: 5},
    {input: file, expected: 1783}
];

testCases2.forEach(({input, expected}) => {
    it(`should: ${expected}`, function () {
        expect(day1Part2(input)).toEqual(expected);
    });
});