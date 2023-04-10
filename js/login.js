const modificar = document.querySelector('.modificar');


function login(){
    var user, password


    user = document.getElementById("emailLogin").value
    password = document.getElementById("passwordLogin").value

    if(user == "familiacontartese@gmail.com" && password == "Napalau1"){
        window.location = "index.html";

    } else {
        alert("Datos incorrectos")
    }
}