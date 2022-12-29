
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
        
        console.log(data);

        div.innerHTML = `<img src=\"${imagPika}"> <div class='h1'><h1>${titleQuiz}<h1/></div>`;
        

        div.classList.add("card");   

        container.appendChild(div);

    }
}

function telaInicial() {
    page1.classList.remove("hide")
}

function criarButton() {
    page1.classList.add("hide")
    page2.classList.remove("hide")
}


function perguntas() {
    page2.classList.add("hide")
    page2Perguntas.classList.remove("hide")
}


const url = `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes`
const container = document.querySelector('.AllQuiz')
const card = document.querySelector('.macaco') 
const page1 = document.querySelector('.Page-1')
const page2 = document.querySelector('.Page-2')
const page2Perguntas = document.querySelector('.Page-2_Perguntas')


axios
    .get(url)
    .then(displayData)