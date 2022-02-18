export class Day8 {

    private readonly lines: string[];
    private lights!: number[][];
    private row!: number;
    private column!: number;


    constructor(
        private input: string
    ) {
        this.lines = this.initLines();
    }


    part1(row: number, column: number) {

        this.initLights(row, column);

        for (const line of this.lines) {

            this.processLine(line.trim());
        }

        // part2 solution
        this.lights
            .forEach(light => console.log(...light))

        // part1 solution
        return this.lights
            .flatMap(lights => lights)
            .reduce((acc, curr) =>
                curr === 1 ? acc + 1 : acc, 0);
    }


    processLine(line: string) {

        const command = line.match(/^\w+/)![0];

        if (command === 'rect') {

            this.createRect(line);
        } else {

            this.rotate(line.replace('rotate ', ''));
        }
    }


    rotate(line: string) {

        const rowOrCol = line.match(/^\w+/)![0];

        if (rowOrCol === 'row') {

            this.rotateRow(line.replace('row ', ''));
        } else {

            this.rotateCol(line.replace('column ', ''));
        }
    }


    rotateRow(line: string) {

        const rowIndex = this.getIndex(line);
        const offset = this.getOffset(line);
        let row = [];

        row.push(...this.lights[rowIndex].slice(this.lights[0].length - offset));
        row.push(...this.lights[rowIndex].slice(0, this.lights[0].length - offset))
        this.lights[rowIndex] = row;
    }


    rotateCol(line: string) {

        const colIndex = this.getIndex(line);
        const offset = this.getOffset(line);
        let columnArray: number[] = [];

        this.lights
            .forEach(light =>
                columnArray.push(light[colIndex]));

        let resultColumn: number[] = [];
        resultColumn.push(...columnArray.slice(columnArray.length - offset));
        resultColumn.push(...columnArray.slice(0, columnArray.length - offset));

        this.lights
           .forEach((light, index) =>
               light[colIndex] = resultColumn[index]);
    }


    getOffset(line: string) {

        return +line.match(/\d+$/)![0];
    }


    getIndex(line: string) {

        return +line.match(/\d+/)![0];
    }


    createRect(command: string) {

        const cols = +command.match(/\d+/)![0];
        const rows = +command.match(/\d+$/)![0];

        for (let i = 0; i < cols; i++) {

            for (let j = 0; j < rows; j++) {

                this.lights[j][i] = 1;
            }
        }
    }


    private initLines() {

        return this.input.split(/\r?\n/g);
    }


    private initLights(row: number, column: number) {

        this.lights = new Array(row);
        this.row = row;
        this.column = column;

        for (let i = 0; i < row; i++) {

            this.lights[i] = new Array(column).fill(0);
        }
    }
}