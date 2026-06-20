/*
    구조 분해 할당
    - 배열이나 객체 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당한다 
*/

// 1. 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);



// 2. 객체의 구조 분해 할당
let person = {
    name: '홍길동',
    age: 31,
    hobby : '헬스'
}

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let {age : myAge, hobby, extra="hello"} = person;
// console.log(name, age, hobby, extra);




// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}
func(person);