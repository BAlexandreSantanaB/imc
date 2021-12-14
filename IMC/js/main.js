function calcule(){

    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value

    let classificacao = ''
    let imc = peso / (altura * altura)

    let imcResult = imc.toFixed()

    if(imc < 18.5){
        classificacao = 'Magreza'
    }else if(imc => 18.5 && imc < 24.9){
        classificacao = 'Normal'
    }else if(imc => 24.9 && imc < 29.9){
        classificacao = 'Sobrepeso'
    }else if(imc => 30.0 && imc < 39.9){
        classificacao = 'Obesidade' 
    }else if(imc > 40.0){
        classificacao = 'Obesidade Grave'
    }

    document.getElementById('mensagem').innerHTML = 'Sua altura é de ' + altura + ' m, seu peso é de ' + peso + ' kg e seu IMC é ' + imcResult + ' classificado com: ' + classificacao

    console.log(classificacao)
}