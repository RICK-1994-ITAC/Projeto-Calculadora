function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        
        inicia(){
           this.clicaBotoes()
           this.pressEnter() 
        },

        pressEnter(){
            this.display.addEventListener('keyup',(e)=>{
                if(e.keyCode===13){
                    this.calcular()
                }
            })
        },

        calcular(){
            let resultado = document.querySelector('.display').value
            try {
                if(resultado){
                    document.querySelector('.display').value = eval(resultado)
                }
                
                if(!resultado){
                    throw 'Campo vazio ou inválido'
                }
                
                
                
            } catch (error) {
                alert(error)
            }
            

            
        },

        clicaBotoes(){
           document.addEventListener('click',(e)=>{
            const elementoClicado = e.target
            
            if(elementoClicado.classList.contains('btn-num')){
                this.display.value += elementoClicado.innerHTML
                this.display.focus()
            }

            if(elementoClicado.classList.contains('btn-apagarTudo')){
                this.display.value = ''
                this.display.focus()
            }
            
            if(elementoClicado.classList.contains('btn-desfazer')){
                this.display.value= this.display.value.slice(0 ,-1)
            }

            if(elementoClicado.classList.contains('btn-igual')){
                this.calcular()
            }
           }) 
        }

    }
}

const calculadora = criaCalculadora().inicia()