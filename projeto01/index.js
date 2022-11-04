const jsQuestion = document.querySelector('.js-question-title')
const btnNext = document.querySelector('.btn-next');
const inputQuestionData = document.querySelectorAll('#js-question-data');
const questionLabels = document.querySelectorAll('label')
const questionContent = document.querySelector('.js-question-content');
const btnSubmit = document.querySelector('.btn-submit')

let userOption = [];

// add first event if needed
btnSubmit.classList.toggle('hidden')

const questions = [
  {
    pergunta: "Quem é o primeiro ministro do Reino Unido?",
    escolhas: [
      "David 0 Cameron",
      "Gordon Brown",
      "Winston Churchill",
      "Tony Blair",
    ],
    respostaCorreta: 1,
  },
  {
    pergunta: "Quem é o primeiro ministro do Reino Unido?",
    escolhas: [
      "David 1 Cameron",
      "Gordon Brown",
      "Winston Churchill",
      "Tony Blair",
    ],
    respostaCorreta: 2,
  },
  {
    pergunta: "Quando em é o primeiro ministro do Reino Unido?",
    escolhas: [
      "David 2 Cameron",
      "Gordon Brown",
      "Winston Churchill",
      "Tony Blair",
    ],
    respostaCorreta: 0,
  },
  {
    pergunta: "Onde é o primeiro ministro do Reino Unido?",
    escolhas: [
      "David 3 Cameron",
      "Gordon Brown",
      "Winston Churchill",
      "Tony Blair",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta: "Com quem é o primeiro ministro do Reino Unido?",
    escolhas: [
      "David 4 Cameron",
      "Gordon Brown",
      "Winston Churchill",
      "Tony Blair",
    ],
    respostaCorreta: 0,
  },
  {
    pergunta: "Quem é o primeiro ministro do Reino Unido?",
    escolhas: [
      "David 5 Cameron",
      "Gordon Brown",
      "Winston Churchill",
      "Tony Blair",
    ],
    respostaCorreta: 3,
  },
  {
    pergunta: "Quem é o primeiro ministro do Reino Unido?",
    escolhas: [
      "David 6 Cameron",
      "Gordon Brown",
      "Winston Churchill",
      "Tony Blair",
    ],
    respostaCorreta: 2,
  }
];

const questionLength = questions.length;
let count = 0;

let question = questions[count];
jsQuestion.textContent = question.pergunta;


function loadData() {
  for (let i = 0 ; i < question.escolhas.length; i++) {
    questionContent.innerHTML += `
    <p>
      <input type="radio" name="choice" id="option${i}" value=${i}>
      <label for="option${i}">${question.escolhas[i]}</label>  
    </p
  `
  }
}
loadData();

btnNext.addEventListener('click', () => {
  count++;
  
  if (count >= questionLength) {
    btnSubmit.classList.toggle('hidden')
    btnNext.classList.toggle('hidden')
  }
  
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    if (input.checked) {
      if (input.value == question.respostaCorreta) {
        userOption.push(true)
      }
    }
  })

  question = questions[count];
  jsQuestion.textContent = question.pergunta;
  questionContent.innerHTML = ''
  loadData(); 
})

window.addEventListener('submit', (event) => {
  event.preventDefault();
  questionContent.innerHTML = `
    Parabéns! Você acertou ${((userOption.length * 100) / questions.length).toFixed(0)}%
  `
  btnSubmit.classList.toggle('hidden');
})