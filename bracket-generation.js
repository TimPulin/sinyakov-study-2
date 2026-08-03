function bracketGeneration(n) {
    const options = ['(', ')']
    const result = []

    function inner(current, open, close) {
        if (current.length >= n * 2) {
            if (open === close) {
                result.push(current)
            }

            return
        }

        for (const item of options) {
            let tempOpen = open
            let tempClose = close
            if (item === '(') {
                tempOpen +=1
            } else {
                tempClose += 1
            }
            if (!validation(tempOpen, tempClose)) {
                continue
            }
            inner(`${current}${item}`, tempOpen, tempClose)
                        
        }
    }

    function validation(open, close) {
        console.log('open:', open);
        console.log('close: ', close);
        
        if (open > n) {
            return false
        } else if(close > n) {
            return false
        } else if (open < close) {
            return false
        } else {
            return true
        }

    }

    inner('', 0, 0)

    return result
}



const result = bracketGeneration(3)
console.log('result: ', result);
console.log('result.length: ', result.length);
