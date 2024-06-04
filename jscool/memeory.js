//memeory
//stack(primitive )---varibl ka copy milta hai  and heap(non primitive data type

//)
//heap m refrence milta hai --original value ka and when we change it changes the orginal value

let myname= "san"//primitive 
let yourname= myname
yourname="agraawal"
console.log(myname)
console.log(yourname)//it craete copy of myname and when we 
//change yourname ..it does not change original value of mynam e
//but it change yourname which is copy of myname 

let user1 ={
    email: "san@gmail.com",
    upi:"lal@gyb"
}
let user2=user1// it craete refrence of user for user1 
// wehne we change like if we chnage email of user user2 it changes also the 
//email of user1

user2.email="lola@gmail.com"
console.log(user1.email)//changes email of 1 also
console.log(user2.email)