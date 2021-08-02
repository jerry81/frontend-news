/* 
findWord(["P>E","E>R","R>U"]) // PERU
findWord(["I>N","A>I","P>A","S>P"]) // SPAIN


findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]) // HUNGARY
findWord(["I>F", "W>I", "S>W", "F>T"]) // SWIFT
findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]) // PORTUGAL
findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) // SWITZERLAND
*/

function findWord(arr) {
    let result = []
    arr.forEach(x => {
        const [first, second] = x.split('>')
        const indexOf1 = result.indexOf(first)
        const indexOf2 = result.indexOf(second)
        console.log("result is ", result)
        console.log('first, second', first, second)
        if (indexOf1 < 0 && indexOf2 < 0) {
            result = [...result, first, second]
        }
        if (indexOf1 > -1 && indexOf2 > -1) {
            
        } else if (indexOf1 > -1) {
            // insert second after first
            const firstHalf = result.slice(0, indexOf1+1)
            const secondHalf = result.slice(indexOf1+1,result.length)
            result = [...firstHalf, second, ...secondHalf]
        } else if (indexOf2 > -1) {
            const firstHalf = result.slice(0, indexOf2)
            const secondHalf = result.slice(indexOf2,result.length)
            result = [...firstHalf, first, ...secondHalf]
            // insert first after second
        }
    })
    return result.join('')
}


console.log('test1', findWord(["P>E","E>R","R>U"]))
console.log('test2', findWord(["I>N","A>I","P>A","S>P"]))
console.log('test3', findWord(["U>N", "G>A", "R>Y", "H>U", "N>G", "A>R"]))
console.log('test4', findWord(["I>F", "W>I", "S>W", "F>T"]))
console.log('test5', findWord(["R>T", "A>L", "P>O", "O>R", "G>A", "T>U", "U>G"]))
console.log('test 6', findWord(["W>I", "R>L", "T>Z", "Z>E", "S>W", "E>R", "L>A", "A>N", "N>D", "I>T"]) )
// PERU