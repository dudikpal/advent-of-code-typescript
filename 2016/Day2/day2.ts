    type Button = {
    x: number;
    y: number;
    value: number | string;
}


type Coord = {
    x: number;
    y: number;
}


export class Day2 {

    private pad!: Button[];
    private commandLines: string[];
    private resultCode!: string;


    constructor(input: string) {
        this.commandLines = input.split(/\n|\r\n/);
    }


    part1() {
        this.resultCode = '';
        this.part1Pad();
        let button = this.pad.find(button => button.value === 5)!;
        for (const commandLine of this.commandLines) {
            button = this.commandLineProcessor(commandLine, button);
            this.resultCode += button.value;
        }
        return this.resultCode;
    }


    part2() {
        this.resultCode = '';
        this.part2Pad();
        let coord = {x: 0, y: 2};
        for (const commandLine of this.commandLines) {
            coord = Day2.commandLineProcessorPart2(commandLine, coord);
            this.resultCode += this.pad.find(button => button.x === coord.x && button.y === coord.y)!.value;
        }
        return this.resultCode;
    }


    private static commandLineProcessorPart2(line: string, coord: Coord): Coord {

        const commands = line.split('');

        for (const command of commands) {
            coord = Day2.stepPart2(command, coord)!;
        }

        return coord;
    }


    private static stepPart2(direction: string, coord: Coord ): Coord {

        switch (direction) {

            case 'U':
                coord.y > 0 && coord.x === 2 ||
                coord.y > 1 && (coord.x === 1 || coord.x === 3)
                ? coord.y-- : null;
                break;

            case 'D':
                coord.y < 4 && coord.x === 2 ||
                coord.y < 3 && (coord.x === 1 || coord.x === 3)
                ? coord.y++ : null;
                break;

            case 'L':
                coord.x > 0 && coord.y === 2 ||
                coord.x > 1 && (coord.y === 1 || coord.y === 3)
                    ? coord.x-- : null;
                break;

            case 'R':
                coord.x < 4 && coord.y === 2 ||
                coord.x < 3 && (coord.y === 1 || coord.y === 3)
                    ? coord.x++ : null;
                break;

            default:
                break;
        }

        return coord;
    }


    private commandLineProcessor(line: string, button: Button): Button {

        const commands = line.split('');

        for (const command of commands) {
            button = this.step(command, button)!;
        }

        return button;
    }


    private step(direction: string, button: Button ): Button {

        switch (direction) {

            case 'U':
                return button.y > 0 ? this.findButton(button.x, button.y - 1) : button;

            case 'D':
                return button.y < 2 ? this.findButton(button.x, button.y + 1) : button;

            case 'L':
                return button.x > 0 ? this.findButton(button.x - 1, button.y) : button;

            case 'R':
                return button.x < 2 ? this.findButton(button.x + 1, button.y) : button;

            default:
                return button;
        }
    }


    private findButton(x: number, y: number): Button {
        return this.pad.find(button => button.x === x && button.y === y)!;
    }


    private part2Pad() {

        this.pad = [
            {x: 2, y: 0, value: 1},
            {x: 1, y: 1, value: 2},
            {x: 2, y: 1, value: 3},
            {x: 3, y: 1, value: 4},
            {x: 0, y: 2, value: 5},
            {x: 1, y: 2, value: 6},
            {x: 2, y: 2, value: 7},
            {x: 3, y: 2, value: 8},
            {x: 4, y: 2, value: 9},
            {x: 1, y: 3, value: 'A'},
            {x: 2, y: 3, value: 'B'},
            {x: 3, y: 3, value: 'C'},
            {x: 2, y: 4, value: 'D'}
        ];


    }


    private part1Pad() {

        this.pad = [];

        for (let i = 0; i < 3; i++) {

            for (let j = 0; j < 3; j++) {

                this.pad.push({x: j, y: i, value: 3 * i + j + 1});
            }
        }
    }
}