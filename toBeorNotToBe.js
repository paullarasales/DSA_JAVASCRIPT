const expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) {
                throw new Error(`${val} is not equal to ${val2}`)
            }
            else {
                return true;
            }
        },
        notToBe: (val2) => {
            if (val === val2) {
                throw new Error(`${val} is equal to ${val2}`)
            }
            return true;
        }
    }
}
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));