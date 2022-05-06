export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let isBuzz = n % 3 === 0;
        let isFizz = n % 5 === 0;
        if (isBuzz && isFizz ) {
            this.message = 'FizzBuzz';
        } else if (isFizz) {
            this.message = 'Fizz';
        } else if (isBuzz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}