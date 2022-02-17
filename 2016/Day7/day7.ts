export class Day7 {

    private lines: string[];
    private readonly REGEX_HYPERNET = /\[\w+]/g;

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
        const supernet = line.match(/\w+(?=(((?!]).)*\[)|[^\[\]]*$)/g);
       // const ababab = /(?=((\w)((?!2)\w)\2))/g;
        const ababab = /(\w)((?!\1)\w)\1/g;

        for (let word of supernet) {

            const aba = word.match(ababab);

            while (word.length >= 3) {

                const aba = word.match(ababab);

                if (aba) {

                    for (const item of aba) {

                        const flippedWord = item.charAt(1).concat(item.charAt(0)).concat(item.charAt(1));

                        if (hypernet.filter(net => net.includes(flippedWord)).length > 0) {

                            return true;
                        }

                    }

                    word = word.substr(word.indexOf(aba[0]) + 1);

                } else {

                    word = '';
                }
            }
        }

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