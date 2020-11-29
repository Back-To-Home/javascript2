// 1.Use strict
// added in ES 5
// use this for Valina Javascript.
'use strict';

// 2.Variable
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'minhyeok';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (donn't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

{
    age = 4;
    var age;
}
console.log(age);

// 3.Constant 변경되지 않는 값
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Mutable : let Immutable : const

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// starting
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting} type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob} type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true: any other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// 5.Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);

// object, real-life object, data structure
const hyeok = {name: 'hyeok', age: 20};
hyeok.name = 'hyeok2';
hyeok.age = '27';
console.log(hyeok);

