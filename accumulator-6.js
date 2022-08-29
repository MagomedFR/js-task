let arr = [2, 7, 5, 10, 9, 4, 6, 8, 1, 3];
let accumulatorEven = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 !== 0) {
        accumulatorEven.push(arr[i])
    }
}
console.log(accumulatorEven)