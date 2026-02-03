//normal process
// const product = {name:"shirt",prices :500,quantity:3}
// const discount= product.prices*20/100;
// const yourPay = product.prices - discount;
// const vatAmmount = product.prices*7/100;
// const  total = yourPay+vatAmmount;
// console.log(total)

//lazy programmer
// const product = {name:"shirt",prices :500,quantity:3}
// const prices = product.prices
// const discount= prices*20/100;
// const yourPay = prices - discount;
// const vatAmmount = prices*7/100;
// const  total = yourPay+vatAmmount;

//more lazy programmer(desturing and defult values)
const {prices,quantity,tax=8} = {name:"shirt",prices :500,quantity:3};
console.log(prices,quantity,tax)
//output: 500  3  8



const devices = {name:"phone",prices:40000 , brand :"sumsang"};
const {price} = devices;


const numbers =[22,11]
const [first,second] = numbers;
console.log(first)
//output : 22

