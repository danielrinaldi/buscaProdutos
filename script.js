const pesqCod = document.getElementById("codigoProduto")

function pesquisar(){
    const resultado = document.getElementById('res')
    const codProd = Number(pesqCod.value)
   if(codProd == 123){
       resultado.innerHTML=(`<strong>O valor é de R$ 50,00 </strong>`)
   } else (window.alert('erro'))
    
}