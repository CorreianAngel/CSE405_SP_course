// JavaScript source code
//global constants for the buttons, question elements, and answer elemnts
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex  //randomly shuffles questions whenever user restarts quiz

startButton.addEventListener('click', startQuiz) //calls the startQuiz function when start button is clicked
nextButton.addEventListener('click', () => //procceds to the next question and calling the setNextQuestion function to execute that functions instructions.
{
  currentQuestionIndex++
  setNextQuestion()
})
function startQuiz()
{
  console.log('Started');
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion()
{
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
}

//reveals the quesiton and answers generated from the const array of questions and answers.
//btn class from html file is added and linked to the text of each answer while providing an "if" statement to determine if the selected option is 
//equaling to the correct one, calling back to selectAnswer function to follow thouse instructions. 
function showQuestion(question)
{
  questionElement.innerText = question.question
  question.answers.forEach(answer =>
  {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct)
    {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    
  })
}

//hides elements presenting the next question, restart the game 
function resetState()
{
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild)
  {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}
//Calculates the user's answer if its right or wrong and reveal next button setting up the next question or restart button if no more questions are read through the array.
function selectAnswer(e)
{
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button =>
  {
     setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1)
  {
   nextButton.classList.remove('hide')
  }
  else
  {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  nextButton.classList.remove('hide')
}

//calculates answer to alter colors of the background and buttons revealing if the user was right equalling green or wrong equalling red.
//The options are also revealed in green and red showing green as the correct answer and red for the wrong answer.
function setStatusClass(element, correct)
{
  clearStatusClass(element)
  if(correct)
  {
    element.classList.add('correct')
  }
  else
  {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element)
{
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

//The questions that generate on webpage.
//I do plan to modify these questions more in a JSON format and using json data.
const questions =
[
  {
    question: "How about this question?.",
    answers:[
       { text: 'yes', correct: true },
       { text: 'no', wrong: false },
    ]
  },
  {
    question: "Did this question pop up for the first time?",
    answers:[
       { text: 'yes', correct: true },
       { text: 'no', correct: true },
       { text: 'I think so', correct: true },
       { text: 'I dont feel like answering', wrong: false }
    ]
  }
]

