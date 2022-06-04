const FizzBuzzHelper = (value: number): string => {
    if(typeof value === 'number') {
        if(value%3 === 0 && value%5 !== 0){
            return 'Fizz'
        }else if(value%3 !== 0 && value%5 === 0){
            return 'Buzz'
        }else if(value%3 === 0 && value%5 === 0){
            return 'FizzBuzz'
        }else{
            return value.toString();
        }
    } else {
        return 'number type only'
    }
}

export default FizzBuzzHelper;

if (import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest

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
};