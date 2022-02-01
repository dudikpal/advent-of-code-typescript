export function day10(input: number, repeat: number) {
    
    let num = input.toString();
    const regex = /(.)\1*/g;

    for (let i = 0; i < repeat; i++) {

        const parts = num.match(regex)!;
        num = '';
        for (const part of parts) {
            num = num.concat(part.length.toString());
            num = num.concat(part[0].toString());
        }
    }

    return num.length;
}