type Coord = {
    x: number;
    y: number;
    brightness: number;
}

export function day6(input: string): {part1: number, part2: number} {

    const lights = createLights();
    const lights2 = createLights();
    const commands = input.split('\n');

    for (const commandLine of commands) {
        const coordRange = coordParser(commandLine);
        const command = commandLine.match(/^\w+?\s?\w+(?=\s\d)/g)![0];

        for (let i = coordRange.startX; i <= coordRange.endX; i++) {
            for (let j = coordRange.startY; j <= coordRange.endY; j++) {
                part1Switcher(command, lights[i][j]);
                part2Switcher(command, lights2[i][j]);
            }
        }
    }

    const part1Result = lights
            .flatMap(lights => lights)
            .filter(coord => coord.brightness === 1)
            .length;

    const part2Result = lights2
        .flatMap(lights => lights)
        .reduce((acc, a) => acc + a.brightness, 0);

    return {part1: part1Result, part2: part2Result};
}


function coordParser(commandLine: string): {startX: number, startY: number, endX: number, endY: number} {

    const coords = commandLine.match(/(\d+)/g)!;
    const startX = +coords[0];
    const startY = +coords[1];
    const endX = +coords[2];
    const endY = +coords[3];

    return {startX: startX, startY: startY, endX: endX, endY: endY};
}


function part1Switcher(command: string, coord: Coord) {
    switch (command) {
        case 'turn on': coord.brightness = 1; break;
        case 'turn off': coord.brightness = 0; break;
        case 'toggle': coord.brightness = coord.brightness === 0 ? 1 : 0; break;
    }
}


function part2Switcher(command: string, coord: Coord) {
    switch (command) {
        case 'turn on': coord.brightness++; break;
        case 'turn off': coord.brightness = coord.brightness === 0 ? 0 : coord.brightness - 1; break;
        case 'toggle': coord.brightness += 2; break;
    }
}


function createLights(): any[][] {
    let lights: any[][] = [];
    for (let i = 0; i < 1000; i++) {
        lights[i] = [];
        for (let j = 0; j < 1000; j++) {
            lights[i][j] = {x: i, y: j, brightness: 0};
        }
    }
    return lights;
}