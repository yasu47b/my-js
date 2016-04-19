//"use strict";
var assert = require('chai').assert;
var sayHello = require('../src/module.js');

describe('hello test', function(){
    it('sayHello function', function(){
        assert.equal('hello', sayHello());
        assert.equal('hello', sayHello('hello'));
	assert.typeOf(sayHello(), 'string');
	assert.notEqual('bye', sayHello());
    });
});
