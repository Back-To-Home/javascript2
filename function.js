// Function
// - fundamental building block in the program
// - subprogram can be user multiple times
// -performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomthing, comand, verb
// e.g. createCarAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const hyeok = {name: 'hyeok'};
changeName(hyeok);
console.log(hyeok);

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
    if(from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// 위와 같은 방법
function showMessage(message, from = 'unknown')  {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // for of 반복문
    for (const arg of args){
        console.log(arg);
    }

    // for each 반복문
    args.forEach((arg) => console.log(arg));
}
printAll('draem', 'coding', 'hyeok');

// 5. Local scope
// 안에서는 밖을 볼 수 있지만, 밖에서는 안을 볼 수 없다.
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);   // 자식은 부모를 참조 가능
        let childMessage = 'hello';
    }
    // console.log(childMessage); 부모가 자식을 참조는 불가
}
printMessage();

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10) {
        return; // 조건이 맞지 않을 때는 빨리 return 으로 빠져나오는게 좋다.
    }

    // long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression - 함수가 선언 된 후에 호출 가능.
// a function declaration can be called earlier than it is defined. (hoisted)
// 함수가 선언 되기 전에도 호출 가능 호이스팅!
// a function expression is created when the excution reaches it.

const print = function() {
    //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
// 함수를 전달해서 상황에 맞으면 전달된 함수를 불러라 = 콜백
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes');
}

// named function
// better debugging in debugger's stack traces
// recursions
// 디버깅할때 스택트레이스 보려고 print 붙여서 쓴다.
// 함수안에서 함수 자신을 부르는것 recursions - 피보나치, 반복되는 평균값 컴퓨터에 좋지는 않음.
const printNO = function print() {
    console.log('no');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint');
};

const simplePrint = () => console.log('simplePrint');

const add = function (a,b) {
    return a + b;
}

const add = (a,b) => a + b; 

// IIFE: immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();










