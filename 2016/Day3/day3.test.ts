import {readFileSync} from "fs";
import {Day3} from "./day3";

const file = readFileSync('2016/Day3/input.txt', 'utf-8');

const testCases = [
    {input: `5 10 25
    5 10 12
    6 8 10`, expected: 2, expectedPart2: 2},
    {input: file, expected: 983, expectedPart2: 1836},
];

testCases.forEach(({input, expected, expectedPart2}) => {

    const day3 = new Day3(input);

    it(`expected :${expected}`, () => {
        expect(day3.part1()).toEqual(expected)
    });

    it(`expected :${expectedPart2}`, () => {
        expect(day3.part2()).toEqual(expectedPart2)
    });
});