const root = document.getElementById("root")
const tasks = document.getElementById("tasks")
const addTask = document.getElementById("add-task")
const buttonAddTask = document.getElementById("btn-add")
var listTask = [] //Se guardan una lista de las tareas que escribió el usuario
var TaskDescription = []
var cont = 0


buttonAddTask.addEventListener('click', () => {

    if(addTask.value.toString() != ""){

        listTask.push(addTask.value.toString())
        TaskDescription.push("")

        let task = `
                <div class="a-task">
                    <p>${listTask[0]}</p>
                    <div>
                        <button id="add-description">+</button>
                        <input type="checkbox" id="task${cont}" >
                    </div>
                </div>
        `

        tasks.innerHTML += task 
        let check = document.getElementById("task" + cont.toString())
        alert(check.checked)




    }else{
        alert("No escribiste nada,kvron")
    }

})

window.onload = () => {
    console.log('Se cargó la ventana automaticamente')
}