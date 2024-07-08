function plusone(n) {
    return n + 1;
}

const arr = [1, 2, 3];

let map = function(arr, fn) {
    const transformedArr = []

    for (let i = 0; i < arr.length; i++) {
        transformedArr[i] = fn(arr[i], i);
    }

    return transformedArr;
}

const result = map(arr, plusone);
console.log(result);