let rucksackLists = require('fs').readFileSync('day3.txt','utf-8');

let testCase = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

let priorityClue = "$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

ans = rucksackLists.split("\n").map(items => {
    len = items.length;
    half1 = items.slice(0,len/2)
    half2 = items.slice(len/2)
    for(let l of half1)
        if (half2.includes(l)) return priorityClue.indexOf(l);
}).reduce((a,b)=>a+b,0);

console.log(ans)


rkskList = rucksackLists.split("\n")
ans = 0;
for(let i = 0; i < rkskList.length; i += 3){
    for(let l of rkskList[i]){
        if(rkskList[i+1].includes(l) && rkskList[i+2].includes(l)){
            ans += priorityClue.indexOf(l);
            break;
        }
    }
}

console.log(ans)