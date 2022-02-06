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
    permutations: Neighbour[] = [];

    constructor(
        private input: string
    ) {
    }

    part1() {
        this.inputParser();
        //console.dir(this.persons, {depth: null})

        for (let i = 0; i < this.persons.length; i++) {
            for (let j = this.persons[i].neighbours.length - 1; j >= 0; j--) {
                const name1 = this.persons[i].name;
                const name2 = this.persons[i].neighbours[j].name;
                const happiness = this.persons[i].neighbours[j].happiness
                const indexOfNeighbour = this.persons.indexOf(this.persons.find(person => person.name === name2)!);
                const indexOfPersonInNeighbour = this.persons[indexOfNeighbour].neighbours.indexOf(this.persons[indexOfNeighbour].neighbours.find(neigh => neigh.name === name1)!);

                const happiness2 = this.persons[indexOfNeighbour].neighbours[indexOfPersonInNeighbour].happiness;
                this.persons[i].neighbours.splice(j, 1);
                this.persons[indexOfNeighbour].neighbours.splice(indexOfPersonInNeighbour, 1);
                this.permutations.push({name: `${name1}, ${name2}`, happiness: happiness + happiness2});
            }
        }
        this.permutations.sort((a, b) => b.happiness - a.happiness);
        console.log(this.permutations)

        /*let person = this.persons[0];
        let names = [person.name];
        let neighbour = person.neighbours[0];
        person.neighbours.splice(person.neighbours.indexOf(neighbour), 1);
        let sumHappiness = neighbour.happiness;

        for (let i = 0; i < this.persons.length - 2; i++) {
            //person.neighbours.splice(person.neighbours.indexOf(neighbour), 1);
            person = this.persons.find(person => person.name === neighbour.name)!;
            sumHappiness += person.neighbours.find(person => person.name === names[names.length - 1])!.happiness;
            person.neighbours.splice(person.neighbours.indexOf(person.neighbours.find(person => person.name === names[names.length - 1])!), 1);

            while (names.includes(person.neighbours[0].name)) {
                person.neighbours.splice(0, 1);
            }
            neighbour = person.neighbours[0];
            names.push(person.name);
            sumHappiness += neighbour.happiness;
        }

        person = this.persons.find(person => person.name === neighbour.name)!;
        sumHappiness += person.neighbours.find(person => person.name === names[names.length - 1])!.happiness;
        sumHappiness += person.neighbours.find(neigh => neigh.name === this.persons[0].name)!.happiness;
        sumHappiness += this.persons[0].neighbours.find(neigh => neigh.name === person.name)!.happiness;*/

        return sumHappiness;
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


    inputParser() {
        this.persons = [];
        const lines = this.input.split(/\n|\r\n/);
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
        this.persons.forEach(
            person => person.neighbours.sort((a, b) => b.happiness - a.happiness)
        );
    }
}