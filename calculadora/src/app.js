var pant = document.getElementById("result")
var buttons = document.getElementsByClassName("but")
var value = 0
var value2 = 0
var operate = ""

for(let button of buttons){
    
    switch(button.textContent){

        case "undo":
            button.addEventListener("click", ()=>{
                operation("undo")
            })
            break
        case "/":
            
            break
        case "x":
           
            break
        case "-":
            button.addEventListener("click", ()=>{
                operation("-")
            })
            break
        case "7":
            button.addEventListener("click", ()=>{
                writeScreen("7")
            })
            break
        case "8":
            button.addEventListener("click", ()=>{
                writeScreen("8")
            })
            break
        case "9":
            button.addEventListener("click", ()=>{
                writeScreen("9")
            })
            break
        case "4":
            button.addEventListener("click", ()=>{
                writeScreen("4")
            })
            break
        case "5":
            button.addEventListener("click", ()=>{
                writeScreen("5")
            })
            break
        case "6":
            button.addEventListener("click", ()=>{
                writeScreen("6")
            })
            break
        case "1":
            button.addEventListener("click", ()=>{
                writeScreen("1")
            })
            break
        case "2":
            button.addEventListener("click", ()=>{
                writeScreen("2")
            })
            break
        case "3":
            button.addEventListener("click", ()=>{
                writeScreen("3")
            })
            break
        case "0":
            button.addEventListener("click", ()=>{
                writeScreen("0")
            })
            break
        case ".":
            button.addEventListener("click", ()=>{
                writeScreen(".")
            })
            break
        case "+":
            button.addEventListener("click", ()=>{
                operation("+")
            })
            break
        case "intro":
            button.addEventListener("click", ()=>{
                result(operate)
            })
            break
    }

}

function writeScreen(str){
    if(pant.textContent === "0"){
        pant.innerHTML = str
    }else{
        pant.innerHTML += str
    }
}

function operation(str){
    switch(str){
        case "undo":
            pant.innerHTML = 0
            operate = ""
            break
        case "+":
            if(operate != ""){
                result(operate)
            }else{
                value = parseFloat(pant.textContent)
                pant.innerHTML = 0
                operate = "+"
            }
            
            break
        case "-":
            if(operate != ""){
                result(operate)
            }else{
                value = parseFloat(pant.textContent)
                pant.innerHTML = 0
                operate = "-"
            }
            break
    }
}

function result(opr){
    switch(opr) {
        case "":
            pant.innerHTML = "Seas mamón"
            break
        case "+":
            operate = ""
            value2 = parseFloat(pant.textContent)
            pant.innerHTML = value + value2
            break
        case "-":
            operate = ""
            value2 = parseFloat(pant.textContent)
            pant.innerHTML = value - value2
            break
    }
}

window.addEventListener("keypress", () => {
    alert("Presionaste una tecla")
})