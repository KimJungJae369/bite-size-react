/*
    반복문으로 배열과 객체 순회하기
    1. 순회란?
    - 배열, 객체 저장된 여러개의 값에 순서대로 하나씩 접근한느 것을 말한다
*/

// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for(let i = 0; i < arr2.length; i++){
    // console.log(arr2[i]);
}


// 1.2 for of 반복문
for(let item of arr){
    // console.log(item);
}





// 2. 객체 순회
let person = {
    name : '홍길동',
    age : 31,
    hobby : '스쿼시'
}

// 2.1 Object.keys 사용
// Object.keys : 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
// console.log(keys);

// for(let i = 0; i < keys.length; i++){
//     console.log(keys[i]);
// }

for(let key of keys){
    // console.log(key, person[key]);

    const value = person[key];
    // console.log(key, value);
}


// 2.2 Object.values
// Object.values : 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
// console.log(values);

for(let value of values){
    // console.log(value);
}



// 2.3 for in
for(let key in person){
    const value = person[key]
    console.log(key, value);
}