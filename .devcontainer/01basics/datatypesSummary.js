//Primitive

//7 types-Number,String,Symbol,undefined,null,BigInt,Boolean


//non primitive reference types

//arraysobjects,functions


//USAGE:--

const bigNumber =2333471882681919n //n at the end represnts BigInt data type
let valuetrial; //no assignment or mention of data types means it's undefined
const heroes =["spiderman", "batman", "superman"];//array


//objects are within curly braces--

let my_obj={
    name:"aditya",
    age:21,
}


//function can be declared as a variable in javascript

const my_func=function(){
    console.log("hello world");
}
//Symbol data type is used when we need to value to be distinguished even if the value is same
const id=Symbol("123")
const another_id=Symbol("123")
console.log(id===another_id)

//STACK AND HEAP
//STACK-- FOR PRIMITIVE DATA TYPES;;;HEAP--FOR NON PRIMITIVE DATA TYPES
//here ytname2=ytname gives a copy of ytname to be assigned,and not the exact ytname,,and hence any change in ytname2 doesnt affect ytname
let ytname="avjha"
let ytname2=ytname
ytname2="aditya"
console.log(ytname)
console.log(ytname2)

//here change in mydetails2 affects mydetails1,as in heap,it doesnt pass a copy,but it passes the exact same reference as my details


let mydetails={
    name:"avjha",
    slno:21
}
let mydetails2=mydetails
mydetails2.slno=22
console.log(mydetails.slno)
console.log(mydetails2.slno)
