import {readFileSync} from "fs";
import {day6} from "./day6";

const file = readFileSync('2015/Day6/input.txt', 'utf-8');

const instructions1 = `turn on 0,0 through 999,999
toggle 0,0 through 999,0
turn off 499,499 through 500,500`

const testCases = [
    {input: instructions1, expectedPart1: 998996, expectedPart2: 1001996},
    {input: file, expectedPart1: 569999, expectedPart2: 17836115},
];

testCases.forEach(({input, expectedPart1, expectedPart2}) => {
    it(`expected Part1:${expectedPart1}`, () => {
        expect(day6(input).part1).toEqual(expectedPart1)

    });

    it(`expected Part2: ${expectedPart2}`, () => {
        expect(day6(input).part2).toEqual(expectedPart2)
    });
});