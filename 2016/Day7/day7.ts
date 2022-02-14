export class Day7 {

    private lines: string[];
    private readonly REGEX_HYPERNET = /\[\w+\]/g;

    constructor(
        private input: string
    ) {
        this.lines = input.split(/\r?\n/g);
    }


    part1() {

        let counter = 0;

        for (const line of this.lines) {

            if (this.isSupportTLC(line)) {

                counter++;
            }
        }

        return counter;
    }


    part2() {

        let counter = 0;

        for (const line of this.lines) {

            if (this.isSupportSSL(line)) {

                counter++;
            }
        }

        return counter;
    }


    private isSupportSSL(line: string) {

        // [any]
        const hypernet = line.match(this.REGEX_HYPERNET);
        // any[ ]any
        //const supernet = line.match(/\w+(?=(((?!\]).)*\[)|[^\[\]]*$)/g);
        const supernetAbabab = Array.from(line.matchAll(/(\w)((?!\1)\w)(\1)(?=(((?!\]).)*\[)|[^\[\]]*$)/g));
        const ababab = /(\w)((?!\1)\w)(\1)/g;

        if (supernetAbabab) {

            for (const word of supernetAbabab[0]) {

                const flippedWord = word.charAt(1).concat(word.charAt(0)).concat(word.charAt(1));
                if (hypernet.filter(net => net.includes(flippedWord)).length > 0) {
                    return true;
                }
            }
        }
        console.log(supernetAbabab)
        return false;
    }


    private isSupportTLC(line: string): boolean {

        const isAbba = /(\w)((?!\1)(\w))\2\1/g;
        const matches = line.match(isAbba);
        const hypernet = line.match(this.REGEX_HYPERNET);

        if (matches) {

            for (const ip of hypernet!) {

                if (ip.match(isAbba)) {

                    return false;
                }
            }

            return true;
        }

        return false;
    }
}