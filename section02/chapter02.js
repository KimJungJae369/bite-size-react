/*
    단락 평가
    - 연산 결과가 확정 되었을 때 나머지 피연산자는 출력되지 않는다려
    - && : false && ?(아무 연산자) = 첫 번째 피연산자가 출력
    - || : true && ?(아무 연산자) = 마지막 피연산자가 출력
*/

// function returnFalse(){
//     console.log('False');
//     return undefined;
// }

// function returnTrue(){
//     console.log('True');
//     return 10;
// }

// console.log(returnFalse() && returnTrue()); // false




// 단락 평가 활용
function printName(person){
    // if(!person){
    //     console.log('person에 값이 없다');
    // }
    const name = person && person.name;
    console.log(name || 'person의 값이 없음');
}
printName();
printName({name : '홍길동'});

