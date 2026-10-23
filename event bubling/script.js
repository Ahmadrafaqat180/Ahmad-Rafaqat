let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML=
    "<b>ya you clicked</b>"
})
button.addEventListener("contextmenu",()=>{
    alert("you are gay")
})

button.addEventListener("keydown",(e)=>{
   console.log(e,e.key,e.key)
})