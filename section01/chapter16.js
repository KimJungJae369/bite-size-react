// 1. 상수 객체 : 상수에 저장한 객체
// 기존에 저장되어 있던 프로퍼티 값을 수정/ 변경/ 삭제 있지만 새로운 값은 바꾸지 못하고 오류가 발생
const animal = {
    type : '고양이',
    name : '나비',
    color : 'black'
}

// animal = {a : 1} // 오류 발생

animal.age = 2; //추가
animal.name = '까망이' // 수정
delete animal.color // 삭제

// console.log(animal);



// 2. 메서드 : 값이 함수인 프로퍼티
const person = {
    name : '홍길동',
    sayHi(){ // 메서드 선언 : 동작을 정의하는데 사용
        console.log('Hello');
    }
}
person.sayHi();
person['sayHi']();