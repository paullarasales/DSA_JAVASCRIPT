function reduceArray(nums, fn, init) {
    let accumalator = init;

    for (let i = 0; i < nums.length; i++) {
        accumalator = fn(accumalator, nums[i]);
    }
    return accumalator;
}

const nums = [1, 2, 3, 4];
const sumFunction = function sum(accum, curr) {return accum + curr;};
const initialValue = 0;

const result = reduceArray(nums, sumFunction, initialValue);
console.log(result);