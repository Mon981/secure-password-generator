let buttonEL = document.getElementById("btn")
buttonEL.innerHTML = "Generate Secure Password"
let passText = document.getElementById("pass-text")


buttonEL.addEventListener("click", generatePass)

function generatePass(){
    let inputEl = document.getElementById("input")
    let numOfChar = parseInt(inputEl.value)
    const pass = new Uint32Array(numOfChar)
    crypto.getRandomValues(pass)    
    let finalPass = ""
    for (let i = 0; i < pass.length; i++){
        finalPass += String.fromCharCode(pass[i]%93 + 33)
        
    }
    passText.textContent = finalPass

}