let chai = require('chai');
let assert = require('chai').assert;
let mocha = require('mocha');
let describe = mocha.describe;
let expect = chai.expect;

chai.should();

let Fibonacci = require('./fibo');

describe('Fibonacci', () => {


    describe('test the INVALID return values of the Fibonacci method', () => {
        let fib;
        beforeEach(() => {
            fib = new Fibonacci();
        });
        it('should not return 0', () => {
            expect(fib.fibonacci(0)).to.not.eql([]);
        });
        it('should not return 0', () => {
            expect(fib.fibonacci(0)).to.not.eql([-1]);
        });
        it('should not return 0', () => {
            expect(fib.fibonacci(0)).to.not.eql([1]);
        });

        it('should not return 1', () => {
            expect(fib.fibonacci(1)).to.not.eql([]);
        });
        it('should not return 1', () => {
            expect(fib.fibonacci(1)).to.not.eql([-1]);
        });
        it('should not return 1', () => {
            expect(fib.fibonacci(1)).to.not.eql([0]);
        });
        it('should not return 1', () => {
            expect(fib.fibonacci(1)).to.not.eql([1]);
        });

        it('should not return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([]);
        });
        it('should not return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([1]);
        });
        it('should not return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([0, 1]);
        });

        it('should not return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([0, 1, 1, 2]);
        });
        it('should not return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([2]);
        });

    });

});
