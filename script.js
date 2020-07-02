function random09() {

    let num09 = document
        .getElementById("num0ate9")
        .value

    if (num09 < 0 || num09 > 9) {
        window.alert("O número deve estar entre 0 e 9!")
        document
            .getElementById("num0ate9")
            .value = ''
    } else {

        let numAleatorioAutomatico = -1
        let numExecucoes = 0

        while (numAleatorioAutomatico != num09) {
            numAleatorioAutomatico = Math.floor(Math.random() * 10)
            numExecucoes += 1
            console.log("Numeros gerados automaticamente: ", numAleatorioAutomatico)
            console.log("Numero execucoes: ", numExecucoes)
        }

        if (numExecucoes == 1) {
            document
                .getElementById("res0ate9")
                .innerHTML = `A quantidade de execuções para o computador gerar o número ${num09} foi de ${numExecucoes} vez!`

            document
                .getElementById("num0ate9")
                .value = '';
        }

        document
            .getElementById("res0ate9")
            .innerHTML = `A quantidade de execuções para o computador gerar o número ${num09} foi de ${numExecucoes} vezes!`

        document
            .getElementById("num0ate9")
            .value = '';
    }
}

function random99() {

    let num99 = document
        .getElementById("num0ate99")
        .value

    if (num99 < 0 || num99 > 99) {
        window.alert("O número deve estar entre 0 e 99!")
        document
            .getElementById("num0ate99")
            .value = ''
    } else {

        let numAleatorioAutomatico = -1
        let numExecucoes = 0

        while (numAleatorioAutomatico != num99) {
            numAleatorioAutomatico = Math.floor(Math.random() * 100)
            numExecucoes += 1
            console.log("Numeros gerados automaticamente: ", numAleatorioAutomatico)
            console.log("Numero execucoes: ", numExecucoes)
        }

        if (numExecucoes == 1) {
            document
                .getElementById("res0ate99")
                .innerHTML = `A quantidade de execuções para o computador gerar o número ${num99} foi de ${numExecucoes} vez!`

            document
                .getElementById("num0ate99")
                .value = '';
        }

        document
            .getElementById("res0ate99")
            .innerHTML = `A quantidade de execuções para o computador gerar o número ${num99} foi de ${numExecucoes} vezes!`

        document
            .getElementById("num0ate99")
            .value = '';
    }
}