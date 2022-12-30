
function displayData(res) {
    let datas = res.data;
    for (let data of datas) {
        const div = document.createElement('div');
        const id = document.createElement('h1');
        const title = document.createElement('h1');
        const bg = document.createElement('img');


        title.textContent = data.title
        div.textContent = data.image

        const imagPika = div.textContent
        const titleQuiz = title.textContent

        div.innerHTML = `<img src=\"${imagPika}"> <div class='h1'><h1>${titleQuiz}<h1/></div>`;
        

        div.classList.add("card");   

        container.appendChild(div);

    }
}

function telaInicial() {
    page1.classList.remove("hide")

    location.reload();
}

function criarButton() {
    page1.classList.add("hide")
    page2.classList.remove("hide")
}

function perguntas() {

    const titleMyQuizzesValues = titleMyQuizzes.value

    if (titleMyQuizzesValues.length > 65 || titleMyQuizzesValues.length < 20) {
        alert("Título do quizz: deve ter no mínimo 20 e no máximo 65 caracteres")
    } else if (qtdPerguntaseMyQuizzes.value < 3) {
        alert("Quantidade de perguntas: no mínimo 3 perguntas")
    } else if (qtdNiveisMyQuizzes.value < 2) {
        alert("Quantidade de níveis: no mínimo 2 níveis")
    } else {
        page2.classList.add("hide")
        page2Perguntas.classList.remove("hide")
        

        displayPerguntas()
    }
}

function displayPerguntas() {
    page2Perguntas.classList.remove("hide")
    const containerPerguntas = document.querySelector(".contentPerguntas")
    containerPerguntas.classList.remove("hide")

    for (let i = 1; i <= qtdPerguntaseMyQuizzes.value; i++) {
        

        const newPergunta = document.createElement("div")

        const divPerguntas = document.createElement("div")
        const h1 = document.createElement("h1")
        const txtPergunta = document.createElement("input")
        const corPergunta = document.createElement("input")

        const divReposta = document.createElement("div")
        const h2Resposta = document.createElement("h2")
        const respostaCorreta = document.createElement("input")
        const urlrespostaCorreta = document.createElement("input")

        const divRepostaIcorreta1 = document.createElement("div")
        const h2RespostaIncorreta = document.createElement("h2")
        const respostaIncorreta1 = document.createElement("input")
        const urlrespostaIncorreta1 = document.createElement("input")

        const divRepostaIcorreta2 = document.createElement("div")
        const respostaIncorreta2 = document.createElement("input")
        const urlrespostaIncorreta2 = document.createElement("input")

        const divRepostaIcorreta3 = document.createElement("div")
        const respostaIncorreta3 = document.createElement("input")
        const urlrespostaIncorreta3 = document.createElement("input")
        

        h1.innerHTML = 'Pergunta ' + i;
        h2Resposta.innerHTML = 'Resposta correta';
        h2RespostaIncorreta.innerHTML = 'Resposta incorreta';

        txtPergunta.placeholder = "Texto da pergunta";
        corPergunta.placeholder = "Cor de fundo da pergunta";
        respostaCorreta.placeholder = "Resposta correta";
        urlrespostaCorreta.placeholder = "URL da imagem";
        respostaIncorreta1.placeholder = "Resposta incorreta 1";
        urlrespostaIncorreta1.placeholder = "URL da imagem 1";
        respostaIncorreta2.placeholder = "Resposta incorreta 2";
        urlrespostaIncorreta2.placeholder = "URL da imagem 2";
        respostaIncorreta3.placeholder = "Resposta incorreta 3";
        urlrespostaIncorreta3.placeholder = "URL da imagem 3";






        divPerguntas.appendChild(h1) 
        divPerguntas.appendChild(txtPergunta) 
        divPerguntas.appendChild(corPergunta) 

        divReposta.appendChild(h2Resposta) 
        divReposta.appendChild(respostaCorreta) 
        divReposta.appendChild(urlrespostaCorreta)  

        divRepostaIcorreta1.appendChild(h2RespostaIncorreta)
        divRepostaIcorreta1.appendChild(respostaIncorreta1)
        divRepostaIcorreta1.appendChild(urlrespostaIncorreta1) 

        divRepostaIcorreta2.appendChild(respostaIncorreta2)
        divRepostaIcorreta2.appendChild(urlrespostaIncorreta2)

        divRepostaIcorreta3.appendChild(respostaIncorreta3)
        divRepostaIcorreta3.appendChild(urlrespostaIncorreta3)


        newPergunta.appendChild(divPerguntas)
        newPergunta.appendChild(divReposta)
        newPergunta.appendChild(divRepostaIcorreta1)
        newPergunta.appendChild(divRepostaIcorreta2)
        newPergunta.appendChild(divRepostaIcorreta3)



        newPergunta.classList.add("notActive")        

        containerPerguntas.appendChild(newPergunta)  

        
        newPergunta.onclick = function () {
            newPergunta.classList.add("active")

            const activePergunta = querySelectorAll(".active")

            activePergunta.onclick = function () {
                activePergunta.classList.remove("active")   
            }
        };
    } 
}

const url = `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes`
const container = document.querySelector('.AllQuiz')
const card = document.querySelector('.macaco') 
const page1 = document.querySelector('.Page-1')
const page2 = document.querySelector('.Page-2')
const page2Perguntas = document.querySelector('.Page-2_Perguntas')


const titleMyQuizzes = document.querySelector('.titleQuizz')
const urlImgMyQuizzes = document.querySelector('.urlQuizz')
const qtdPerguntaseMyQuizzes = document.querySelector('.qtdPerguntasQuizz')
const qtdNiveisMyQuizzes = document.querySelector('.qtdNivesQuizz')








axios
    .get(url)
    .then(displayData)