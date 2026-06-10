/*
    조건문 
    - 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
    - 대표적으로 'if문, switch' 조건문이 존재
*/

// 1. if문
let num = 9;

if(num >= 10){
    // console.log('num은 10 이상입니다');
    // console.log('조건이 참 입니다');
}else if(num >= 5){
    // console.log('5 이상입니다');
}else if(num >= 3){
    // console.log('3 이상입니다');
}else{
    // console.log('조건이 거짓입니다');
}




// 2. switch 문 : if문과 기능 자체는 동일/ 다수의 조건을 처리할 때 if문보다 더 직관적이다
let animal = 'owl';

switch(animal){
    case 'cat' : 
        console.log('고양이');
        break;

    case 'dog' : 
        console.log('강아지');
        break
        
    case 'bear' : 
        console.log('곰');
        break

    case 'snake' : 
        console.log('뱀');
        break
        
    case 'tiger' : 
        console.log('호랑이');
        break

    default : 
        console.log('그런 동물은 없습니다');
}