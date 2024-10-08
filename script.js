let buttonEL = document.getElementById("btn")
buttonEL.textContent = "Generate Secure Password"
let passText = document.getElementById("pass-text")

let inputEl = document.getElementById("input")

buttonEL.addEventListener("click", generatePass)
inputEl.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
        generatePass()
    }
})

function generatePass(){
    let numOfChar = parseInt(inputEl.value)
    if (isNaN(numOfChar) || numOfChar <= 0 || numOfChar > 25 || numOfChar < 9){
        passText.textContent = "The number of characters must be a number between 9 and 25."
        
    } else {
        const pass = new Uint32Array(numOfChar)
        crypto.getRandomValues(pass)    
        let finalPass = ""
        for (let i = 0; i < pass.length; i++){
            finalPass += String.fromCharCode(pass[i]%93 + 33)
            
        }
        passText.textContent = finalPass
        
        
    }
    inputEl.value=""

}