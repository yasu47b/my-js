var assert = require('chai').assert;
var sayHello = require('../src/module.js');

describe('hello test', function(){
    it('sayHello function', function(){
        assert.equal('hello', sayHello());
        assert.equal('hello', sayHello('hello'));
	assert.notEqual('bye', sayHello());
    });
});
