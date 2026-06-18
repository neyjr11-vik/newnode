const name="aditya"
const repoCont=50
// console.log(name+repoCont+" value")
console.log(`Hello my name is ${name} and my repo count is ${repoCont}`)

//2nd way to declare string
const gameName =new String("    av jha ")

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(`Length id ${gameName.length}`)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('v'))
// console.log(gameName.substring(0,3))
// console.log(gameName.slice(-4,3))
console.log(gameName.trim())
console.log("https://avjha.com/aditya%20vikram%20jha".replace('%20',"-"))
console.log("https://avjha.com/aditya%20vikram%20jha".replaceAll('%20',"-"))
console.log(gameName.includes("vj"))
//SIMILARLY THERE ARE MANY MORE METHODS 