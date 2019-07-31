let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto= document.querySelector("p")
let naoSou = document.querySelector("a");
let bemvinda= document.querySelector("h1")


function  limpar(){
    localStorage.removeItem('nome');
}


if (localStorage.nome){
    caixaTexto.style.display = 'none'
    botao.style.display = 'none'
    bemvinda.innerHTML = `seja bem vinda ${localStorage.nome}`
    naoSou.innerHTML = `nao e ${localStorage.nome}?`
}
else{
    function acessar(){
        localStorage.setItem("nome", caixaTexto.value);
        caixaTexto.style.display = 'none'
        botao.style.display = 'none'
        bemvinda.innerHTML = `seja bem vinda ${localStorage.nome}`
        naoSou.innerHTML = `nao e ${localStorage.nome}?`
    }
    botao.onclick = acessar;
}



naoSou.onclick = limpar;
