import {Day5} from "./day5";


const file = 'ffykfhsq';

const testCases = [
    {input: 'abc', expected: '18f47a30', expectedPart2: '05ace8e3'},
    {input: file, expected: 'c6697b55', expectedPart2: '8c35d1ab'},
];
testCases.forEach(({input, expected, expectedPart2}) => {

    const day5 = new Day5(input);

    it(`expected :${expected}`, () => {
        expect(day5.part1()).toEqual(expected)
    });

    it(`expected part 2 :${expectedPart2}`, () => {
        expect(day5.part2()).toEqual(expectedPart2)
    });
});