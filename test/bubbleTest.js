var assert = require('assert');
const chai = require('chai');

const expect = require('chai').expect;
const BubbleSort = require('../BubbleSort.js');


describe("Nagative case to Bubble sorting", function () {
    it("Should sort array ", function () {
        var source = [19, 5, 0, 1, 5, 8, 13, -3, 2];
        var result = [-3, 0, 1, 2, 5, 5, 8, 13, 19];
        expect(BubbleSort(source)).to.deep.equal(result);
    });
});

