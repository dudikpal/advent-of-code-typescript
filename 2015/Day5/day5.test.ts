import {readFileSync} from "fs";
import {day5} from "./day5";

const file = readFileSync('2015/Day5/input.txt', 'utf-8');

const testCases = [
    {input: 'ugknbfddgicrmopn', expected: 1},
    {input: 'aaa', expected: 1},
    {input: 'jchzalrnumimnmhp', expected: 0},
    {input: 'haegwjzuvuyypxyu', expected: 0},
    {input: 'dvszwmarrgswjxmb', expected: 0},
    {input: file, expected: 236},
];

testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day5(input).part1).toEqual(expected)
    })
});


const testCases2 = [
    {input: 'qjhvhtzxzqqjkmpb', expected: 1},
    {input: 'xxyxx', expected: 1},
    {input: 'uurcxstgmygtbstg', expected: 0},
    {input: 'ieodomkazucvgmuy', expected: 0},
    {input: file, expected: 51},
];

testCases2.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day5(input).part2).toEqual(expected)
    })
});