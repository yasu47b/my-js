"use strict";
let assert = require('chai').assert,
    path = require('path');

let Rectangle = require(path.join(__dirname, '../src/', 'rectangle.js'));

let rectangle = new Rectangle(2,5);
describe('es6 Rectangle', function(){
	it('#width', function(){
		assert.equal(2, rectangle.width);
	it('#height', function(){
		assert.equal(2, rectangle.height);
	});
});
});
