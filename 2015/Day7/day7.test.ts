import {readFileSync} from "fs";
import {day7} from "./day7";

const file = readFileSync('2015/Day7/input.txt', 'utf-8');

const testCases = [
    /*{input: `123 -> x
456 -> y
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i
1 AND i -> j
j -> k`, expected: 65079, from: 'i'},*/  // value of 'h'
    {input: file, expectedPart1: 956, expectedPart2: 40149, from: 'a'}
];

testCases.forEach(({input, expectedPart1, expectedPart2, from}) => {
    it(`expected part 1 :${expectedPart1}`, () => {
        expect(day7(input, from).part1).toEqual(expectedPart1);
    });

    it(`expected part 2 :${expectedPart2}`, () => {
        expect(day7(input, from).part2).toEqual(expectedPart2);
    });
});