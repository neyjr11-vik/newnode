 const arr=[0,1,2,3,4,5]
// //arrys form shallow copies:properties share the same refernce point
// //its opposite is deep copy which dont follow the same reference point
// console.log(arr[0])
const marvel=new Array("ironman","spiderman","thor")
// console.log(marvel)



// ++++++++++++++++++    ARRAY METHODS.    +++++++++++++++++++
// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(9)//not good for optimisation;as the element is added at first
// console.log(arr)
// arr.shift()
// console.log(arr)
// console.log(arr.includes(9))
// console.log(arr.indexOf(9))//output is -1 as 9 is not present
// const newarr=arr.join()
// console.log(arr)
// console.log(newarr)
// console.log(typeof(arr))
// console.log(typeof(newarr))



//slice,splice


console.log("A",arr)
const n1=arr.slice(1,3)
console.log(n1)
console.log("B",arr)


const n2=arr.splice(1,3)
console.log(n2)
console.log("C",arr)
//HENCE SPLICE MANIPULATES THE ORIGINAL ARRAY,WHILE SLICE DOES NOT. 