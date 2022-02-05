type Neighbour = {
    name: string;
    happiness: number;
};

type Person = {
    name: string;
    neighbours: Neighbour[];
};

export class Day13 {

    persons!: Person[];

    constructor(
        private input: string
    ) {
    }

    part1() {
        this.inputParser(this.input);
        let nextPerson = this.persons[0];
        let resultNames = [nextPerson.name];
        let nextNeighbour = this.getMaxHappiness(nextPerson.name);
        let resultHappiness = nextNeighbour.happiness;

        for (let i = 0; i < this.persons.length - 1; i++) {

            nextPerson = this.persons.find(person =>
                person.name === this.getMaxHappiness(nextPerson.name).name)!;
            nextNeighbour = this.getMaxHappiness(nextPerson.name);
            resultNames.push(nextPerson.name);
            resultHappiness += nextNeighbour.happiness;
            nextPerson.neighbours.splice(nextPerson.neighbours.indexOf(nextNeighbour), 1);
        }

        const lastPerson = this.persons.find(person =>
            person.name === this.getMaxHappiness(resultNames[resultNames.length - 1]).name)!;
        resultHappiness += this.getMaxHappiness(lastPerson.name).happiness;
        resultHappiness += this.getSecondMaxHappiness(this.persons[0].name).happiness;
        console.log(resultNames)
        console.log(resultHappiness)
        console.dir(this.persons, {depth: null})
        return resultHappiness;
    }


    getSecondMaxHappiness(name: string): Neighbour {
        const person = this.persons.find(person => person.name === name);
        return person!.neighbours
            .sort((a, b) => b.happiness - a.happiness)
            [1];
    }


    getMaxHappiness(name: string): Neighbour {
        const person = this.persons.find(person => person.name === name);
        return person!.neighbours
            .sort((a, b) => b.happiness - a.happiness)
            [0];
    }


    inputParser(input: string) {
        this.persons = [];
        const lines = input.split('\n');
        const PERSON_NAME_REGEX = /^\w+/;
        const NEIGHBOUR_NAME_REGEX = /\w+(?=\.$)/;
        const HAPPINESS = /\w+\s\d+/;
        const HAPPINESS_VALUE = /\d+/;
        for (const line of lines) {
            const personName = line.match(PERSON_NAME_REGEX)![0];
            const neighbourName = line.match(NEIGHBOUR_NAME_REGEX)![0];
            const happinessNumber = +line.match(HAPPINESS_VALUE)![0];
            const happiness = !line.match(HAPPINESS)![0].startsWith('gain') ? happinessNumber * -1 : happinessNumber;
            const person = this.persons.find(person => person.name === personName);
            if (!person) {

                this.persons.push({
                    name: personName,
                    neighbours: [{
                        name: neighbourName,
                        happiness: happiness
                    }]
                });
            } else {

                person.neighbours.push({
                    name: neighbourName,
                    happiness: happiness
                });
            }
        }
    }
}