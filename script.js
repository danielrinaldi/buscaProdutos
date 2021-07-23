const pesqCod = document.getElementById('codigoProduto')
const codigosProdutos = {
    123:{
        Descrição : 'nome do produto',
        Preço: {vista: '50,00',
                prazo: '60,00'},
        Marca: 'marca teste',
    },
    2355:{
        Descrição : 'PINGENTE FOLHEADO C/ BR. FOLHA',
        Preço: {vista: '55,00',
                prazo: '62,00'},
        Marca: 'HERMANO JOIAS',
    },
    19504:{
        Descrição : 'PINGENTE FOLHEADO OVAL ACRILICO 1 BONECA',
        Preço: {vista: '45,00',
                prazo: '50,00'},
        Marca: 'HERMANO JOIAS',
    },
    22954:{
        Descrição : 'PINGENTE FOLHEADO C/ 1 ZIRCONIA CABEÇA CAVALO',
        Preço: {vista: '61,00',
                prazo: '68,00'},
        Marca: 'HERMANO JOIAS',
    },
    27958:{
        Descrição : 'PINGENTE FOLHEADO ORAÇÃO PAI NOSSO ',
        Preço: {vista: '32,00',
                prazo: '35,00'},
        Marca: 'HERMANO JOIAS',
    },
    28396:{
        Descrição : 'PINGENTE FOLHEADO P. LARANJA TR. CORAÇÃO 3 GARR.15',
        Preço: {vista: '33,00',
                prazo: '36,00'},
        Marca: 'HERMANO JOIAS',
    }                                                
}
function pesquisar(){
    const resultado = document.getElementById('res')
    const codProd = Number(pesqCod.value)
    if(codigosProdutos[codProd] == undefined){
        window.alert ('ERRO. Código digitado não é valido')
        pesqCod.focus() // para voltar o foco no input do código
        resultado.innerHTML=''
        
    }else{
        resultado.innerHTML = `<strong>${codigosProdutos[codProd].Descrição}</strong><br>`
        resultado.innerHTML += `<strong>À VISTA R$ ${codigosProdutos[codProd].Preço.vista} À PRAZO R$ ${codigosProdutos[codProd].Preço.prazo}</strong><br>`
        resultado.innerHTML += `<strong>${codigosProdutos[codProd].Marca}</strong><br>`
        pesqCod.focus()
    }
}
