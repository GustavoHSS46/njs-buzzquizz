
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

    for (let i = 0; i < qtdPerguntaseMyQuizzes.value; i++) {
        

        const newPergunta = document.createElement("div")
        const h1 = document.createElement("h1")

        
        

        h1.innerHTML = 'Pergunta ' + i;


        newPergunta.appendChild(h1) 

        newPergunta.classList.add("notActive")
        

        containerPerguntas.appendChild(newPergunta)  
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