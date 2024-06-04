const num =  new Number(876)
console.log(num)//[Number: 876]

//using Number() give us more features like using String()

console.log(num.toString().length)
console.log(num.toFixed(4))//four decimal values after decimal
//used for more precision

const num1=25.54765

console.log(num1.toPrecision(7));//go to gpt to learn this

const unum=87545674
console.log(unum.toLocaleString('en-IN'));//for indian style 8,75,45,674

//learn more Number features--

//******************** MATH *****************
console.log(Math);//Object [Math] {}
console.log(Math.abs(-2))//print 2 i mean absolute value (+ve value)
console.log(Math.ceil(6.47))//7
console.log(Math.floor(6.79))//6
console.log(Math.max(7,3,7,1,9,9))//9
console.log(Math.random())//value between 0 and 1
console.log((Math.random()*10)+1)//if i want random value between 1 and 10

const min= 10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//give random value in range 10-20

