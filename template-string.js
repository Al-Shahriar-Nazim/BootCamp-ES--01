//multiple line stirng
//way - 01
const poem = "marbo chauk \n" + "corbe gora \n" + "ore bubu soore dara";
// line break scape sequences : \n
console.log(poem);

//template strine

//ex-01
//way - 2(multiple line string)
const kobita = `amar sonar 
Bangla ami tomake 
onek besi valobasi`;
console.log(kobita);

//ex-02

function sum(num1, num2) {
  const result = num1 + num2;
  // console.log(' sum of '+num1+' and '+num2+' is equal to '+result)
  //daynamic string
  console.log(`sum of ${num1} and ${num2} is equal to ${result}`);
}
sum(10, 30);
//output : sum of 10 and 30 is equal to 40


//ex-03
const prices = 300;
const discountPrices = `Discount prices of ${prices} is after 20% discount ${prices * 0.8}`;
console.log(discountPrices)
// output : Discount prices of 300 is after 20% discount 240