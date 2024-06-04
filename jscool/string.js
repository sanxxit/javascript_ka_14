const name ="chutiya"
const repoc=78
console.log(name+repoc+ " heyyy")//old method not recoomemnded today


//new method

console.log(`hello my name is ${name} and myrepo  count is ${repoc}`)//use backticks
//backticks


//benifits of backticks
//Multiline Strings: 
/* You can create multiline strings 
without needing to concatenate separate 
string literals or use newline characters (\n).*/

const multilineString = `This is a string
that spans multiple
lines.`;
console.log(multilineString);
/* Embedding Expressions: You can insert the result of any JavaScript expression,
 such as mathematical operations,
  function calls, or even more complex expressions.
 */
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // Output: The sum of 5 and 10 is 15

//string

const game =new String(`   sinchitlaluoppjuh  `)
//we do string here cause string has some amamzing features like ti can automatially save
//in keyvalue pairs
console.log(game[0])//print s
console.log(game.length)
console.log(game.__proto__)//print {} empty object
console.log(game.toUpperCase())
console.log(game.charAt(4))//h
console.log(game.indexOf('l'))//8
console.log(game.indexOf())//-1
console.log(game.indexOf(3))


const newstring = game.substring(0,3)//0 to2 last wlw inclue nhi
console.log(newstring)//san

/* string.slice(startIndex, endIndex)


Start Index: -18 is interpreted as 0 (since it's out of the string's bounds).

 */


const newstring2 = game.slice(-10,8)//we cna also give negative values 
//and then it strt from reverse
console.log(newstring2)//san


console.log(game.trim())

//string url functaionalituy
//string split
//string to array

