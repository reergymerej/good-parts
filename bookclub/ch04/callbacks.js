var foo = {
    bar: function (callback, scope) {
        console.log('bar has executed');

        setTimeout(function () {
            callback.apply(scope);
        }, 10);
    },
    baz: 'I am the baz.'
};

var quux = {
    baz: 'I am another baz.'
};

var printBaz = function () {
    console.log('printBaz...');

    if (this.global) {
        console.log('[global scope]');
    } else {
        console.log('scope:', this);
    }

    console.log(this.baz);
};

// Use foo as scope for callback.
foo.bar(printBaz, foo);

// Use quux as scope for callback.
foo.bar(printBaz, quux);

// Don't provide a scope for callback.
foo.bar(printBaz);