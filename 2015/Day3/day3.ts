type Coord = {
    x: number;
    y: number;
}


export function day3(input: string) {

    const commands = input.split('');
    let locations: Coord[] = [];
    locations.push({x: 0, y: 0});
    let coord: Coord = {x: 0, y: 0};

    commands.forEach(command => {
        locations.push(stepTo(command, coord));

    });

    let result: Coord[] = [];
    
    for (const location of locations) {
        if (!existed(location, result)) {
            result.push(location);
        }
    }
    
    return result.length;
}


export function day3Part2(input: string) {

    const commands = input.split('');
    let locations: Coord[] = [];
    locations.push({x: 0, y: 0});
    let santaCoord: Coord = {x: 0, y: 0};
    let roboCoord: Coord = {x: 0, y: 0};

    commands.forEach((command, index) => {
        if (index % 2 === 0) {
            locations.push(stepTo(command, santaCoord));
        } else {
            locations.push(stepTo(command, roboCoord));
        }
    });

    let result: Coord[] = [];

    for (const location of locations) {
        if (!existed(location, result)) {
            result.push(location);
        }
    }

    return result.length;
}


function existed(location: Coord, result: Coord[]): boolean {
    for (const coord of result) {
        if (location.x === coord.x && location.y === coord.y) {

            return true;
        }
    }
    return false;
}


function stepTo(direction: string, coord: Coord): Coord {
    switch (direction) {
        case '>': coord.x++; break;
        case '<': coord.x--; break;
        case '^': coord.y++; break;
        case 'v': coord.y--; break;
    }

    const resultCoord: Coord = {x: coord.x, y: coord.y};
    return resultCoord;
}