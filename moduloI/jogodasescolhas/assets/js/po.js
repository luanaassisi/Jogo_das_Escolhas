function nextStep() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Ele tem muito o que agregar no futuro para a empresa 2: Não. Vou focar nos meus desenvolvedores que entregam mais rapido."));

        if (questao1 === 2) {
            location.href = "../gameover.html";
        } else if (questao1 === 1) {
            location.href = "../po/po2.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}
function nextStep2() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Darei um voto de confiança e vou acompanhar o seu desenvolvimento. 2:Não. O tempo é curto"));

        if (questao1 === 2) {
            location.href = "../gameover.html";
        } else if (questao1 === 1) {
            location.href = "../po/po3.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}

function nextStep3() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Ele está fazendo um ótimo trabalho, mas ainda não conhece o mercado 2: Não. Não quero parecer sem palavra"));

        if (questao1 === 2) {
            location.href = "../gameover.html";
        } else if (questao1 === 1) {
            location.href = "../vitoria.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}

