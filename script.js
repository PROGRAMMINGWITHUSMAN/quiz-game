const quizData = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false }
      ]
    },
    {
      question: "What is 2 + 2?",
      answers: [
        { text: "4", correct: true },
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "3", correct: false }
      ]
    },
    {
      question: "Who is the President of the United States?",
      answers: [
        { text: "Barack Obama", correct: false },
        { text: "Donald Trump", correct: false },
        { text: "Joe Biden", correct: true },
        { text: "George Washington", correct: false }
      ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
          { text: "Au", correct: true },
          { text: "Ag", correct: false },
          { text: "Fe", correct: false },
          { text: "Pb", correct: false }
        ]
      },
      {
        question: "Which continent is the largest by land area?",
        answers: [
          { text: "Africa", correct: false },
          { text: "Asia", correct: true },
          { text: "North America", correct: false },
          { text: "Europe", correct: false }
        ]
      },
      {
        question: " What is the square root of 144?",
        answers: [
          { text: "12", correct: true },
          { text: "10", correct: false },
          { text: "16", correct: false },
          { text: "14", correct: false }
        ]
      },
      {
        question: " Who wrote To Kill a Mockingbird?",
        answers: [
          { text: "J.K. Rowling", correct: false },
          { text: "Harper Lee", correct: true },
          { text: "Mark Twain", correct: false },
          { text: "George Orwell", correct: false }
        ]
      },
      {
        question: " What does HTML stand for in web development?",
        answers: [
          { text: "Hyper Text Markup Language", correct: true },
          { text: "High Tech Modern Language", correct: false },
          { text: "Home Tool Markup Language", correct: false },
          { text: "Hyperlink and Text Markup Language", correct: false }
        ]
      },
      {
        question: "In which sport is the term home run used?",
        answers: [
          { text: "Soccer", correct: false },
          { text: "Basketball", correct: false },
          { text: "Baseball", correct: true },
          { text: "Tennis", correct: false }
        ]
      },
      {
        question: "Who painted the Mona Lisa?",
        answers: [
          { text: "Leonardo da Vinci", correct: true },
          { text: "Vincent van Gogh", correct: false },
          { text: " Pablo Picasso", correct: false },
          { text: "Michelangelo", correct: false }
        ]
      }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answers');
  const submitButton = document.getElementById('submit-btn');
  const resultElement = document.getElementById('result');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('answer-btn');
      button.addEventListener('click', () => selectAnswer(answer.correct));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(correct) {
    if (correct) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuiz();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.classList.add('hide');
    resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
    resultElement.classList.remove('hide');
  }
  