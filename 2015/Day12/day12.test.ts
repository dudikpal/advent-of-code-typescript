import {readFileSync} from "fs";
import {part1, part2} from "./day12";

const file = readFileSync('2015/Day12/input.txt', 'utf-8');

const testCasesPart1 = [
    {input: '[1,2,3]{"a":2,"b":4}', expected: 12},
    {input: '[[[3]]]{"a":{"b":4},"c":-1}', expected: 6},
    {input: '{"a":[-1,1]}[-1,{"a":1}]', expected: 0},
    {input: '[]{}', expected: 0},
    {input: file, expected: 111754},
];

testCasesPart1.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(part1(input)).toEqual(expected)
    });
});

const testCasesPart2 = [
    {input: '[1,2,3]', expected: 6},
    {input: '[1,{"c":"red","b":2},3]', expected: 4},
    {input: '{"d":"red","e":[1,2,3,4],"f":5}', expected: 0},
    {input: '{"d":"black","e":["red",2,3,4],"f":5}', expected: 14},
    {input: '[1,"red",5]', expected: 6},
    {input: file, expected: 65402},
];

testCasesPart2.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(part2(input)).toEqual(expected)
    });
});