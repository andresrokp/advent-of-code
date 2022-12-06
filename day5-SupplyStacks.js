let fs = require('fs')
let inputStr1 = fs.readFileSync('day5-A.txt','utf-8')
// let inputStr1 = `    [D]    
// [N] [C]    
// [Z] [M] [P]`;
let inputStr2 = fs.readFileSync('day5-B.txt','utf-8')
// let inputStr2 = `move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`

let stackArrays = [[],[],[],[],[],[],[],[],[],[]]
let stackArrays2 = [[],[],[],[],[],[],[],[],[],[]]

let stacksAsRows = inputStr1.split('\n').reverse().map(i => i.split(''));
console.log(stacksAsRows)

stacksAsRows.forEach( row => {
    for(let i = 0; i <= 8; i++){
        if(row[i*4+1] != ' '){
            stackArrays[i+1].push(row[i*4+1])
            stackArrays2[i+1].push(row[i*4+1])
        }
    }
})

console.log(stackArrays)

let movements = inputStr2.split('\n');

let mvArrays = movements.map( mv => mv.match(/\d+/g).map(ch => parseInt(ch)))
console.log(mvArrays)


mvArrays.forEach(mv=>{
    for(let q = 1; q <= mv[0]; q++)
        stackArrays[mv[2]].push(stackArrays[mv[1]].pop())
})

console.log(stackArrays)



// PART 2
mvArrays.forEach(mv=>{
    let buffer = [];
    for(let q = 1; q <= mv[0]; q++)
        buffer.push(stackArrays2[mv[1]].pop())
    stackArrays2[mv[2]].push(...buffer.reverse())
})

console.log(stackArrays2)