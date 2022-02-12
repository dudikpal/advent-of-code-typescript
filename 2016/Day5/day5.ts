import { Md5 } from "md5-typescript";

export class Day5 {

    constructor(private input: string) {
    }


    part1() {

        let password = '';
        let counter = 0;

        while (password.length < 8) {

            const hash = Md5.init(this.input + counter);

            if (hash.startsWith('00000')) {

                password += hash.charAt(5);
            }

            counter++;
        }

        return password;
    }


    part2() {

        let password: string[] = new Array(8);
        let counter = 0

        while (password.filter(String).length < 8) {

            const hash = Md5.init(this.input + counter);
            const position = Number(hash.charAt(5));

            if (hash.startsWith('00000')) {

                if (isFinite(position)
                    && !password[position]
                    && position >= 0 && position < 8) {

                    password[position] = hash.charAt(6);
                }
            }

            counter++;
        }

        return password.join('');
    }
}