
type Room = {
    name: string;
    sectorID: number;
    checksum: string;
}

export class Day4 {

    private rooms: Room[];

    constructor(
        private input: string
    ) {
        this.rooms = this.initRooms();
    }


    part1() {

        let sumID = 0;

        for (const room of this.rooms) {

            sumID += this.getSectorIDFromRealRoom(room);
        }

        return sumID;
    }


    part2() {

        for (const room of this.rooms) {

            const sectorID = this.getSectorIDFromRealRoom(room);

            if (sectorID !== 0) {

                for (let i = 0; i < room.sectorID % 26; i++) {

                    room.name = this.decryptor(room.name);
                }
            }

            if (room.name.includes('northpole')) {
                return room.sectorID;
            }
        }
    }


    private decryptor(name: string) {

        let letters = name.split('');

        letters.forEach((letter, index, arr) => {
                if (letter !== '-') {
                    arr[index] = String.fromCharCode((letter.charCodeAt(0) - 96) % 26 + 97);
                } else {
                    arr[index] = letter;
                }
            });

        return letters.join('');
    }


    private getSectorIDFromRealRoom(room: Room): number {

        let counter: {[key: string]:  number} = {};

        room.name
            .replace(/-/g, '')
            .split('')
            .filter(letter => room.name.includes(letter))
            .forEach((letter: string) => {
                if (counter[letter]) {
                    counter[letter]++
                } else {
                    counter[letter] = 1;
                }
            });

        const sortedName = room.name
            .replace(/-/g, '')
            .split('')
            .sort((letter1, letter2) => {
                return counter[letter2] - counter[letter1] ||
                    letter1.charCodeAt(0) - letter2.charCodeAt(0);
            })
            .join('');

        if (Day4.isRealRoom(sortedName, room.checksum)) {
            return room.sectorID;
        } else {
            return 0;
        }
    }


    private static isRealRoom(name: string, checksum: string): boolean {

        return checksum === [...new Set(name)].join('').slice(0, 5);

    }


    private initRooms(): Room[] {

        const regexName = /^\D+/g;
        const regexSectorID = /\d+/g;
        const regexChecksum = /(?<=\[)\w+(?=])/g;

        const lines = this.input.split(/\r?\n/);
        let rooms: Room[] = [];

        for (const line of lines) {

            const name = line.match(regexName)![0];
            const sectorID = +line.match(regexSectorID)![0];
            const checksum = line.match(regexChecksum)![0];

            rooms.push({name, sectorID, checksum});
        }

        return rooms;
    }
}