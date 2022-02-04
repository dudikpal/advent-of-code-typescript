
export function part1(input: string) {

    const numbers = input.match(/-?\d+/g) || [];

    return numbers.reduce((acc, curr) => +acc + +curr, 0)
}


export function part2(input: string) {

    const json = JSON.parse(input, (key, value) => {

        if (!Array.isArray(value)) {

            return Object.keys(value)
                .map(key => value[key])
                .indexOf('red') !== -1 ? {} : value;
        }
        return value;
    });

    return JSON.stringify(json)
        ?.match(/-?\d+/g)
        ?.reduce((acc, curr) => acc + +curr, 0)
        ?? 0;
}