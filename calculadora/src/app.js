var pant = document.getElementById("result")         //todo en javascript es un objeto, en esta variable trae del documento html todos los eementos con el id result, osea el valor que tenga la pantalla 
var buttons = document.getElementsByClassName("but") //con la propiedad getElementByClassName trae los elementos que comparten la misma clase
var value = 0
var value2 = 0
var operate = ""

for(let button of buttons){     // "of" la varibale toma el valor | "in" la varioable toma el indice
    /* let le indica que sera una veriable de ambito o de bloque */
    switch(button.textContent){ /* La sentencia "switch" toma el valor que le damos por parametro y lo somete a varias evaluciones  */

        case "undo": //case es un condicional como el "if" en python, evalua el estado de la variable y si es el indicado ejec esta linea de codigo, case "undo":
            button.addEventListener("click", ()=>{ // la propiedad .addEventListener registra un evento a un objeto en especifico por parametro se le pasa primero el evento y segundo parametro lo que hace cuando este suceda.
                operation("undo")
            })
            break

        case "/":
            button.addEventListener("click", ()=>{
                operation("/")
            })
            break
        case "x":
            button.addEventListener("click", ()=>{
                operation("x")
            })
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

function writeScreen(str){          /* Función para escribir en la pantalla */

if(!(pant.textContent.length == 8)){
        
            if(pant.textContent === "0"){
                if(str == "."){  
                    pant.innerHTML = "0."
                }else{
                    pant.innerHTML = str
                }
            
            
            }else{
                if(pant.textContent.includes(".") && str == "." ){ 
                    pass//si ya se marco el decimal no es posible marcar otro
                }else{
                    
                    pant.innerHTML += str
                }
            }
        
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

        case "/":
           
            if(operate != ""){
                result(operate)
            }else{
                value = parseFloat(pant.textContent)
                pant.innerHTML = 0
                operate = "/"
            }
            break           
        case "x":
            if(operate != ""){
                result(operate)
            }else{
                value = parseFloat(pant.textContent)
                pant.innerHTML = 0
                operate = "x"
            }
            break
           
                       
            
    }
}
                

function result(opr){
    switch(opr) {
        case "":
            
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

        case "/":
            if(parseFloat(pant.textContent) < 1){
                pant.innerHTML = "No se puede dividir entre 0"

            }else{
                operate = ""
                value2 = parseFloat(pant.textContent)
                pant.innerHTML = value / value2
            }
            break

        case "x":
            operate = ""
            value2 = parseFloat(pant.textContent)
            pant.innerHTML = value * value2
            break


    }         
}

window.addEventListener("Keydown", () => { /* callback */
    alert("Presionaste una tecla")
    /* Javascript solo usa un hilo, lo sustituye ejecutandolo en segundo plano */ 
    
})