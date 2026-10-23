console.log("i am a tutorial")
// let a = 1;
// for (let i = 0; i < 100 ; i++) {
//    console.log(a + i)
// }
let obj={
   name:"ahmad",
   company:"AR",
   role:"programmer"
}
for (const key in obj) {
   if (Object.hasOwn(obj, key)) 
   console.log(key,obj[key]);
   
}
// for (const c of "ahmad") {
//    console.log(c)
// }
// i=0;
// while (i<100) {
//    console.log(i)
//    i++;
// }