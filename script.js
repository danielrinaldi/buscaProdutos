const pesqCod = document.getElementById("codigoProduto")
const codigosProdutos = {
    123:{
        Descrição : 'nome do produto',
        Tipo : 'tipo do produto',
        Preço: {vista: '50,00',
                prazo: '60,00'},
        Marca: 'marca teste',
    },
    124:{
        Descrição : 'nome do produto 124',
        Tipo : 'tipo do produto 124',
        Preço: {vista: '50,00',
                prazo: '60,00'},
        Marca: 'marca teste 124',
    },
}

function pesquisar(){
    const resultado = document.getElementById('res')
    const codProd = Number(pesqCod.value)
    if(codigosProdutos[codProd] == undefined){
        window.alert ('ERRO. Código digitado não é valido')
        pesqCod.focus() // para voltar o foco no input do código
        
    }else{
        resultado.innerHTML = `<strong>${codigosProdutos[codProd].Descrição}</strong><br>`
        resultado.innerHTML += `<strong>${codigosProdutos[codProd].Tipo}</strong><br>` 
        resultado.innerHTML += `<strong>à vista R$${codigosProdutos[codProd].Preço.vista} à prazo R$${codigosProdutos[codProd].Preço.prazo}</strong><br>`
        resultado.innerHTML += `<strong>${codigosProdutos[codProd].Marca}</strong><br>`
        pesqCod.focus()
    }
}
