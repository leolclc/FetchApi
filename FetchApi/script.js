window.onload = function pegarDadosDogceo() { 
let nome = document.getElementById('foto').value;
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(dados => preencherDados(dados))

    
}

function preencherDados(dados) {
   
    document.getElementById('foto').innerHTML = "<img class='foto' src='"+dados.message+"'>";


  
}


function pegarDadosDogceo() {
    let nome = document.getElementById('foto').value;
     fetch('https://dog.ceo/api/breeds/image/random')
     .then(response => response.json())
     .then(dados => console.log(dados))
 
    
   
 }
 
 