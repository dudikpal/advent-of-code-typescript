import {readFileSync} from "fs";
import {day7} from "./day7";

const file = readFileSync('2015/Day7/input.txt', 'utf-8');

const testCases = [
    /*{input: `123 -> x
x OR y -> e
x LSHIFT 2 -> f
x AND y -> d
y RSHIFT 2 -> g
NOT x -> h
NOT y -> i
456 -> y`, expected: 65079, from: 'i'},*/  // value of 'h'
    {input: file, expected: 956, from: 'a'}
];

testCases.forEach(({input, expected, from}) => {
    it(`expected :${expected}`, () => {
        expect(day7(input, from)).toEqual(expected)
    })
});