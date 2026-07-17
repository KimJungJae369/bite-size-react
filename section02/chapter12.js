/*
    비동기 작업 처리하기 1. 콜백 함수
*/

// function add(a, b, callback){
//     setTimeout(() => {
//         const sum = a + b; // 3
//         callback(sum);
//     }, 3000);
// }

// add(1, 2, (value) => {
//     console.log(value);
// });



// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = '치킨';
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldowneFood = `식은 ${food}`;
        callback(cooldowneFood);
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);
    
    cooldownFood(food, (cooldowneFood)=>{
        console.log(cooldowneFood);

        freezeFood(cooldowneFood, (freezedFood) => {
            console.log(freezedFood);
        });
    }
);
});