import {readFileSync} from "fs";
import {Day2} from "./day2";

const file = readFileSync('2016/Day2/input.txt', 'utf-8');

const testCases = [
    {input: `ULL
RRDDD
LURDL
UUUUD`, expected: '1985', expectedPart2: '5DB3'},
    {input: file, expected: '47978', expectedPart2: '659AD'}
];

testCases.forEach(({input, expected, expectedPart2}) => {

    const solution = new Day2(input);

    it(`expected :${expected}`, () => {
        expect(solution.part1()).toEqual(expected)
    });

    it(`expected :${expectedPart2}`, () => {
        expect(solution.part2()).toEqual(expectedPart2)
    });
});