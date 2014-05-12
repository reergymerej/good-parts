'use strict';

var foo = function () {
	var a = 3, b = 5;


	var bar = function () {
		var b = 7, c = 11;

		// a = 3, b = 7, c = 11
		debugger;
		
		a += b + c;

		// a = 21, b = 7, c = 11
		debugger;
	};

	// a = 3, b = 5, c = undefined
	debugger;

	bar();

	// a = 21, b = 5, c = undefined
	debugger;	
};

exports.foo = foo;