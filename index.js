
  
const perguntasERespostas= document.querySelectorAll(".acordeon")

perguntasERespostas.forEach(function(acordeon){

    acordeon.addEventListener("click", function(){

        const itemAtivo = document.querySelector(".ativo")

        if (itemAtivo){
            itemAtivo.classList.remove("ativo")
        }
        
        acordeon.classList.add("ativo")
    })
})
  
