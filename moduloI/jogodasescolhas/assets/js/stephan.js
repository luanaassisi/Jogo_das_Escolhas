function nextStep(){
    let question1;

    while(question1 !== 1 && question1 !== 2 ){
        question1 = Number(prompt("Escolha a alternativa 1 ou 2"));

        if(question1 === 1){
            location.href ="../gameover.html";
        } else if (question1 === 2){
            location.href ="../vitoria.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }
}

nextStep('1','../gameover.html')
