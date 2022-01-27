type Command = {
    param1: string;
    param2?: string | number;
    command: string;
    target: string;
}

export function day7(input: string, from: string) {

    let lines = input.split(/\n|\r\n/);
    //console.log(lines)
    const starters = lines.filter(line => line.match(/^\d+\s->/));
    console.log(starters)
    const values = new Map<string, number>();

    /*for (const line of lines) {
        values.set(line.match(/\w+$/)![0], 0);
    }*/

    let command;
    for (const starter of starters) {
        command = parseCommand(starter, values);
        commandProcessor(command, values);
        lines.splice(lines.indexOf(starter), 1);
    }

    console.log(values)
    while (lines.length > 0) {

        for (const line of lines) {
            console.log(line)
            command = parseCommand(line, values);
            if (command) {
                commandProcessor(command, values);
                lines.splice(lines.indexOf(line), 1);
            }
        }
    }

    /*const nextLine = lines.filter(line => line.match('/^' + source ));
    commandProcessor(nextLine[0], values);*/

    /*const commandLine = lines.filter(line => line.match(/d$/))[0];
    commandProcessor(commandLine, values)*/

    return values.get(from);
}


function parseCommand(commandLine: string, values: Map<string, number>): Command {
    let command;

    if (commandLine.match(/^\d+\s->/)) {
        command = 'INIT';
    } else if (commandLine.match(/^\D+\s->/)){
        command = 'FORWARD';
    } else {
            command = commandLine.match(/[A-Z]+/)![0];
        }
    //console.log(commandLine)
    console.log(commandLine.match(/\w+$/))
    console.log(commandLine.match(/\w+$/)[0])
    const target = commandLine.match(/\w+$/)[0];
    let firstParam;
    let secondParam;
    let source;
    let step;

    switch (command) {

        case 'AND':
            firstParam = commandLine.match(/^\w+/)![0];
            console.log(firstParam)
            secondParam = commandLine.match(/\w+(?=\s->)/)![0];
            console.log(secondParam)
            if (values.has(firstParam) && values.has(secondParam)) {
                return {param1: firstParam, param2: secondParam, command: command, target: target};
            }
            break;

        case 'OR':
            firstParam = commandLine.match(/^\w+/)![0];
            secondParam = commandLine.match(/\w+(?=\s->)/)![0];
            return {param1: firstParam, param2: secondParam, command: command, target: target};

        case 'NOT':
            source = commandLine.match(/\w+(?=\s->)/)![0];
            return {param1: source, command: command, target: target};

        case 'LSHIFT':
            source = commandLine.match(/^\w+/)![0];
            step = +commandLine.match(/(?<=SHIFT\s)\w/)![0];
            return {param1: source, param2: step, command: command, target: target};

        case 'RSHIFT':
            source = commandLine.match(/^\w+/)![0];
            step = +commandLine.match(/(?<=SHIFT\s)\w/)![0];
            return {param1: source, param2: step, command: command, target: target};

        case 'FORWARD':
            source = commandLine.match(/^\w+/)![0];
            return {param1: source, command: command, target: target};

        case 'INIT':
            const initValue = +commandLine.match(/^\d+/)![0];
            return {param1: initValue.toString(), command: command, target: target};
    }
}

function commandProcessor(command: Command, values: Map<string, number>) {
    if (!command.command) {
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

        case 'INIT':
            values.set(command.target, +command.param1);
            break;
    }
}