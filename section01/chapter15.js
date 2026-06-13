/*
    객체_1 
    - 원시 타입이 아닌 객체 타입의 자료형 
    - 여러가지 값을 동시에 저장할 수 있는 자료형을 의미
    - 객체를 이용하면 현실 세계에서 존재하는 어떤 사물이나 개념을 표현한기 용이하다
    - 한 번에 여러 변수의 값을 저장할 수 있다
*/

// 1. 객체 생성
let obj1 = new Object() // 객체 생성자 
let obj2 = {} // 객체 리터럴 : 대부분 이 방법을 사용

// 2. 객체 프로퍼티(키 + value(값)) : 객체 속성
let person = {
    name : '홍길동',  
    age : 31,
    hobby : '운동',
    job : 'FE Developer',
    extra : function(){},
    10 : 20,
    'like cat' : true
}

// console.log(person);


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티 접근(점 표기법, 괄호 표기법)
let name = person.name;
// console.log(name);


let age = person["age"]; // "따옴표"랑 꼭 같이 써야한다
// console.log(age);

let property = 'hobby'; // person에서 'hobby : 운동'이라는 프로퍼티 값을 가져와 hobby변수에 저장하여 출력
let hobby = person[property];
// console.log(hobby);


// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = 'fe de==developer';
person['favoriteFood'] = '고기';
// console.log(person);



// 3.3 프로퍼티 수정하는 방법
person.job = 'educator';
person['favoriteFood'] = '초콜렛'




// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person['favoriteFood']
// console.log(person);




// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let resul1 = 'name' in person;
let resul2 = 'cat' in person;
console.log(resul2);
