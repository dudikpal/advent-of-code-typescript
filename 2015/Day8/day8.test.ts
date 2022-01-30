import {readFileSync} from "fs";
import {day8} from "./day8";

const file = readFileSync('2015/Day8/input.txt', 'utf-8');

const testCases = [
    {input: file, expectedPart1: 1371, expectedPart2: 2117},
];

testCases.forEach(({input, expectedPart1, expectedPart2}) => {
    it(`expected part 1 :${expectedPart1}`, () => {
        expect(day8(input).part1).toEqual(expectedPart1)
    });

    it(`expected part 2 :${expectedPart2}`, () => {
        expect(day8(input).part2).toEqual(expectedPart2)
    });
});