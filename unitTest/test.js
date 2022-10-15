var assert = require('assert');
var mul = require('../linearPoint')
describe("Unit tests", () => {
    describe("Test case 1 #mul()", ()=> {
        it('should return 6 when m is 2, x is 1 and c is 4', () => {
            assert.equal(mul(2,1,4),6);
        });
    });

    describe("Test case 2 #mul()", ()=> {
        it('should return 4 when m is 2, x is 0 and c is 4', () => {
            assert.equal(mul(2,0,4),4);
        });
    });

    describe("Test case 1 #mul()", ()=> {
        it('should return 2 when m is 2, x is -1 and c is 4', () => {
            assert.equal(mul(2,-1,4),2);
        });
    });
})