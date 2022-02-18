import {readFileSync} from "fs";
import {Day8} from "./day8";


const file = readFileSync('2016/Day8/input.txt', 'utf-8');

const testCases = [
    {input: `rect 3x2
    rotate column x=1 by 1
    rotate row y=0 by 4
    rotate column x=1 by 1
    rect 3x2`, row: 3, columns: 7, expected: 9},
    {input: file, expected: 128, columns: 50, row: 6},
];

testCases.forEach(({input, expected, row, columns}) => {

    const day = new Day8(input);

    it(`expected :${expected}`, () => {
        expect(day.part1(row, columns)).toEqual(expected)
    });
});