/* this keyword */

// console.log(this === window);

// a = 37;
// console.log(window.a);

// this.b = 'lakshan';
// console.log(b);

// this.b = "MDN";
// console.log(window.b);

// const test = {
//     prop: 42,
//     func: function() {
//         return this.prop;
//     }
// }
// console.log(test.func());

// function f1() {
//     return this;
// }
// console.log('e');
// console.log(f1() === window)

// function f2() {
//     'use strict';
//     return this;
// }
// console.log(f2() === undefined);

// class Example {
//     constructor() {
//         const proto = Object.getPrototypeOf(this);
//         console.log(Object.getOwnPropertyNames(proto));
//     }

//     first() {}
//     second() {}
//     static third() {}
// }

// new Example();

// obj = {name: 'myobj'};
// console.log(obj);
// console.log(Object.getPrototypeOf(obj));

// [ ] - Learn Object.create
// Higher Order Functions
// Hoisting
// Clousure