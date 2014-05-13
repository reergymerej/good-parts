var obj = (function () {

    // This function is invoked immediately.
    
    // value's scope is this function
    var value = 0;

    // This object is returned and assigned to "obj".
    return {
        inc: function (inc) {

            // The reference to "value" in this
            // function has created a closure.
            // Check it out when debugging.
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    };
}());

// "obj" is now the object returned above
// The function is done executing, so "value"
// would normally be garbage collected.  However, the
// functions in the object created a closure, so
// "value" still exists, though it is only accessible
// through the methods.


console.log(obj);

console.log(obj.getValue());

obj.inc();
obj.inc();
obj.inc(7);

console.log(obj.getValue());