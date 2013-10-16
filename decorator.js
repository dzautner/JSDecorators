var Decorator = (function () {
	
	//A variable to store the decorator that is going to be used next
	var activeDecorator;
	
	function Decorator (decorator) {
		this.decorator = decorator;

		//when valueOf is triggered on a function
		Function.prototype.valueOf = function () {
			
			//check if there is a decorator to add to it
			if (activeDecorator) {

				//change the function to a decorataed version of it.
				//The function is changed/declared in the global scope because to my knowledge that's the only way.
				window[this.name] = activeDecorator(this);

				//null the active decorator var
				activeDecorator = null;
			}

			//return the actual function like nothing happened here
			return this;
		};
	}

	//just sets the active decorator when triggering the valueOf of a Decorator object
	Decorator.prototype.valueOf = function() {
		activeDecorator = this.decorator;
	};

	return Decorator;

}())


//Initialize new Decorator object
var memoize = new Decorator(function (fn) {
	return function () {
		//set the arguments which the function is called in to a string.
		var args = "";
		for (idx in arguments) {
			args += "," + arguments[idx];
		}
		//set the key to store the result of the function call. base on the function name and called args
		var key = fn.name + args;
		//initialize a meomoized object if doesn't exist it
		window['memoized'] = window['memoized'] || {};
		//if the function call is not memoized yet, call the function and store the result in the 'memoized' object.
		if (!window['memoized'][key]) {
			window['memoized'][key] = fn.apply(window, arguments);
		}

		//return function result 
		return window['memoized'][key];
	}
});

/**
 * There you go.
 * Python like decorator syntax
 */
+cache
+function longRunningFunction() {
	var start = new Date,
		i=9999999,
		end;

	while (i>0) { 
		i--; 
		document.querySelector("body"); 
	} 
	end = new Date;
	console.log("DONE IN ", end-start);
	return "hey";
}


+cache
+function pow(n) {
	return n**n;
}

