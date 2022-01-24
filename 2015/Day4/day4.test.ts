import {readFileSync} from "fs";
import {day4} from "./day4";

const file = readFileSync('2015/Day1/input.txt', 'utf-8');
const input = 'bgvyzdsv';

const testCases = [
    {input: 'abcdef', expected: 609043},
    {input: 'pqrstuv', expected: 1048970},
    {input: input, expected: 254575},
];

const startWith = '00000';

testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day4(input, startWith)).toEqual(expected)
    })
});


const testCases2 = [
    {input: input, expected: 1038736},
];

const startWith2 = '000000';

testCases2.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day4(input, startWith2)).toEqual(expected)
    })
});