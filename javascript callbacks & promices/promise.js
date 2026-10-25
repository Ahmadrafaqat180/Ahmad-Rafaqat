console.log('the promise is good');

let prom1=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("no random number was supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done")
            resolve("ahmad")
        },3000)
    }
   })
   let prom2=new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("no random number was supporting you 2")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done 2")
            resolve("ahmad 2")
        },1000)
    }
   })
  let p3= Promise.allSettled([prom1,prom2])
  p3.then((a)=>{
    console.log(a)
  }).catch(err=>{
     console.log(err)
  })


// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })


// let prom1=new Promise((resolve,reject)=>{
//     console.log("ahmad")
//     resolve()
//     })
//     prom1.then((a)=>{
//         console.log(a)
//     }).catch((err)=>{
//     console.log(err)
// })
// error catch

