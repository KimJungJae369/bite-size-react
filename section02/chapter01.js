/*
    Truthy & Falsy
    - '참'이나 '거짓'을 의미하지 않는 값도 조건문 내에서 참이나 거짓으로 평가하는 특징
    - 이를 이용하면 조건문을 간결하게 만들 수 있다

    Truthy : 참 같은 값 / 7가지 Falsy한 값들 제외한 나머지 모든 값
    Falsy : 거짓 같은 값 / 조건문에서 거짓으로 출력
*/

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 큰 숫자를 저장할 때 사용

// if(!f1){
//     console.log('falsy');
// }






// 2. Truthy한 값
let t1 = 'hello';
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {}

// if(t4){
//     console.log('Truthy');
// }





// 3. 활용
// function printName(person){
//     if(person === undefined || person === null){ 
//         // 'undefined'의 값이 나온 경우 'return'으로 인해 오류가 나오지는 않는다
//         // null일 경우에도 오류가 나오지 않는다
//         console.log('person의 값이 없음');
//         return;
//     } 
//     console.log(person.name)
// }

// // let person;
// let person = null;
// printName(person);


function printName(person){
    if(!person){ 
        // person에 거짓의 값이 들어올 경우 오류 처리하지 않고 출력
        console.log('person의 값이 없음');
        return;
    } 
    console.log(person.name)
}

// let person;
let person = {name : '홍길동'};
printName(person);