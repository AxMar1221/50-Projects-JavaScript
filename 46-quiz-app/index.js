window.addEventListener('load', () => {
    console.log('window loaded');
});

const dataQuiz = 'data.js';
fetch(dataQuiz)
.then( resp => { return resp.json()})
.then( data => {
    console.log(data);

const quiz = document.getElementById('quiz');
const answerElem = document.querySelectorAll('.answer');
const questionElem = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = data[currentQuiz]
    console.log(currentQuizData)

    questionElem.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerElem.forEach(answerElem => answerElem.checked = false)
}

function getSelected() {
    let answer

    answerElem.forEach(answerElem => {
        if ( answerElem.checked ) {
            answer = answerElem.id
        }
    });

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if ( answer ){
        if ( answer === data[currentQuiz].correct ) {
            score++
        }
        currentQuiz++
         if ( currentQuiz < data.length ) {
            loadQuiz()
         } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${data.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
        `
         }
    }
})

});
