var butons = document.getElementsByTagName("button")
var content  = document.getElementsByClassName("hidden-content")
var contentStatus = []

for(let i in butons){
    contentStatus.push(0) //Array binario, que guarda el estado de cada elemento content [1, 0 ,0]
}

for(let i in butons){
    butons[i].addEventListener('click', function(){
        //alert("presionaste el botton: " + (parseInt(i)+1))
        content[i].style.opacity = "1"
        content[i].innerHTML = `<p style="font-size:18pt; color: white;">
            Has comprado el producto  ${parseInt(i)+1}
        </p>`
        contentStatus[i] = 1
        changeElements(i)
    })
}


function changeElements(ci){
    for(let i in content){
        if(i == ci){
            continue
        }else if(contentStatus[i] == 1){
            content[i].style.opacity = "0"
        }
    }
}