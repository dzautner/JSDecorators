Python like decorators in Javscript with psudo operator oveloading.
=====

First thing, I would like to state that this is just a small experiment and should not be used for anything more than satisfying one's curiosity. 

The script overwrites Function.prototype.valueOf. Something that shouldn't be done in any case.

This is an experiment continuing my implementation of [nix like pipe syntax for JavaScript](https://github.com/dzautner/jsPipe). 

This small experiment allows you to use decorators with cool syntax like this:

```javascript
+memoize
+function longCalculation() {
	...
}


+route("/user")
+function user() {
	
} 
```
You can read a bit more about the concept of fake operator overloading using valueOf on my other JS experiment:
https://github.com/dzautner/jsPipe