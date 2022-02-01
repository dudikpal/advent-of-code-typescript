import {day10} from "./day10";

const input = 1113122113;

const testCases = [
    {input: 1211, repeat: 1, expected: 6},
    {input: 111221, repeat: 1, expected: 6},
    {input: input, repeat: 40, expected: 360154},
    {input: input, repeat: 50, expected: 5103798},
];

testCases.forEach(({input, repeat, expected}) => {
    it(`expected :${expected}`, () => {
        expect(day10(input, repeat)).toEqual(expected)
    })
});