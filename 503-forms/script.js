let form = document.querySelector("form");
let select = document.querySelector("select");
let caixa = document.querySelectorAll("input");
let botao = document.querySelector("button");
let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmarEmail = document.querySelector("#confirmarEmail");
let senha = document.querySelector("#senha");



function  () {
    
    localStorage.setItem("nome", nome.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("confirmarEmail", confirmarEmail.value);
    localStorage.setItem("senha", senha.value);

}

if(localStorage.none){
    form.style.display = "none";
    texto.innerHTML = ""
}



