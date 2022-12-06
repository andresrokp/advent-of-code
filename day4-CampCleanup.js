let fs = require('fs');

let inputStr = fs.readFileSync('./day4_input.txt','utf-8');

let testStr = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
14-38,14-14
2-10,3-55
36-90,36-46
9-97,8-87
75-92,51-92`
// goods : [0,0,0,1,1,0,1,0,1,0,1]
// goods2 : 9

// Part 1

let ans = inputStr.split('\n').map(i => {
    // ab-cd ef-gh
    let bigPair = i.split(',')
    let aP = [[parseInt(bigPair[0].split('-')[0]) , parseInt(bigPair[0].split('-')[1])],[parseInt(bigPair[1].split('-')[0]) , parseInt(bigPair[1].split('-')[1])]]
    return (aP[0][0]-aP[1][0])*(aP[0][1]-aP[1][1]) <= 0 ? 1 : 0
})

console.log(ans.reduce((a,b)=>a+b,0)) //ans = 576


// Part 2

ans = inputStr.split('\n').map(i => {
    // ab-cd ef-gh
    let bigPair = i.split(',')
    let aP = [[parseInt(bigPair[0].split('-')[0]) , parseInt(bigPair[0].split('-')[1])],[parseInt(bigPair[1].split('-')[0]) , parseInt(bigPair[1].split('-')[1])]]
    return Math.min(aP[0][1],aP[1][1])-Math.max(aP[0][0],aP[1][0]) >= 0 ? 1: 0;
})

console.log(ans.reduce((a,b)=>a+b,0)) // ans = 905