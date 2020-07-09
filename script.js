//cria a funcao com os dois parametros que serao utilizados para calcular
//Math.random() retorna valores entre 0 e 1. O multiplicador foi usado para aumentar esse intervalo!
function randomNumber(multiplicador, inputUsuario) {
    let numAleatorioAutomatico = -1
    let numExecucoes = 0
    while (numAleatorioAutomatico != inputUsuario) {
        numAleatorioAutomatico = Math.floor(Math.random() * multiplicador)
        numExecucoes += 1
        console.log("Numeros gerados automaticamente: ", numAleatorioAutomatico)
        console.log("Numero execucoes: ", numExecucoes)
    }
    return numExecucoes
}

//funcao para manipular os inputs no intervado de 0 - 9
function random09() {
    //insere o input do DOM para a variavel num09
    let num09 = document
        .getElementById("num0ate9")
        .value
        //insere o resultado na div apropriada do html
    let input09 = document.getElementById("res0ate9")

    //valida o intervalo de dados
    if (num09 < 0 || num09 > 9) {
        window.alert("O número deve estar entre 0 e 9!")
        limpaInput09(num09)
    } else { //calcula o numExecucoes ao chamar a funcao randomNumber criada acima
        let numExecucoes = randomNumber(10, num09) //multiplica por 10 para aumentar o valor 10X
        if (numExecucoes == 1) {
            input09.innerHTML = `A quantidade de execuções para o computador gerar o número ${num09} foi de ${numExecucoes} vez!`
            limpaInput09(num09)
        } else {
            input09.innerHTML = `A quantidade de execuções para o computador gerar o número ${num09} foi de ${numExecucoes} vezes!`
            limpaInput09(num09)
        }
    }
}

//funcao que limpa o campo de input 'num0ate9'
function limpaInput09() {
    document
        .getElementById("num0ate9")
        .value = ''
}

//funcao para manipular os inputs no intervado de 0 - 99
function random99() {
    //insere o input do DOM para a variavel num99
    let num99 = document
        .getElementById("num0ate99")
        .value
        //insere o resultado na div apropriada do html
    let input99 = document.getElementById("res0ate99")

    //valida o intervalo de dados
    if (num99 < 0 || num99 > 99) {
        window.alert("O número deve estar entre 0 e 99!")
        limpaInput99(num99)
    } else { //calcula o numExecucoes ao chamar a funcao randomNumber criada acima
        let numExecucoes = randomNumber(100, num99) //multiplica por 100 para aumentar o valor 100X
        if (numExecucoes == 1) {
            input99.innerHTML = `A quantidade de execuções para o computador gerar o número ${num99} foi de ${numExecucoes} vez!`
            limpaInput99(num99)
        } else {
            input99.innerHTML = `A quantidade de execuções para o computador gerar o número ${num99} foi de ${numExecucoes} vezes!`
            limpaInput99(num99)
        }
    }
}

//funcao que limpa o campo de input 'num0ate99'
function limpaInput99() {
    document
        .getElementById("num0ate99")
        .value = ''
}