function printNumbers(n) {
    if(n < 1) {
        return
    }
   
    printNumbers(n-1)
    console.log(n);
}

printNumbers(10)

function sum(n) {
    if(n <= 1) {
        return n
    }

    return n + sum(n-1)
}

console.log(sum(20));

function factorial(n) {
    if(n <= 1) {
        return 1
    }

    return n * factorial(n-1)
} 

console.log(factorial(10));

function power(x, n) {
    if(n <= 0) return 1

    return x * power(x, n-1)
}

console.log('power: ', power(2, 0));

function countDigits(n) {
    const num = Math.abs(n)
    if(num < 10) return 1

    return 1 + countDigits(Math.floor(num / 10))
}

console.log(countDigits(123456));
console.log(countDigits(-123456));

function sumDigits(n) {
    const num = Math.abs(n)
    if(num < 10) {
        return num
    }
    return num % 10 + sumDigits(Math.floor(num / 10))
}

console.log('sumDigits: ', sumDigits(123456789));

function reverseString(str) {
    if(str === '') return str
    
    return str.at(-1) + reverseString(str.slice(0, -1))
}

console.log(reverseString('12345'));

function isPalindrome(str) {
    if (str.length <= 1) return true

    if( str.at(0) !== str.at(-1)) {
        return false
    }

    return isPalindrome(str.slice(1,-1))
}

console.log('palindrom: ', isPalindrome('123121'));


