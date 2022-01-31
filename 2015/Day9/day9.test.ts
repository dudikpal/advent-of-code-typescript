import {readFileSync} from "fs";
import {day9} from "./day9";

const file = readFileSync('2015/Day9/input.txt', 'utf-8');

const testCases = [
    /*{input: `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`, expectedPart1: 605},*/
    {input: file, expectedPart1: 117}
];

testCases.forEach(({input, expectedPart1}) => {
    it(`expected :${expectedPart1}`, () => {
        expect(day9(input).part1).toEqual(expectedPart1)
    })
});