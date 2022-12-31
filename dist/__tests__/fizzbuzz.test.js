"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
describe('Fizzbuzz', () => {
    test('should return fizz when divisible by 3', () => {
        expect((0, __1.default)(3)).toEqual('Fizz');
    });
    test('should return the number when not divisible by 3', () => {
        expect((0, __1.default)(1)).toEqual(1);
    });
    test('should return buzz when divisible by 5', () => {
        expect((0, __1.default)(5)).toEqual('Buzz');
    });
    test('should return fizzbuzz when divisible by 15', () => {
        expect((0, __1.default)(15)).toEqual('FizzBuzz');
    });
});
