// let num=[3,7,1,9,4]
// let biggest=Math.max(...num)
// console.log(biggest)
// let fruits=["apple","banana","mango"]
// fruits.reverse()
// console.log(fruits)
// create  new array
// let nums=[2,4,6,8,10]
// let result=nums.filter(n=>n>5);
// console.log(result)
// let numsa=[1,2,3,4,8]
// let a=numsa.map(n=>n*2)
// console.log(a)

// function nice(a) {
//    console.log("Hello " + a )
// }
// nice("ali")
// nice("sara")
// nice("taha")
// let a=2
// for (let i =1;  i<=10; i++) {
//    console.log(i)
//    }
//    let b =2
// for (let i = 1; i <=100; i++) {
//     if(i%2===0){
//       console.log(i)
// }
    
// }
let car={
    brand:"toyota",
    model:"Corolla",
    year:2020
}
for (const key in car) {
    if (Object.hasOwn(car, key))
    console.log(key,car[key])
    
    
    
}
let a=["ali","sara","taha"]
for (const n of a) {
    console.log(n.toUpperCase())
}






  
