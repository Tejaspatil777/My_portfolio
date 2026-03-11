const toggle = document.getElementById("darkToggle")

toggle.onclick = () => {

document.body.classList.toggle("dark")

}


document.getElementById("contactForm").addEventListener("submit",(e)=>{

e.preventDefault()

alert("Message sent successfully!")

})