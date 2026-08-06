function patritioning(str) {
    const result = []

    function partition(start, end, path = []) {
        const substr = str.slice(start, end)
        if (!isPalindrome(substr)) {
            return
        }

        path.push(substr)

        if (
            end === str.length
        ) {
            result.push([...path])
            return
        }
        
        for (let i = end; i <= str.length; i++) {
            partition(end, i + 1, path)
        }

        path.pop()
        
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

    
    partition(0, 1)
 
    return result

}
// abbabaobab
console.log(patritioning('aab'));



function substr(str) {
    const result = []

    function init(start, end) {
        if (start === str.length && end === str.length) {
            return
        }

        for (let start = 0; start < str.length; start++) {
            for (let end = start+1; end <= str.length; end++) {
                result.push(str.slice(start, end))        
            }
        }

    }

    init(0, 1)

    return result

}

// console.log(substr('1234567'));
