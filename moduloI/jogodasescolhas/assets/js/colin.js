function nextStep() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Já estou há um tempo sem participar de jogos inovadores 2: Não. Vou trabalhar em algo só meu"));

        if (questao1 === 2) {
            location.href = "../gameover.html";
        } else if (questao1 === 1) {
            location.href = "../colin2.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}
function nextStep2() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Eu sou o senior que eu gostaria de ter encontrado quando Jr. 2:Não. A parte dele é fácil"));

        if (questao1 === 2) {
            location.href = "../gameover.html";
        } else if (questao1 === 1) {
            location.href = "../colin3.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}

function nextStep3() {
    let questao1;

    while (questao1 !== 1 && questao1 !== 2) {
        questao1 = Number(prompt("1: Sim. Não está como eu gostaria 2: Não. Eu já dei todos os feedbacks que eu pude, não vou ser chato"));

        if (questao1 === 1) {
            location.href = "../gameover.html";
        } else if (questao1 === 2) {
            location.href = "../vitoria.html";
        } else {
            alert("Resposta invalida! Por favor, utilize um dos numeros indicados.")
        }


    }

}

