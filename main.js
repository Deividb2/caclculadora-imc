const botao = document.querySelector('.btn-calcular');

function calculoIMC() {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;   
    const resultado = document.querySelector('.imc-resultado');

    if (nome !== "" && altura !== "" && peso !== "") {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao;

        switch (valorIMC) {
            case valorIMC < 18.5:
                classificacao = "abaixo do peso";
                break;
            case valorIMC < 25:
                classificacao = "com o peso ideal";
                break
            case valorIMC < 30:
                classificacao = "levemente acima do peso";
                break
            case valorIMC < 35:
                classificacao = "com obesidade grau I";
                break
            case valorIMC < 40:
                classificacao = "com obesidade grau II";
                break
            case valorIMC > 40:
                classificacao = "com obesidade grau III. Cuidado!!";
                break;
        }
        resultado.innerHTML = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`
    } else {
        resultado.innerHTML = "preencha todos os campos";
    }
}

botao.addEventListener('click', calculoIMC);