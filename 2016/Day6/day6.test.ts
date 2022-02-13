import {readFileSync} from "fs";
import {Day6} from "./day6";

const file = readFileSync('2016/Day6/input.txt', 'utf-8');
const testCases = [
    {input: `eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar`, expected: 'easter', expectedPart2: 'advent'},
    {input: file, expected: 'tkspfjcc', expectedPart2: 'xrlmbypn'},
];

testCases.forEach(({input, expected, expectedPart2}) => {

    const day = new Day6(input);

    it(`expected :${expected}`, () => {
        expect(day.part1()).toEqual(expected)
    });

    it(`expected part 2 :${expectedPart2}`, () => {
        expect(day.part2()).toEqual(expectedPart2)
    });
});