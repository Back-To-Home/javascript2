// Objects
// one of the Javascript's data type
// a collection of related data and/or functionality
// Nearly all objects in Javascript are instances of Object

//const name = 'hyeok';   //string
//const age = 4;          //number
//print(name, age); 

// function print(name, age){
//     console.log(name);
//     console.log(age);
// }

// 아래 const의 오브젝트로 관리하면 이렇게 안해도 됨

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax 문법
const obj2 = new Object(); // 'object constructor' syntax 문법

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const hyeok = {name: 'hyeok', age: 4};  //Javascript에서는 이렇게 괄호로 오브젝트 선언이 가능하다.
print(hyeok);

// with Javascript magic? (dynamically typed language)
// can add properties later
hyeok.hasJob = true; // 뒤늦게 이렇게 추가하는 행동, javascript는 이런 미친동작이 가능하다. 추천하지는 않는다.
console.log(hyeok.hasJob);

// 2. Computed properties
// key should be always string 키값은 항상 스트링으로 가져와야한다

console.log(hyeok.name); //dot을 사용한 형태, 코딩할땐 보통 이걸 사용 밑에거는 ㄴㄴ
console.log(hyeok['name']); // []를 사용해서 string형태로 출력이 가능하다
hyeok['hasJob'] = true;
console.log(hyeok.hasJob);


function printValue(obj, key){
    console.log(obj.key); //오브젝트에 key라는 프로퍼티가 없기때문에 undefined가 나온다
    console.log(obj[key]); // 이렇게 하면 나온다
}

printValue(hyeok, 'name');
printValue(hyeok, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};

// 아래의 방식으로 하면 한번에 가능하다.
const person4 = makePerson('hyeok', 30);
console.log(person4);
function makePerson(name, age){
    return{
        // 이게 오리지날
        name : name,
        age : age

        // 이렇게 생략도 가능하다.
        // name,
        // age
    };
}

// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator : key가 있는지 없는지 확인하는 키워드

console.log('name' in hyeok);
console.log('age' in hyeok);
console.log('random' in hyeok);
//console.log(ellie.random);

// 6. fo..in vs for..of
// for (key in obj)

// hyeok이 가지고 있는 key들이 블럭을 돌때마다 key가 key라는 지역변수에 할당
for (key in hyeok){
    console.log(key);
}

// for (value of iterable)

// 옛날 방식의 반복문
const array = [1,2,3,4];
for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}

// 이렇게도 할 수 있다.
for(value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'hyeok', age: '20'};
const user2 = user;

user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// 위와 같은 다른방법
const user4 = Object.assign({}, user);
console.log(user4);