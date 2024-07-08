function greaterThanTen(n) {
    if (n > 10) {
        return n;
    }
}

const arr = [0, 10, 15, 20, 5];

let filter = function(arr, fn) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

const result = filter(arr, greaterThanTen);
console.log(result);