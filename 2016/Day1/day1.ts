type Coord = {
    x: number;
    y: number;
}

export class Day1 {

    commands: string[] = [];
    coordinates: string[] = [];
    coord!: Coord;
    bunnyHQ!: Coord;


    constructor(input: string) {
        this.commands = input.split(', ');
    }


    day1() {
        this.coord = {x: 0, y: 0};
        let direction = 'N';
        this.coordinates.push('0:0');

        for (const instruction of this.commands) {

            direction = this.commandProcessor(direction, instruction);
        }

        const part1 = Math.abs(this.coord.x) + Math.abs(this.coord.y);
        const part2 = Math.abs(this.bunnyHQ.x) + Math.abs(this.bunnyHQ.y);

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
        let fromCoord = {x: this.coord.x, y: this.coord.y};

        direction = this.changeDirection(direction, command)!;
        this.addDistance(direction, num);

        const toCoord = {x: this.coord.x, y: this.coord.y}

        fromCoord = {x: fromCoord.x + this.addition(fromCoord.x, toCoord.x), y: fromCoord.y + this.addition(fromCoord.y, toCoord.y) };

        const minX = Math.min(fromCoord.x, toCoord.x);
        const maxX = Math.max(fromCoord.x, toCoord.x);
        const minY = Math.min(fromCoord.y, toCoord.y);
        const maxY = Math.max(fromCoord.y, toCoord.y);

        for (let i = minX; i <= maxX; i++) {

            for (let j = minY; j <= maxY; j++) {

                if (!this.bunnyHQ && this.coordinates.includes(`${i}:${j}`)) {

                    this.bunnyHQ = {x: i, y: j}
                }
                this.coordinates.push(`${i}:${j}`);
            }
        }

        return direction;
    }


    addition(num1: number, num2: number) {

        if (num1 - num2 === 0) {
            return 0;
        }

        if (num1 - num2 > 0) {
            return -1;
        }

        return 1;
    }
}