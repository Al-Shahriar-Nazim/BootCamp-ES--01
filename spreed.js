const numbers = [87,3,45,21]
console.log(numbers)
//output :[87,3,45,21]
console.log(...numbers)
//output : 87,3,45,21


const max = Math.max(332,32,45,654,54)
console.log(max)
//output : 654

const max1 = Math.max(...numbers);
console.log(max1)
//output : 87


const first = [32,42,12,43,312,32312]
const second = first;
second.push(4321)
console.log(first)
//output : [32,42,12,43,312,32312,4321]

const third = [3,32,1,2,33,45]
const fourth = [...third];
fourth.push(43)
console.log(third)
//output : [3,32,1,2,33,45]
console.log(fourth)
//output : [3,32,1,2,33,45,43]


const ages = [32,31,10]
const prices = [332,443,554,321]
const marges = [...ages,...prices]
console.log(marges)
//output :[32,31,10,332,443,554,321]


//-----------object with spreed operator--------//
const person = {name:'nazim',ages:22}
const prof = { proffession:"developer",...person}
console.log(prof);
//output : {prof:'developer',name:'nazim',ages:22}


//arrow function meanins function and array marge with spreed operators------//
const total =(a,b,c)=>a+b+c;
const result = total(20,12,21);
const digit = [32,11,32]
console.log(total(...digit))
