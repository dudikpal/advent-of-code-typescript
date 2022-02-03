import {day11} from "./day11";

const input = 'cqjxjnds';

const testCases = [
    {input: 'abcdefgh', expected: 'abcdffaa'},
    {input: 'ghijklmn', expected: 'ghjaabcc'},
    {input: input, expected: 'cqjxxyzz'},
    {input: 'cqjxxzaa', expected: 'cqkaabcc'},
];

testCases.forEach(({input, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day11(input)).toEqual(expected)
    })
});