export function day2(input: string): number {
    return calculateResult(input, wrappingPaper);
}


export function day2Part2(input: string): number {
    return calculateResult(input, ribbon);
}


function calculateResult(input: string, calculateHelper: Function): number {
    const boxes = toLines(input);

    return calculateAllBox(boxes, calculateHelper);
}


function calculateAllBox(boxes: string[], calculateHelper: Function): number {
    let result = 0;
    boxes.forEach(box => {
        result += calculateHelper(stringNumbers(box).map(Number));
    });
    return result;
}


function stringNumbers(box: string): string[] {
    return box.split('x');
}


function toLines(multilineInput: string): string[] {
    return multilineInput.split('\r\n');
}


function ribbon(size: number[]): number {
    const sideMin = Math.min(...size);
    const sideMax = Math.max(...size);
    size.splice(size.indexOf(sideMax), 1);
    size.splice(size.indexOf(sideMin), 1);
    const sideMid = size[0];

    return (sideMin + sideMid) * 2 + sideMin * sideMid * sideMax;
}


function wrappingPaper(size: number[]): number {
    const area1 = size[0] * size[1];
    const area2 = size[1] * size[2];
    const area3 = size[2] * size[0];

    return (area1 + area2 + area3) * 2 + Math.min(area1, area2, area3);
}