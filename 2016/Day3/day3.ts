
export class Day3 {

    private readonly triangles: string[][];
    private trianglesPart2!: string[][];

    constructor(
        private input: string
    ) {
        this.triangles = input.match(/\d+\s+\d+\s+\d+/g)!
            .map(line => line.split(/\s+/));
    }


    part1() {
        return this.triangles
            .filter(triangle => Day3.isTriangle(triangle))
            .reduce(acc => acc + 1, 0);
    }


    part2() {

        this.trianglesPart2 = [];

        for (let i = 0; i < this.triangles.length; i += 3) {
            for (let j = 0; j < 3; j++) {
                this.trianglesPart2.push([
                    this.triangles[i][j],
                    this.triangles[i + 1][j],
                    this.triangles[i + 2][j]
                ]);
            }
        }

        return this.trianglesPart2
            .filter(triangle => Day3.isTriangle(triangle))
            .reduce(acc => acc + 1, 0);
    }


    private static isTriangle(triangle: string[]) {
        const a = +triangle[0];
        const b = +triangle[1];
        const c = +triangle[2];

        return a + b > c && a + c > b && b + c > a;
    }
}