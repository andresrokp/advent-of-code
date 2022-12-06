let fs = require('fs')
let str1 = fs.readFileSync('day6.txt','utf-8')
let str2 = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg' // 10
let str3 = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw' // 11


let str = str1;
let span = 4
let ans;
for(let i = 0; i <= str.length - span; i++){
    let chunk = str.slice(i,i+span)
    let reps = chunk.split('').map(c => chunk.indexOf(c) === chunk.lastIndexOf(c))
    if (reps.reduce((a,b) => a && b)){
        ans = i + span;
        break;
    }
}

console.log(ans, str.slice(ans-4,ans))
//1287


// PART 2

str = str1;
span = 14
for(let i = 0; i <= str.length - span; i++){
    let chunk = str.slice(i,i+span)
    let reps = chunk.split('').map(c => chunk.indexOf(c) === chunk.lastIndexOf(c))
    if (reps.reduce((a,b) => a && b)){
        ans = i + span;
        break;
    }
}

console.log(ans, str.slice(ans-span,ans))
// ans = 3716