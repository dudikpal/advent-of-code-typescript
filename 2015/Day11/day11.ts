// ha nincs találat, akkor null
const regexNotContains = /^(?!.*[iol]).*/g;
const regexTwoPairs = /(.)\1/g;

export function day11(input: string) {

    let letters = input.split('');

    return solution(letters);
}


function solution(letters: string[]) {

    let index = letters.length - 1;
    const last = index;

    while (!checkThreeIncrementLetter(letters) ||
        !letters.join('').match(regexNotContains) ||
        (letters.join('').match(regexTwoPairs) || []).length < 2) {

        letters[last] = incrementLetter(letters[last]);

        while (letters[index] === 'a' && index > 0) {

            index--;
            letters[index] = incrementLetter(letters[index]);
        }
        index = last;
    }

    return letters.join('');
}


function checkThreeIncrementLetter(letters: string[]): boolean {

    for (let i = 0; i <= letters.length - 3; i++) {

        if (letters[i + 1] === incrementLetter(letters[i]) &&
        letters[i + 2] === incrementLetter(incrementLetter(letters[i])) &&
        letters[i] !== 'z' && letters[i] !== 'y') {

            return true;
        }
    }
    return false;
}


function incrementLetter(letter: string) {

    return String.fromCharCode((letter.charCodeAt(0) - 96) % 26 + 97);
}