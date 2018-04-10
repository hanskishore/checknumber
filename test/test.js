'use strict';

var expect = require('chai').expect;
var num = require('../index');

describe('isSquare', function(){
    it('should be true', function(){
        var result = num.isSquare(16);
        expect(result).to.equal(true);
    });

    it('should be false', function(){
        var result = num.isSquare(5);
        expect(result).to.equal(false);
    });

    it('should be false', function(){
        var result = num.isNumber(NaN);
        expect(result).to.equal(false);
    });

    it('should be true', function(){
        var result = num.isPrime(13);
        expect(result).to.equal(true);
    });
    
    it('should be false', function(){
        var result = num.isPrime(297);
        expect(result).to.equal(false);
    });

    it('should be 3', function(){
        var result = num.lowestFactor(297);
        expect(result).to.equal(3);
    })
})