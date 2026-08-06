function patritioning(str) {
    const result = []

    function partition(start, path = []) {
        if (
            start === str.length
        ) {
            result.push([...path])
            return
        }
        
        for (let i = start + 1; i <= str.length; i++) {
            const substr = str.slice(start, i)
            if (isPalindrome(substr)) {
                path.push(substr)
                partition(i, path)
            }
            path.pop()
        }
       
        return
    }

    function isPalindrome(str) {
        if (str.length <= 1) {
            return true
        }

        if (str.at(0) !== str.at(-1)) {
            return false
        }

        return isPalindrome(`${str.slice(1, -1)}`)
    }
    
    partition(0)
 
    return result

}
// abbabaobab
console.log(patritioning('aab'));

