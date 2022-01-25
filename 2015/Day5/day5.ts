
export function day5(input: string): {part1: number, part2: number} {

    let niceCounter = 0;
    let niceCounter2 = 0;
    const words = input.split('\r\n');

    for (const word of words) {
        if (part1Checker(word)) {
            niceCounter++;
        }
        if (part2Checker(word)) {
            niceCounter2++;
        }
    }

    return {part1: niceCounter, part2: niceCounter2};
}


function part2Checker(word: string) {
    const containPairOfLetters = word.match(/(\w\w).*\1/) !== null;
    const containAnyBetweenPair = word.match(/(\w)\w\1/) !== null;

    return containPairOfLetters && containAnyBetweenPair;
}


function part1Checker(word: string) {
    const containThreeVowels = word.match(/([aeiou].*){3}/g) !== null;
    const containDoubleLetter = word.match(/(\w)\1/g) !== null;
    const notContainRestrictedWords = word.match(/(ab)|(cd)|(pq)|(xy)/) === null;

    return containThreeVowels &&
        containDoubleLetter &&
        notContainRestrictedWords;
}