var app = document.getElementById("app")
var getUsersButton = document.getElementById("get-users")

/* const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      var data = JSON.parse(this.responseText)
      var cards = ""

      for(data of data){
        cards += `

        <div class="card">
          <p>El ID es : ${data[0]} </p>
          <p>El nombre es : ${data[1]} </p>
          <p>La contraseña es: ${data[2]} </p>
        </div>

        `
      }

      app.innerHTML = cards
      

    }
  };
  xhttp.open("GET", "http://proyectos.test:8080/PHP/api/responseapi.php");
  xhttp.send(); */


  /* fetch("http://proyectos.test:8080/PHP/api/responseapi.php")
    .then(data => data.json())
    .then(data => {

      var cards = ""

      for(data of data){
        cards += `

        <div class="card">
          <p>El ID es : ${data[0]} </p>
          <p>El nombre es : ${data[1]} </p>
          <p>La contraseña es: ${data[2]} </p>
        </div>

        `
      }

      app.innerHTML = cards

    }) */


function getUsers(){
      
fetch("http://proyectos.test:8080/PHP/api/responseapi.php")
    .then(data => data.json())
    .then(data => {

      var cards = ""

      for(data of data){
        cards += `

        <div class="card">
          <p>El ID es : ${data[0]} </p>
          <p>El nombre es : ${data[1]} </p>
          <p>La contraseña es: ${data[2]} </p>
        </div>

        `
      }

      app.innerHTML = cards
    })


}