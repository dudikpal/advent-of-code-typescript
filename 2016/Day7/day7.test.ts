import {readFileSync} from "fs";
import {Day7} from "./day7";

const file = readFileSync('2016/Day7/input.txt', 'utf-8');

const testCases = [
    {input: `abba[mnop]qrst
abcd[bddb]xuyx
aaaa[qwer]tyui
ioxxoj[asdfgh]zxcvbn`, expected: 2},
    {input: file, expected: 110},
];

testCases.forEach(({input, expected}) => {

    const day = new Day7(input);

    it(`expected :${expected}`, () => {
        expect(day.part1()).toEqual(expected)
    });
});

const testCases2 = [
    {input: `aba[bab]xyz
xyx[xyx]xyx
aaa[kek]eke
zazbz[bzb]cdb`, expected: 3},
    {input: file, expected: 242},
];

testCases2.forEach(({input, expected}) => {

    const day = new Day7(input);

    it(`expected :${expected}`, () => {
        expect(day.part2()).toEqual(expected)
    });
});