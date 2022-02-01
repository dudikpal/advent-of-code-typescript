import {readFileSync} from "fs";
import {part1, part2} from "./day9";


const file = readFileSync('2015/Day9/input.txt', 'utf-8');

const testCases = [
    {input: `London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`, expectedPart1: 605, expectedPart2: 982},
    {input: file, expectedPart1: 117, expectedPart2: 909}
];

testCases.forEach(({input, expectedPart1, expectedPart2}) => {
    it(`expected :${expectedPart1}`, () => {

        expect(part1(input)).toEqual(expectedPart1);
    });

    it(`expected :${expectedPart2}`, () => {

        expect(part2(input)).toEqual(expectedPart2)
    });
});