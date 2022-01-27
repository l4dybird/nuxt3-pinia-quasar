import { describe, it, expect } from 'vitest'
import FizzBuzzHelper from '../helper/FizzBuzzHelper'

describe('FizzBuzz', () => {
    it('Multiple of 3', () => {
        expect(FizzBuzzHelper(3)).toBe('Fizz');
    });

    it('Multiple of 5', () => {
        expect(FizzBuzzHelper(5)).toBe('Buzz');
    });

    it('Multiple of 15', () => {
        expect(FizzBuzzHelper(15)).toBe('FizzBuzz');
    });

    it('other number', () => {
        expect(FizzBuzzHelper(1)).toBe('1');
    });

    it('other type', () => {
        expect(FizzBuzzHelper(null)).toBe('number type only');
    });
});