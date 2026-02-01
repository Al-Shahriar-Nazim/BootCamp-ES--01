
//function decleartion
function add(num1,num2){
    return num1+num2;
}

//function expression
const addtition = function(num1,num2){
    return num1+num2;
}
const result = addtition(20,40);
console.log(result)


//arrow function 
// step - 01 single line function
const add2 = (num1,num2)=>num1+num2;
const result2 = add2(30,40);
console.log(result2)
//output : 70

// step - 02 multiple line function
const add3 = (num1,num2)=>{
    const multi = num1*num2;
    const add = num1+num2;
    const result = add+multi;
    return result;
}
const result3 = add3(2,3);
console.log(result3)
//output : 11

