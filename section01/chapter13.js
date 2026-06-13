/*
    콜백함수
    - 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미 한다
    - 콜백 : '뒷전, 나중에 실행되는'라는 뜻  
*/

// 1. 콜백함수
function main(value){
    // console.log(1);
    // console.log(2);
    value();
    // console.log('end');
}

// function sub(){
//     // console.log('i am sub');
// }
main(() => {
    // console.log('i am sub');
});






// 2. 콜백함수의 활용
// function repeat(count){
//     for(let i = 1; i <= count; i++){
//         console.log(i)
//     }
// }


function repeat(count, callback){
    for(let i = 1; i <= count; i++){
        callback(i);
    }
}

// function repeatDouble(count){
//     for(let i = 1; i <= count; i++){
//         console.log(i * 2);
//     }
// }

// function repeatTriple(count){
//     for(let i = 1; i <= count; i++){
//         console.log(i * 3);
//     }
// }
repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
});

repeat(5, (i) => {
    console.log(i * 3);
});
// repeatDouble(5);
// repeatTriple(5);


