'use strict';

const calc = require('../calc');
const expect = require('chai').expect;

describe('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).mod(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test calculator
    it('should store the actual value', () => {
        const result = calc(3);
        expect(result.v).to.equal(3);
    });
    
    it('should add any value to the actual', () => {
        const result = calc(3).add(5);
        expect(result.v).to.equal(8);
    });
    
    it('should decrease the actual value by the given', () => {
        const result = calc(3).minus(2);
        expect(result.v).to.equal(1);
    });
    
    it('should return square root of the actual value', () => {
        const result = calc(4).sqrt();
        expect(result.v).to.equal(2);
    });
    
    it('should multiply the given values', () => {
        const result = calc(3).times(10);
        expect(result.v).to.equal(30);
    });
    
    it('should divide the actual value by the given divisor', () => {
        const result = calc(10).div(2);
        expect(result.v).to.equal(5);
    });

    it('should return the modulo of the given dividend and divisor', () => {
        const result = calc(10).modulo(5);
        expect(result.v).to.equal(0);
    });

    it.skip('should throw error for division by zero', () => {
        const result = calc(5).div(0);
        expect(result.v).to.be.a(string).which.has('Division by 0 is not possible!');
    });

    it('should perform a series of calculations with the given values', () => {
        const result = calc(3).add(4).minus(3).times(6)
        expect(result.v).to.equal(24);
    });
});