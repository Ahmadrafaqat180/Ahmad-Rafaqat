console.log("Ahmad is hacker")
console.log("ayyan is hecker")
setTimeout(()=>{
    console.log("i am settimout")
},3000)

console.log("the End")


// callback
const a=() => {
  console.log("ayyan")
}

const fn =() => {
  console.log("Nothing")
}
const callback=(arg, fn,a) => {
  console.log(arg)
  fn()
  a()
}
const loadscript=(scr,callback) => {
  let sc =document.createElement("script")
  sc.scr=scr;
  sc.onload=callback("ahmad",fn,a);
  document.head.append(sc)
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.js",callback)


