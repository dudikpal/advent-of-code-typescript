
export function day8(input: string) {

    const codeLength = input.length;

    // part 1
    const part1StringLength = input.replace(/^"|"$/gm, '')
        .replace(/\\\\/gm, '£')
        .replace(/\\"/gm, '?')
        .replace(/\\x[0-9a-f]{2}/gm, "@")
        .length;

    const part1Result = codeLength - part1StringLength;

    // part 2
    const part2StringLength = input.replace(/^"|"$/gm, '---')
        .replace(/\\/g, '--')
        .replace(/"/g, '--')
        .length;

    const part2Result = part2StringLength - codeLength;

    return {part1: part1Result, part2: part2Result};
}

