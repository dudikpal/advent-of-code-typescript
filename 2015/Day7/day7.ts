type Operation = {
    target: string;
    args: any[];
    command: string;
}


const METHODS = {
    AND: (a, b) => (a & b),
    OR: (a, b) => (a | b),
    NOT: a => new Uint16Array([~a])[0],
    LSHIFT: (a, b) => (a << b),
    RSHIFT: (a, b) => (a >> b)
};

const COMMAND_REGEX = /[A-Z]+/g;
const ARGUMENT_REGEX = /[a-z0-9]+/g;
const wires = new Map();

export function day7(input: string, resultWire: string) {


    /*for (const line of input.split('\n')) {

        const parsedOperation = operationParser(line);
        wires.set(parsedOperation.target, {command: parsedOperation.command, args: parsedOperation.args});
    }*/


    initWires(input);
    calculateValue(resultWire);
    const part1Result = wires.get(resultWire);
    initWires(input);
    wires.set('b', part1Result);
    calculateValue(resultWire);
    const part2Result = wires.get(resultWire);
    //console.log(wires)
    return {part1: part1Result, part2: part2Result};
}


function initWires(input: string) {
    input.split('\n').forEach(instruction => {
        const parsedInstruction = operationParser(instruction);
        wires.set(parsedInstruction.target, {command: parsedInstruction.command, args: parsedInstruction.args});
    });
}


function calculateValue(wireName: any) {

    const wire = wires.get(wireName);

    if (typeof wireName === 'number') return wireName;
    if (typeof wire === 'number') return wire;
    if (typeof wire === 'undefined') return undefined;
    //console.log(wire)
    if (!wire.command) {
        wires.set(wireName, calculateValue(wire.args[0]));
    } else {
        //console.log('command: ' + wire.command)
        wires.set(wireName, METHODS[wire.command](calculateValue(wire.args[0]), calculateValue(wire.args[1])));
    }

    return wires.get(wireName);
}


function operationParser(line: any): Operation {

    const args = line.match(ARGUMENT_REGEX)!;
    const command = line.match(COMMAND_REGEX)!;
    const target = args.pop()!;

    return {target: target, args: args.map(arg => isNaN(Number(arg)) ? arg : Number(arg)), command: command && command[0]};
}


