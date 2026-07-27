const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function test(arr) {
    let fast = 0
    let slow = 0
    for(const item of arr) {
        fast++
        if(fast % 2 === 0) {
            slow++
        }
    }
    return arr[slow]
    
}

const result1 = test(arr1)
const result2 = test(arr2)

console.log('result1: ', result1)
console.log('result2: ', result2)