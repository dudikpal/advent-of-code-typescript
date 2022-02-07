type Coord = {
    x: number;
    y: number;
}

export class Day1 {

    commands: string[] = [];
    coord: Coord;
    coordinates: string[] = [];
    bunnyHQ: Coord;

    constructor(input: string) {
        this.commands = input.split(', ');
    }

    day1() {
        this.coord = {x: 0, y: 0};
        let direction = 'N';

        for (const instruction of this.commands) {

            direction = this.commandProcessor(direction, instruction);
        }

        console.log(this.coordinates)
        const part1 = Math.abs(this.coord.x) + Math.abs(this.coord.y);
        const part2 = Math.abs(this.bunnyHQ?.x) + Math.abs(this.bunnyHQ?.y);
        return {part1: part1, part2: part2};
    }





    addDistance(direction: string, num: number) {
        switch (direction) {
            case 'N':
                this.coord.y += num; break;
            case 'E':
                this.coord.x += num; break;
            case 'S':
                this.coord.y -= num; break;
            case 'W':
                this.coord.x -= num; break;
        }
    }


    changeDirection(direction: string, command: string) {
        switch (direction) {
            case 'N':
                return command === 'R' ? 'E' : 'W';
            case 'E':
                return command === 'R' ? 'S' : 'N';
            case 'S':
                return command === 'R' ? 'W' : 'E';
            case 'W':
                return command === 'R' ? 'N' : 'S';
        }
    }


    commandProcessor(direction: string, instruction: string) {
        let num = +instruction.match(/\d+$/)![0];
        let command = instruction.match(/^\D+/)![0];

        direction = this.changeDirection(direction, command)!;
        const fromCoord = {x: this.coord.x, y: this.coord.y};
        this.addDistance(direction, num);
        const toCoord = {x: this.coord.x, y: this.coord.y}


        const arrX = Array.from({
                length: fromCoord.x !== toCoord.x ?
                    this.abs(this.abs(fromCoord.x) - this.abs(toCoord.x))
                    : 1
            },
            (_, i) => i + Math.min(fromCoord.x, toCoord.x));

        const arrY = Array.from({
                length: fromCoord.y !== toCoord.y
                    ? this.abs(toCoord.y - fromCoord.y)
                    : 1
            },
            (_, i) => i + Math.min(fromCoord.y, toCoord.y));

        for (let i = 0; i < arrX.length; i++) {
            for (let j = 0; j < arrY.length; j++) {
                if (!this.bunnyHQ && this.coordinates.includes(`${arrX[i]}:${arrY[j]}`)) {
                    this.bunnyHQ = {x: this.coord.x, y: this.coord.y}
                }
                this.coordinates.push(`${arrX[i]}:${arrY[j]}`);
            }
        }
        this.coordinates.push(`${toCoord.x}:${toCoord.y}`);

        return direction;
    }


    abs(num:number) {
        return Math.abs(num);
    }
}