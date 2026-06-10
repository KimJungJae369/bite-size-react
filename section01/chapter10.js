/*
    반목문
    - 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법
for(let 초기식; 조건식; 증감식;){코드}
*/

// for문
for(let i = 1; i <= 15; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);

    if(i >= 5){
        break;
    }
}


