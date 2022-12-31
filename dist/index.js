"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz = (num) => {
    if (num % 3 === 0) {
        return 'Fizz';
    }
    else if (num % 5 === 0) {
        return 'Buzz';
    }
    else {
        return num;
    }
};
exports.default = fizzbuzz;
