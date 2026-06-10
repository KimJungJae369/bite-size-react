/* 
    1. null 병합 연산자
    - 존재하는 값을 추려내는 기능
    - null 또는 undefined이 아닌 값을 찾아내는 연산자
    - 즉 null 또는 undefined이면 값이 할당되어 있는 값만 찾아내서 변수명에 항당하는 연산자
    - null또는 undefined이 아닌 값을 찾아낸다
    - 두 값이 null또는 undefined이 아닌 경우에는 첫번째 피연산자 값을 반환
    -   
*/ 

let var1;
let var2 = 10;
let var3 = 20;

let var4  = var1 ?? var2;
// console.log(var4); // 10

let var5 = var1 ?? var3;
// console.log(var5); // 20

// 두 값이 null또는 undefined이 아닌 경우
let var6 = var3 ?? var2;
// console.log(var6);


let useName 
let usernickName = 'Winterlood';

let displayName = useName ?? usernickName;
// console.log(displayName);




/*
    2. typeof 연산자
    - 값을 타입을 문자열로 반환하는 연산자
*/
let var7 = 1;
var7 = 'hello'; 
var7 = 20; 
var7 = true; 
// console.log(typeof var7);





/*
    삼항 연산자
    - 항을 3개 사용하는 연산자
    - 조건식을 이용해서 참, 거짓일 때의 결과값을 반환하는 연산자'
    - 변수선언 = 조건식 ? 참일 때 값 : 거짓일 때 값
*/
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수  -> '짝', 홀수 -> '홀'
let res = var8 % 2 === 0 ? '짝' : '홀'; 
console.log(res);