// 함수 표현식 : 호이스팅이 되지 않는다
function funcA(){
    // console.log('funcA');
}

let varA = funcA; // 함수를 단순한 변수에 담을 수 있다
// console.log(varA);
funcA();

// 익명함수
let varB = function (){
    // console.log('funcB'); //함수로 호출
    // console.log('funcB()'); //함수안에 있는 값으로 호출
}
varB(); // 변수명으로 호출






// 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varC(10));
