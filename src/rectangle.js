"use strict";
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
	get height(){
		return this._height;
	}
	get width(){
		return this._width;
	}
	set width(value){
		this._width = value;
	}
	set height(value){
		this._height = value;
	}



}

module.exports = Rectangle;
