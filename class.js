'use strict';

// Object-oriented programing
// class: template
// object: instance of a class
// JavaScript calsses
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
// 원래 js는 클래스가 없었다...??


// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const hyeok = new Person('hyeok', 20);
console.log(hyeok.name);
console.log(hyeok.age);
hyeok.speak();

// 2.Getter and Setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Hyeok', 'JOb', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https
// 생성자를 설정 안하고 바로 가능한데 최신기술임. 아직 safari에서도 지원x
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
//const article1 = new Article(2);
// static접근하려면 클래스. 으로 접근한다.
Article.printPublisher();

// Inheritance
// a way for one class to extend onother class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{

    draw() {
        // 부모의 draw도 부르고싶다.
        // 오버라이딩한 삼각형 모양 출력도 함께
        super.draw();
        console.log('▲');
    }

    //삼각형 넓이는 재정의 Overriding
    getArea(){
        return (this.width * this.height)/2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6.Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle); //인스턴스가 아님
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape); // 상속해서 맞음
console.log(triangle instanceof Object); // 모든 클래스는 오브젝트를 상속
