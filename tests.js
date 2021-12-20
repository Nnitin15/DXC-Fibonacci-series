let mocha = require('mocha');
let describe = mocha.describe;
let expect = chai.expect;
let chai = require('chai');
let assert = require('chai').assert;

chai.should();

let Fibonacci = require('./fibonacci');

describe('Fibonacci', () => {
    describe('test the VALID return values of the Fibonacci method', () => {
        let fib;
        beforeEach(() => {
            fib = new Fibonacci();
        });
        it('Must return  0', () => {
            expect(fib.fibonacci(0)).to.eql([0]);
        });
        it('Must return  0, 1', () => {
            expect(fib.fibonacci(1)).to.eql([0, 1]);
        });
        it('Must return  0, 1, 1', () => {
            expect(fib.fibonacci(2)).to.eql([0, 1, 1]);
        });
        it('Must return  0, 1, 1, 2', () => {
            expect(fib.fibonacci(3)).to.eql([0, 1, 1, 2]);
        });
        it('Must return  0, 1, 1, 2, 3', () => {
            expect(fib.fibonacci(4)).to.eql([0, 1, 1, 2, 3]);
        });
        it('Must return  0, 1, 1, 2, 3, 5', () => {
            expect(fib.fibonacci(5)).to.eql([0, 1, 1, 2, 3, 5]);
        });
        it('Must return  0, 1, 1, 2, 3, 5, 8', () => {
            expect(fib.fibonacci(6)).to.eql([0, 1, 1, 2, 3, 5, 8]);
        });
        it('Must return  0, 1, 1, 2, 3, 5, 8, 13', () => {
            expect(fib.fibonacci(7)).to.eql([0, 1, 1, 2, 3, 5, 8, 13]);
        });
        it('Must return  0, 1, 1, 2, 3, 5, 8, 13, 21', () => {
            expect(fib.fibonacci(8)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21]);
        });
        it('Must return  0, 1, 1, 2, 3, 5, 8, 13, 21, 34', () => {
            expect(fib.fibonacci(9)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        });
        it('Must return  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55', () => {
            expect(fib.fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        });
    });

    describe('test the INVALID return values of the Fibonacci method', () => {
        let fib;
        beforeEach(() => {
            fib = new Fibonacci();
        });
        it('Must not  return 0', () => {
            expect(fib.fibonacci(0)).to.not.eql([]);
        });
        it('Must not  return 0', () => {
            expect(fib.fibonacci(0)).to.not.eql([-1]);
        });
        it('Must not  return 0', () => {
            expect(fib.fibonacci(0)).to.not.eql([1]);
        });

        it('Must not  return 1', () => {
            expect(fib.fibonacci(1)).to.not.eql([]);
        });
        it('Must not  return 1', () => {
            expect(fib.fibonacci(1)).to.not.eql([-1]);
        });
        it('Must not  return 1', () => {
            expect(fib.fibonacci(1)).to.not.eql([0]);
        });
        it('Must not  return 1', () => {
            expect(fib.fibonacci(1)).to.not.eql([1]);
        });

        it('Must not  return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([]);
        });
        it('Must not  return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([1]);
        });
        it('Must not  return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([0, 1]);
        });

        it('Must not  return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([0, 1, 1, 2]);
        });
        it('Must not  return 2', () => {
            expect(fib.fibonacci(2)).to.not.eql([2]);
        });

    });
    

    
