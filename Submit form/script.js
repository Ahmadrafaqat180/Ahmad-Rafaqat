const form=document.getElementById("form")
const firstname=document.getElementById("firstname")
const lastname=document.getElementById("lastname")
const email=document.getElementById("email")
const password=document.getElementById("password")
const retype=document.getElementById("retype")
const contact=document.getElementById("contact")
form.addEventListener("submit",(e)=>{
    e.preventDefault();



console.log(firstname.value.trim())
console.log(lastname.value.trim())
console.log(email.value.trim())
console.log(password.value)
console.log(retype.value)
console.log(contact.value.trim())

if(password.value!==retype.value){
    alert("password donot match");
    return;
}
});



