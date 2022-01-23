export function day1(input: string) {

    return input.match(/\(/g)!.length - input.match(/\)/g)!.length;
}

export function day1Part2(input: string) {
    let floor = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(') {
            floor++;
        } else {
            floor--;
        }

        if (floor === -1) {
            return i + 1;
        }
    }
}