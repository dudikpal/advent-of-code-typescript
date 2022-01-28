type Command = {
    param1: string;
    param2?: string;
    command: string;
    target: string;
}

export function day7(input: string, from: string) {

    let lines = input.split(/\n|\r\n/);
    const starters = lines.filter(line => line.match(/^\d+\s->/));
    const values = new Map<string, number>();

    let command;
    for (const starter of starters) {
        command = parseCommand(starter, values);
        commandProcessor(command, values);
        lines.splice(lines.indexOf(starter), 1);
    }

    while (lines.length > 0) {

        for (const line of lines) {
            command = parseCommand(line, values);
            if (command) {
                commandProcessor(command, values);
                lines.splice(lines.indexOf(line), 1);
            }
        }
    }

    return values.get(from);
}


function parseCommand(commandLine: string, values: Map<string, number>): Command {
    let command;

    if (commandLine.match(/^\d+\s[A-Z]/)) {
        command = 'PARAM1_NUMBER';
    } else if (commandLine.match(/^\d+\s->/)) {
        command = 'INIT';
    } else if (commandLine.match(/^[a-z]+\s->/)){
        command = 'FORWARD';
    } else {
            command = commandLine.match(/[A-Z]+/)![0];

    }

    //console.log(commandLine)
    /*console.log(commandLine.match(/\w+$/))
    console.log(commandLine.match(/\w+$/)[0])*/
    const target = commandLine.match(/\w+$/)![0];
    /*if (target === 't') {
        console.log(commandLine)
    }*/
    let firstParam;
    let secondParam;
    let source;
    let step;

    switch (command) {

        case 'AND':
            firstParam = commandLine.match(/^\w+/)![0];
            secondParam = commandLine.match(/\w+(?=\s->)/)![0];
            if (values.has(firstParam) && values.has(secondParam)) {
                return {param1: firstParam, param2: secondParam, command: command, target: target};
            }
            break;

        case 'OR':
            firstParam = commandLine.match(/^\w+/)![0];
            secondParam = commandLine.match(/\w+(?=\s->)/)![0];
            if (values.has(firstParam) && values.has(secondParam)) {
                return {param1: firstParam, param2: secondParam, command: command, target: target};
            }
            break;

        case 'NOT':
            source = commandLine.match(/\w+(?=\s->)/)![0];
            if (values.has(source)) {
                return {param1: source, command: command, target: target};
            }
            break;

        case 'LSHIFT':
            source = commandLine.match(/^\w+/)![0];
            step = commandLine.match(/(?<=SHIFT\s)\w/)![0];
            if (values.has(source)) {
                return {param1: source, param2: step, command: command, target: target};
            }
            break;

        case 'RSHIFT':
            source = commandLine.match(/^\w+/)![0];
            step = commandLine.match(/(?<=SHIFT\s)\w/)![0];
            if (values.has(source)) {
                return {param1: source, param2: step, command: command, target: target};
            }
            break;

        case 'FORWARD':
            source = commandLine.match(/^\w+/)![0];
            if (values.has(source)) {
                return {param1: source, command: command, target: target};
            }
            break;

        case 'PARAM1_NUMBER':
            firstParam = '1';
            secondParam = commandLine.match(/\w+(?=\s->)/)![0];
            if (values.has(secondParam)) {
                return {param1: firstParam, param2: secondParam, command: command, target: target};
            }
            break;

        case 'INIT':
            const initValue = +commandLine.match(/^\d+/)![0];

            return {param1: initValue.toString(), command: command, target: target};

        default:
            console.log('default ág')
    }
}

function commandProcessor(command: Command, values: Map<string, number>) {
    if (command.command === undefined) {
        console.log('nincs')
    }

    switch (command.command) {
        case 'AND':
            values.set(command.target, values.get(command.param1)! & values.get(<string>command.param2)!)
            break;

        case 'OR':
            values.set(command.target, values.get(command.param1)! | values.get(<string>command.param2)!)
            break;

        case 'NOT':
            if (command.param2 === undefined) {
                //console.log('para2')
            }
            //console.log(command.target + ', ' + command.param1 + ', ' + command.param2)
            values.set(command.target, new Uint16Array([~values.get(command.param1)!])[0]);
            break;

        case 'LSHIFT':
            values.set(command.target, values.get(command.param1)! << +command.param2!);
            break;

        case 'RSHIFT':
            values.set(command.target, values.get(command.param1)! >> +command.param2!);
            break;

        case 'FORWARD':
            values.set(command.target, values.get(command.param1)!);
            break;

        case 'PARAM1_NUMBER':
            values.set(command.target, +command.param1 & values.get(<string>command.param2)!);
            break;

        case 'INIT':
            values.set(command.target, +command.param1);
            break;
    }
}