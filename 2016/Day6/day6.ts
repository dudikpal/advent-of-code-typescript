export class Day6 {

    private columns: string[][] = [];


    constructor(
        private input: string
    ) {
        this.initColumns();
    }




    part1() {

        let result = '';

        for (const column of this.columns) {

            let counter = this.frequency(column);

            result += this.letterOfFrequency(column, counter, 'high');
        }

        return result;
    }


    part2() {

        let result = '';

        for (const column of this.columns) {

            let counter = this.frequency(column);

            result += this.letterOfFrequency(column, counter, 'low');
        }

        return result;
    }


    private letterOfFrequency(column: string[], counter: { [p: string]: number }, freq: string) {

        column.sort(
            (letter1, letter2) =>
                counter[letter2] - counter[letter1]
        );

        if (freq === 'high') {
            return column[0];
        }
        if (freq === 'low') {
            return column[column.length - 1];
        }
    }

    private frequency(column: string[]) {

        let counter: { [key: string]: number } = {};

        column.forEach((letter: string) => {
            if (counter[letter]) {
                counter[letter]++
            } else {
                counter[letter] = 1;
            }
        });

        return counter;
    }


    private initColumns() {

        this.input
            .split(/\r?\n/g)
            .forEach(line => {

                line.split('')
                    .forEach((letter, index) => {

                        if (!this.columns[index]) {
                            this.columns[index] = [];
                        }
                        this.columns[index].push(letter);
                    });
            });
    }
}