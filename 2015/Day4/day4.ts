const md5 = require('md5');

export function day4(input: string, startWith: string): number {

    const startingNumber = 1;

    for (let i = startingNumber; i < Number.MAX_VALUE; i++) {

        if (md5(input + i).startsWith(startWith)) {
            return i;
        }
    }

    return 0;
}