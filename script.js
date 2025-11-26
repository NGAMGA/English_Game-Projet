const questions = {
    'HTML / CSS': {
        'easy': [{ question: "What does the acronym HTML stand for?", answers: ["A. High Tech Modern Layout", "B. HyperText Markup Language", "C. Hyper Tortue Méga Tonère"], correctIndex: 1 }],
        'intermediate': [{ question: "What is CSS primarily used for?", answers: ["A. Database management", "B. Styling the presentation of a document", "C. Server-side scripting"], correctIndex: 1 }],
        'hard': [{ question: "What is the difference between 'margin' and 'padding' in CSS?", answers: ["A. Margin is inside the border, Padding is outside", "B. Padding is inside the border, Margin is outside", "C. They are interchangeable terms"], correctIndex: 1 }],
    },
    'Cybersecurity': {
        'easy': [{ question: "What is a 'firewall' used for?", answers: ["A. To start a browser", "B. To protect a network from unauthorized access", "C. To download files"], correctIndex: 1 }],
        'intermediate': [{ question: "What is 'phishing'?", answers: ["A. An advanced programming technique", "B. An attempt to steal personal info via fraudulent emails", "C. A type of database"], correctIndex: 1 }],
        'hard': [{ question: "What is MFA?", answers: ["A. Multi-Function Access", "B. Managed Firewall Administration", "C. Multi-Factor Authentication"], correctIndex: 2 }],
    },
    'Algorithms': {
        'easy': [{ question: "What is an Algorithm?", answers: ["A. A style of dance", "B. A step-by-step procedure for calculations", "C. A type of computer memory"], correctIndex: 1 }],
        'intermediate': [{ question: "Which efficiency measure is key for algorithms?", answers: ["A. Time and Space Complexity", "B. Colour and Font Size", "C. Hardware Brand"], correctIndex: 0 }],
        'hard': [{ question: "What is 'Recursion'?", answers: ["A. A data encryption method", "B. A function calling itself", "C. A network topology"], correctIndex: 1 }],
    },
    'Internet Usage': {
        'easy': [{ question: "What is a common use for a VPN?", answers: ["A. Improving screen resolution", "B. Securely connecting to a private network over the internet", "C. Editing video files"], correctIndex: 1 }],
        'intermediate': [{ question: "What is the difference between HTTP and HTTPS?", answers: ["A. HTTP is faster", "B. HTTPS uses SSL/TLS for encryption", "C. HTTP is for text, HTTPS is for images"], correctIndex: 1 }],
        'hard': [{ question: "Which layer of the OSI model does a router primarily operate on?", answers: ["A. Data Link Layer (Layer 2)", "B. Network Layer (Layer 3)", "C. Transport Layer (Layer 4)"], correctIndex: 1 }],
    },
    'Conversion Funnels': {
        'easy': [{ question: "What is the first stage of a typical sales funnel?", answers: ["A. Conversion", "B. Awareness", "C. Retention"], correctIndex: 1 }],
        'intermediate': [{ question: "In marketing, what does 'CTA' stand for?", answers: ["A. Customer Target Area", "B. Call To Action", "C. Content Traffic Analysis"], correctIndex: 1 }],
        'hard': [{ question: "Which metric measures the cost of acquiring one customer?", answers: ["A. LTV (Lifetime Value)", "B. ROI (Return on Investment)", "C. CAC (Customer Acquisition Cost)"], correctIndex: 2 }],
    },
    
    'Luck': [
        { type: 'advantage', text: "LUCKY! Advance 3 squares.", movement: 3 },
        { type: 'advantage', text: "BONUS! Advance 1 square.", movement: 1 },
        { type: 'disadvantage', text: "BAD LUCK! Go back 2 squares.", movement: -2 },
        { type: 'disadvantage', text: "FORFEIT! Lose your next turn.", movement: 0, penalty: "lose_turn" },
        { type: 'neutral', text: "NOTHING HAPPENS. Stay put.", movement: 0 }
    ]
};


const timerDisplay = document.getElementById('timer-display');
const messageDisplay = document.getElementById('message-display');
const themeSelectionDiv = document.getElementById('theme-selection');
const difficultySelectionDiv = document.getElementById('difficulty-selection');
const questionScreenDiv = document.getElementById('question-screen');

const themeBtns = document.querySelectorAll('.theme-btn');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const answerBtns = document.querySelectorAll('.answer-btn');

const questionText = document.getElementById('question-text');
const currentThemeDisplay = document.getElementById('current-theme-display');
const currentDifficultyDisplay = document.getElementById('current-difficulty-display');
const resultMessage = document.getElementById('result-message');
const toggleRulesBtn = document.getElementById('toggle-rules-btn');
const fullRulesContent = document.getElementById('full-rules-content');


let timerInterval;
const initialTime = 30;
let currentQuestion = null;
let selectedTheme = null;


function getRandomQuestion(theme, level) {
    const themeQuestions = questions[theme][level];
    
    return themeQuestions[0]; 
}

function getRandomLuckAction() {
    const luckActions = questions['Luck'];
    const randomIndex = Math.floor(Math.random() * luckActions.length);
    return luckActions[randomIndex];
}





function showThemeSelection() {
    
    themeSelectionDiv.style.display = 'flex';
    difficultySelectionDiv.style.display = 'none';
    questionScreenDiv.style.display = 'none';
    
    
    timerDisplay.textContent = initialTime;
    timerDisplay.style.color = '#007bff';
    messageDisplay.textContent = "Select your Theme.";
    resultMessage.textContent = '';
    
    
    themeBtns.forEach(btn => btn.disabled = false);
}


function showDifficultySelection(theme) {
    selectedTheme = theme;
    
    if (theme === 'Luck') {
        
        handleLuckAction();
        return;
    }
    
    
    themeSelectionDiv.style.display = 'none';
    difficultySelectionDiv.style.display = 'flex';
    questionScreenDiv.style.display = 'none';
    
    currentThemeDisplay.textContent = `[Theme: ${theme}]`;
    messageDisplay.textContent = "2. Choose Difficulty (Starts Timer):";
}


function showQuestion(level) {
    
    currentQuestion = getRandomQuestion(selectedTheme, level);
    currentQuestion.difficulty = level; 

    
    questionScreenDiv.style.display = 'block';
    difficultySelectionDiv.style.display = 'none';
    questionText.textContent = currentQuestion.question;
    currentDifficultyDisplay.textContent = `[${level.toUpperCase()}]`;
    
    
    document.getElementById('answer-options').style.display = 'flex'; 
    document.getElementById('question-header').textContent = "Question:";
    

    answerBtns.forEach((btn, index) => {
        btn.textContent = currentQuestion.answers[index];
        btn.disabled = false;
        btn.style.backgroundColor = ''; 
        btn.classList.remove('correct', 'incorrect');
    });
    
    
    startTimer();
}


function handleLuckAction() {
    const action = getRandomLuckAction();
    const isAdvantage = (action.type === 'advantage');
    const color = isAdvantage ? '#28a745' : '#dc3545';
    

    themeSelectionDiv.style.display = 'none';
    difficultySelectionDiv.style.display = 'none';
    
    
    questionScreenDiv.style.display = 'block';
    
    
    document.getElementById('answer-options').style.display = 'none';
    document.getElementById('question-header').textContent = "🍀 CHANCE SQUARE RESULT 🍀";
    questionText.textContent = action.text;
    
    
    timerDisplay.textContent = action.movement !== 0 ? action.movement : '0';
    timerDisplay.style.color = color;
    messageDisplay.textContent = isAdvantage ? 'You got an Advantage!' : 'You got a Disadvantage!';

    let resultMsgHTML = `<span style="font-size: 1.5em; color: ${color};">${action.type.toUpperCase()}!</span><br>`;
    
    if (action.movement !== 0) {
        resultMsgHTML += `Move: ${action.movement} squares.`;
    } else if (action.penalty === 'lose_turn') {
         resultMsgHTML += `Penalty: ${action.text}.`;
    } else {
        resultMsgHTML += `No movement required.`;
    }
    
    resultMessage.innerHTML = resultMsgHTML;

    
    setTimeout(() => {
        showThemeSelection();
    }, 8000); 
}



function startTimer() {
    let timeLeft = initialTime;
    timerDisplay.textContent = timeLeft;
    
    messageDisplay.textContent = "TIME REMAINING. Answer quickly!";
    timerDisplay.style.color = '#dc3545'; 
    
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval); 
            timerDisplay.textContent = "STOP";
            
            endTurn(false, 'TIME OUT! No response. No movement.', -1); 
        }
    }, 1000); 
}


function handleAnswer(selectedIndex) {
    
    clearInterval(timerInterval); 
    
    
    answerBtns.forEach(btn => btn.disabled = true);

    const isCorrect = (selectedIndex === currentQuestion.correctIndex);
    
    
    answerBtns[currentQuestion.correctIndex].classList.add('correct');
    
    if (isCorrect) {
        
        endTurn(true, 'CORRECT! Move Forward.', selectedIndex);
    } else {
        
        
        answerBtns[selectedIndex].classList.add('incorrect');
        
        
        answerBtns[currentQuestion.correctIndex].style.backgroundColor = '';
        
        endTurn(false, 'WRONG ANSWER. Do not move.', selectedIndex);
    }
}


function endTurn(isCorrect, message, selectedIndex) {
    let movement = 0;
    let difficulty = currentQuestion ? currentQuestion.difficulty : 'n/a'; 
    let finalMessage = '';

    
    const symbol = isCorrect ? '✓' : 'X';
    const color = isCorrect ? '#28a745' : '#dc3545';
    
    
    timerDisplay.textContent = symbol;
    timerDisplay.style.color = color;


    if (isCorrect) {
        if (difficulty === 'easy') movement = 1;
        else if (difficulty === 'intermediate') movement = 2;
        else if (difficulty === 'hard') movement = 3;
        
        finalMessage = `${message} (ADVANCE: ${movement} squares)`;
    } else {
        
        if (selectedIndex === -1) {
             finalMessage = message;
             
             answerBtns[currentQuestion.correctIndex].classList.add('correct');
        } else {
             
             finalMessage = message;
        }
    }
    
    
    resultMessage.innerHTML = `<span style="font-size: 1.5em; color: ${color};">${isCorrect ? 'SUCCESS!' : 'FAILED!'}</span><br>${finalMessage}`;
    
    messageDisplay.textContent = 'Turn ended. Results displayed.';

    
    setTimeout(() => {
        
        answerBtns.forEach(btn => {
            btn.classList.remove('correct', 'incorrect');
        });
        showThemeSelection();
    }, 8000);
}



function toggleRulesDisplay() {
    if (fullRulesContent.style.display === 'none') {
        fullRulesContent.style.display = 'block';
        toggleRulesBtn.textContent = 'Hide Full Game Rules';
    } else {
        fullRulesContent.style.display = 'none';
        toggleRulesBtn.textContent = 'Show Full Game Rules';
    }
}





themeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const theme = e.target.getAttribute('data-theme');
        showDifficultySelection(theme);
    });
});


difficultyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const level = e.target.getAttribute('data-level');
        showQuestion(level);
    });
});


answerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const selectedIndex = parseInt(e.target.getAttribute('data-index'));
        handleAnswer(selectedIndex);
    });
});


toggleRulesBtn.addEventListener('click', toggleRulesDisplay);


document.addEventListener('DOMContentLoaded', showThemeSelection);

