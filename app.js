const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')
// Questions
const questions = [
    {
        quiz: ['which is most widely used protocol in internet?'],
        options: ['FTP', 'TCP/IP', 'HTTP', 'SMTP'],
        correct: 3
    },
    {
        quiz: ['HTTP Stands for:'],
        options: ['HTML Transfer Protocol', 'Hypertext Transfer Protocol', 'HTML Text Tranfer Protocol', 'Mosaic'],
        correct: 2
    },
    {
        quiz: ['which protocol used to send mails?'],
        options: ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
        correct: 2
    },
    {
        quiz: ['CMS stands for _______ '],
        options: ['Control Management System', 'Copyrights Management System', 'Content Management System', 'None'],
        correct: 1
    },
    {
        quiz: ['Upload means'],
        options: ['Sending data from client machine to server machine', 'Sending data from server machine to client machine', 'All the above options', 'None'],
        correct: 1
    },
    {
        quiz: ['Which is the first web browser?'],
        options: ['Internet Explorer', 'WorldWideWeb (Nexus)', 'Chrome', 'Mosaic'],
        correct: 2
    },
    {
        quiz: ['ISP stands for: '],
        options: ['Internal Server Protocol', 'Internet Service Protocol', 'Internet Service Provider', 'Internet System Provider'],
        correct: 2
    },
    {
        quiz: ['MIME stands for?'],
        options: ['Multiple Internet Mail Extension', 'Multipurpose Internet mail Extension', 'Multipurpose Internet Mail Extension', 'None'],
        correct: 2
    },
    {
        quiz: ['HTML stands for'],
        options: ['HighText Machine Language', 'HighText Machine Language', 'HyperText Markup Language', 'None of these'],
        correct: 3
    },
    {
        quiz: ['HTML is what type of language?'],
        options: ['Scripting Language', 'Markup Language', 'Programming Language', 'Network Protocol'],
        correct: 2
    },
    {
        quiz: ['HTML uses'],
        options: ['Pre-specified tags', 'User defined tags', 'Fixed tags defined by the language', 'Tags only for linking'],
        correct: 3
    },
    {
        quiz: ['The year in which HTML was first proposed _______.'],
        options: ['1990', '1980', '1993', '1995'],
        correct: 3
    },
    {
        quiz: ['HTML is a subset of'],
        options: ['SGMT', 'SGMD', 'SGML', 'None of these'],
        correct: 3
    },
    {
        quiz: ['Which of the following tag is used to link the URL'],
        options: ['<hyperlink>', '<style>', '<link>', '<a>'],
        correct: 4
    },
    {
        quiz: ['<a> stands for'],
        options: ['Additional Tag', 'Active Tag', 'Action Tag', 'Anchor Tag'],
        correct: 4
    },
]

let score = 0

let clicked = []

scoreDisplay.textContent = score

function populateQuestions() {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = '🧠'
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText)
        })

        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option

            questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex + 1, question.correct))

            questionButtons.append(questionButton)
        })

        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')

        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox)
    })
}

populateQuestions()


function checkAnswer(questionBox, questionButton, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log('optionIndex', optionIndex);

    if (optionIndex == correctAnswer) {
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, "Correct!", 'correct')
    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, "wrong!", 'wrong')
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}

