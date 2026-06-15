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