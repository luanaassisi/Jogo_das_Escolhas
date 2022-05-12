function nextStep() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Sempre sonhei em trabalhar nessa empresa. 2: Não. não vou conseguir dar o meu melhor com o prazo tão curto"));

        if (questao1 === 1) {
            location.href = "../gameover.html";
        } else if (questao1 === 2) {
            location.href = "../../../stephan/stephan2.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}
function nextStep2() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Preciso organizar meus pensamentos. 2:Não. Eu tenho muita coisa pra fazer"));

        if (questao1 === 2) {
            location.href = "../gameover.html";
        } else if (questao1 === 1) {
            location.href = "../../../stephan/stephan3.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}

function nextStep3() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Peço ajuda, meu tempo está curto. 2: Não. Vou mostrar que eu consigo fazer sozinho"));

        if (questao1 === 2) {
            location.href = "../gameover.html";
        } else if (questao1 === 1) {
            location.href = "../vitoria.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}

