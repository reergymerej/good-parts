// chapter: Objects

var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};



var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};



console.log(stooge["first-name"]);     // "Jerome"
console.log(flight.departure.IATA);    // "SYD"



console.log(stooge["middle-name"]);    // undefined
console.log(flight.status);            // undefined
console.log(stooge["FIRST-NAME"]);     // undefined



var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";



console.log(flight.equipment);                              // undefined
try {
    console.log(flight.equipment.model);                        // throw "TypeError"
} catch (e) {
    
}
console.log(flight.equipment && flight.equipment.model);    // undefined



stooge['first-name'] = 'Jerome';



stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';



var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
    // nick is 'Curly' because x and stooge
    // are references to the same object

var a = {}, b = {}, c = {};
    // a, b, and c each refer to a
    // different empty object
a = b = c = {};
    // a, b, and c all refer to
    // the same empty object



if (typeof Object.create !== 'function') {
     Object.create = function (o) {
         var F = function () {};
         F.prototype = o;
         return new F();
     };
}
var another_stooge = Object.create(stooge);



another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';



stooge.profession = 'actor';
console.log(another_stooge.profession);    // 'actor'



console.log(typeof flight.number);      // 'number'
console.log(typeof flight.status);      // 'string'
console.log(typeof flight.arrival);     // 'object'
console.log(typeof flight.manifest);    // 'undefined'



console.log(typeof flight.toString);    // 'function'
console.log(typeof flight.constructor); // 'function'



console.log(flight.hasOwnProperty('number'));         // true
console.log(flight.hasOwnProperty('constructor'));    // false



var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log(name + ': ' + another_stooge[name]);
    }
}



var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (i = 0; i < properties.length; i += 1) {
    console.log(properties[i] + ': ' +
            another_stooge[properties[i]]);
    }




console.log(another_stooge.nickname);    // 'Moe'

// Remove nickname from another_stooge, revealing
// the nickname of the prototype.

delete another_stooge.nickname;

console.log(another_stooge.nickname);    // 'Curly'



var MYAPP = {};



MYAPP.stooge = {
    "first-name": "Joe",
    "last-name": "Howard"
};

MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};


