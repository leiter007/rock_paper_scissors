function Rps() {
    this.check = (number) => {
        if (number == 0 || isNaN(number)) {
            return 'Please put in a valid number';
        } else if (number % 15 === 0) {
            return 'FizzBuzz';
        } else if (number % 5 === 0) {
            return 'Buzz';
        } else if (number % 3 === 0) {
            return 'Fizz';
        } else {
            return number
        }
    } 
}