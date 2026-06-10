/*
    연산자
    - 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말한다
    +(덧셈)
    -(뺄셈)
    *(곱셈)
    /(나눗셈)
    ...등등
*/

// 1. 대입 연산자 : =
let var1 = 1;



// 2. 산술 연산자 : +,-,/,*...
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2; // '산술 연산자'중 우선 순위가 가장 높다
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;
// console.log(num6);



// 3, 복합 대입(산술 + 대입 = += / -= / *= / /= ) 연산자
let num7 = 10;
num7 += 20; // num7 = num7 + 20;과 같다
num7 -= 20;
num7 *= 2;
num7 /= 2; 
num7 %= 2; 
// console.log(num7);



// 4. 증감 연산자 :  ++(증가), --(감소)
let num8 = 10;
++num8; // 전위 연산자 
num8++; // 후위 연산자 
// console.log(num8);




// 5. 논리 연산자 : boolean 타입의 값만 반환을 한다
let or = true || false; // 하나라도 true 면 true반환 
// console.log(or);

let and =  true && false; // 하나라도 false 면 false반환 
// console.log(and);

let not = !true; // true면 false, false면 true 반환
// console.log(not);



//  6. 비교 연산자 : 두 값을 비교
let comp1 = 1 === '1'; // 동등 연산자
let comp2 = 1 !== 2; // 부동등 연산자
// console.log(comp1, comp2);

// 대소 관계 비교 연산자
let comp3 = 2 > 1;
let comp4 = 2 < 1;
// console.log(comp3,comp4);

// 이상 이하
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);

