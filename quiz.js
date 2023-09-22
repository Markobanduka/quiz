const data = [
  {
    id: 1,
    question: 'What is the largest province in the Philippines in terms of land area?',
    answers: [
      { answer: 'Isabela', isCorrect: false },
      { answer: "Maguindanao", isCorrect: false },
      { answer: "Cagayan", isCorrect: false },
      { answer: "Palawan", isCorrect: true },
    ],
  },
  {
    id: 2,
    question: 'What is the longest mountain range in the Country?',
    answers: [
      { answer: 'Sierra Madre', isCorrect: true },
      { answer: 'Cordillera', isCorrect: false },
      { answer: 'Caraballo', isCorrect: false },
      { answer: 'Pinatubo', isCorrect: false },
    ],
  },
  {
    id: 3,
    question: 'What do you call the native inhabitants of Pangasinan?',
    answers: [
    { answer: "Pangasinense", isCorrect: true },
    { answer: "Iloko", isCorrect: false },
    { answer: "Ilokano", isCorrect: false },
    { answer: "Pangalatok", isCorrect: false }, 
  ],
},
{
    id: 4,
    question: 'What city in Pangasinan is famous for its milkfish (locally known as "bangus")?',
    answers: [
    { answer: "San Carlos City", isCorrect: false },
    { answer: "Dagupan City", isCorrect: true },
    { answer: "Urdaneta City", isCorrect: false },
    { answer: "Lingayen", isCorrect: false }, 
  ],
  },
  {
    id: 5,
    question: 'The Philippines is composed of approximately how many islands?',
    answers: [
    { answer: "5,500", isCorrect: false },
    { answer: "7,500", isCorrect: true },
    { answer: "15,000", isCorrect: false },
    { answer: "2,000", isCorrect: false }, 
  ],
  },
  {
    id: 6,
    question: 'The Philippine independence was proclaimed in Kawit. In which province can you find this town?',
    answers: [
    { answer: "Cavite", isCorrect: true },
    { answer: "Tarlac", isCorrect: false },
    { answer: "Batangas", isCorrect: false },
    { answer: "Bulacan", isCorrect: false }, 
  ],
  },
  {
    id: 7,
    question: 'What is the national flower of the Philippines?',
    answers: [
    { answer: "Sampaguita", isCorrect: true },
    { answer: "Orchid", isCorrect: false },
    { answer: "Rose", isCorrect: false },
    { answer: "Bauhinia", isCorrect: false }, 
  ],
  },
  {
    id: 8,
    question: 'Magellan attempted to sail around the world but was killed in the Philippines. Who led the men who killed him??',
    answers: [
    { answer: "Araw Araw", isCorrect: false },
    { answer: "Lapu Lapu", isCorrect: true },
    { answer: "Mundo Mundo", isCorrect: false },
    { answer: "Mahal", isCorrect: false }, 
  ],
  },
  {
    id: 9,
    question: 'What are the official languages of the Philippines?',
    answers: [
    { answer: "Cebuano and Chinese", isCorrect: false },
    { answer: "Bicol and Ilocano", isCorrect: false },
    { answer: "Tagalog and Spanish", isCorrect: false },
    { answer: "Filipino and English", isCorrect: true }, 
  ],
  },
  {
    id: 10,
    question: 'Pangasinan is found in what part of the Philippines??',
    answers: [
    { answer: "Visayas", isCorrect: false },
    { answer: "Luzon", isCorrect: true },
    { answer: "Mindanao", isCorrect: false },
    { answer: " Palawan", isCorrect: false }, 
  ],
  },
  ];

const gameScreen = document.querySelector('.game');
const resultScreen =document.querySelector('.result');
const question =document.querySelector('.question');
const answerContainer =document.querySelector('.answers');
const submit =document.querySelector('.submit');
const play =document.querySelector('.playagain');
const added =document.querySelector('.filipino1');
const addedDown =document.querySelector('.filipino2')


let qIndex =0;
let correctCount =0;
let wrongCount =0;
let total =0;
let selectedAnswer;

const playAgain = ()=>{
  qIndex =0;
  correctCount =0;
  wrongCount =0;
  total=0;
  showQuestion(qIndex);
};

play.addEventListener('click',()=>{
  resultScreen.style.display ="none";
  gameScreen.style.display ="block"

  playAgain();
});

const showResult = () =>{
  resultScreen.style.display = "block"; 
  gameScreen.style.display = "none";
  added.style.display = "block",
  addedDown.style.display = "block"

  resultScreen.querySelector('.correct').textContent =
  `Correct Answers: ${correctCount}`

  resultScreen.querySelector('.wrong').textContent =
  `Wrong Answers: ${wrongCount}`

  resultScreen.querySelector('.score').textContent =
  `Score: ${(correctCount) * 10 + "%"
  }`;
}


const showQuestion = (qNumber) =>{
  if(qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers.map((item,index) => 
  `
  <div class="answer">
  <input name="answer" type="radio" id="${index}" value=${item.isCorrect}>
  <label for="1">${item.answer}</label>
</div>
  `
  ).join("");

 selectAnswer();

};

const selectAnswer =()=>{
  answerContainer.querySelectorAll('input').forEach(el=> {
   el.addEventListener('click',(e)=>{
    selectedAnswer = e.target.value;
   }) 
  })
}

const submitAnswer =()=>{
  submit.addEventListener('click', ()=>{
    if(selectedAnswer !== null){
      selectedAnswer === 'true'? correctCount++ :wrongCount++;
      qIndex++
      showQuestion(qIndex)
    }else alert('Select an answer')
  })
}

showQuestion(qIndex);
submitAnswer();