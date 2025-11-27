// --- Game Data (Questions & Luck Actions) ---
const questions = {
    'HTML / CSS': {
        'easy': [
            { question: "What is the purpose of the tag <h1> ?", answers: ["A. To display a main title", "B. To insert an image", "C. To make a huge scream appear on the page (fun)"], correctIndex: 0 },
            { question: "What does 'CSS' mean?", answers: ["A. Cascading Style Sheets", "B. Code Super Stylish (fun)", "C. Computer Style System"], correctIndex: 0 },
            { question: "Which tag is used to display text in bold in HTML?", answers: ["A. <bold>", "B. <strong>", "C. <bld>"], correctIndex: 1 },
            { question: "What is the purpose of the <br> tag in HTML?", answers: ["A. Insert a line break", "B. Create a paragraph", "C. Break the browser (fun)"], correctIndex: 0 },
            { question: "Which element is used to define the document's character set?", answers: ["A. <charset>", "B. <meta charset='utf-8'>", "C. <text-encoding>"], correctIndex: 1 }
        ],
        'intermediate': [
            { question: "What language is used to style a web page?", answers: ["A. HTML", "B. CSS", "C. SQL"], correctIndex: 1 },
            { question: "Which CSS property changes the text color?", answers: ["A. font-style", "B. color", "C. rainbow-mode (fun)"], correctIndex: 1 },
            { question: "Inline, block, inline-block define...", answers: ["A. The display behavior of an element", "B. The dance mode of a developer (fun)", "C. The text size"], correctIndex: 0 },
            { question: "Which CSS selector targets elements with the class 'header'?", answers: ["A. #header", "B. .header", "C. element.header"], correctIndex: 1 },
            { question: "How do you include an external CSS file in an HTML document?", answers: ["A. <script src='style.css'>", "B. <link rel='stylesheet' href='style.css'>", "C. <style link='style.css'>"], correctIndex: 1 }
        ],
        'hard': [
            { question: "What is box-sizing used for: border-box?", answers: ["A. Include padding and border in the total size", "B. Round the corners", "C. Add a rainbow frame (fun)"], correctIndex: 0 },
            { question: "What is the 'C' in CSS selector specificity (A, B, C, D)?", answers: ["A. ID selectors", "B. Class, attribute, and pseudo-class selectors", "C. Element selectors"], correctIndex: 1 },
            { question: "What does the pseudo-class ':nth-child(2n)' select?", answers: ["A. All odd elements", "B. All even elements", "C. Only the second element"], correctIndex: 1 },
            { question: "What is the purpose of the 'z-index' property in CSS?", answers: ["A. Define the stacking order of elements", "B. Define the shadow depth", "C. Define the zoom level"], correctIndex: 0 },
            { question: "In CSS, what is the 'initial' value for the 'position' property?", answers: ["A. absolute", "B. relative", "C. static"], correctIndex: 2 }
        ]
    },
    'Cybersecurity': {
        'easy': [
            { question: "Why do we use a password?", answers: ["A. To secure access", "B. To prevent your chat from ordering on Amazon (fun)", "C. To speed up the connection"], correctIndex: 0 },
            { question: "MFA means...", answers: ["A. Multi-Factor Authentication", "B. My Fabulous Antivirus (fun)", "C. Main Firewall Alert"], correctIndex: 0 },
            { question: "What is the simplest way to protect your computer from viruses?", answers: ["A. Install antivirus software", "B. Never turn off your computer", "C. Put stickers on the screen (fun)"], correctIndex: 0 },
            { question: "What is the main danger of public Wi-Fi networks?", answers: ["A. Slow speed", "B. Data interception (man-in-the-middle)", "C. Too many ads"], correctIndex: 1 }
        ],
        'intermediate': [
            { question: "A fraudulent email is called...", answers: ["A. Phishing", "B. Fish&Fish", "C. Spam"], correctIndex: 0 },
            { question: "A firewall is used to...", answers: ["A. Block unauthorized connections", "B. Stopping viruses", "C. Put out a fire (fun)"], correctIndex: 0 },
            { question: "Virus, worm and trojan are...", answers: ["A. Types of malware", "B. A Pokémon team (fun)", "C. Security tools"], correctIndex: 0 },
            { question: "What is a 'Trojan Horse'?", answers: ["A. Malware disguised as legitimate software", "B. A very fast computer (fun)", "C. A secure server connection"], correctIndex: 0 }
        ],
        'hard': [
            { question: "A Man-in-the-middle attack consists of...", answers: ["A. Intercept communications", "B. Interrupt two people who are speaking (fun)", "C. Hack a weak password"], correctIndex: 0 },
            { question: "What is the purpose of 'VPN' in cybersecurity?", answers: ["A. Encrypt communication and hide the IP", "B. Speed up the computer", "C. View videos in 4K"], correctIndex: 0 },
            { question: "What is a 'Zero-Day' vulnerability?", answers: ["A. A flaw known by the attacker before the developer", "B. A security update (fun)", "C. A bug that appears at midnight"], correctIndex: 0 },
            { question: "What cryptographic method uses a public key and a private key?", answers: ["A. Symmetric encryption", "B. Asymmetric encryption", "C. Hashing"], correctIndex: 1 }
        ]
    },
    'Algorithms': {
        'easy': [
            { question: "An algorithm is...", answers: ["A. An instruction recipe", "B. A very complicated dance (fun)", "C. An image"], correctIndex: 0 },
            { question: "Bubble Sort is...", answers: ["A. A sorting algorithm", "B. A design tool", "C. An intelligent bubble machine (fun)"], correctIndex: 0 },
            { question: "What is the first step in most sorting algorithms?", answers: ["A. Swapping the first two elements", "B. Choosing the pivot", "C. Defining the size of the list"], correctIndex: 2 },
            { question: "What does a 'Loop' allow in an algorithm?", answers: ["A. Repeat actions", "B. Stop the program", "C. Make a detour (fun)"], correctIndex: 0 }
        ],
        'intermediate': [
            { question: "The complexity of an algorithm measures...", answers: ["A. The time or memory used", "B. The difficulty of the developer", "C. The developer’s level of suffering (fun)"], correctIndex: 0 },
            { question: "Which algorithm requires a sorted list?", answers: ["A. Dichotomous research", "B. Random search", "C. Search 'at a glance' (fun)"], correctIndex: 0 },
            { question: "What is the key principle of the 'Divide and Conquer' paradigm?", answers: ["A. Recursion", "B. Iteration", "C. Direct calculation"], correctIndex: 0 },
            { question: "Which structure is best for implementing a FIFO (First-In, First-Out) queue?", answers: ["A. Stack", "B. Queue", "C. List"], correctIndex: 1 }
        ],
        'hard': [
            { question: "Divide and Conquer consists of...", answers: ["A. Divide a problem into sub-problems", "B. Conquering the world (fun)", "C. Only works on boards"], correctIndex: 0 },
            { question: "A greedy algorithm...", answers: ["A. Make the best local choice", "B. Eat all the resources of the PC (fun)", "C. Only works on boards"], correctIndex: 0 },
            { question: "What is the typical worst-case time complexity of QuickSort?", answers: ["A. O(n log n)", "B. O(n²)", "C. O(n)"], correctIndex: 1 },
            { question: "What is 'dynamic programming' mainly used for?", answers: ["A. Optimizing problems with overlapping sub-problems", "B. Creating animated interfaces", "C. Calculating random numbers"], correctIndex: 0 }
        ]
    },
    'Internet Usage': {
        'easy': [
            { question: "URL means...", answers: ["A. Uniform Resource Locator", "B. Unknown Robot Locator (fun)", "C. Ultra Rapid Link"], correctIndex: 0 },
            { question: "A browser is used to...", answers: ["A. Browsing the Internet", "B. Exploring an ocean of cookies (fun)", "C. Host a site"], correctIndex: 0 },
            { question: "What is HTTP mainly used for?", answers: ["A. Transferring files between servers", "B. Exchanging hypermedia documents (web)", "C. Sending emails"], correctIndex: 1 },
            { question: "What is the function of a search engine?", answers: ["A. Find information on the web", "B. Block viruses", "C. Filter spam (fun)"], correctIndex: 0 }
        ],
        'intermediate': [
            { question: "A local IP is...", answers: ["A. Accessible in an internal network", "B. Visible everywhere", "C. The address of your connected fridge (fun)"], correctIndex: 0 },
            { question: "Indexing a page means...", answers: ["A. Add it to the engine base", "B. Send it in a workbook (fun)", "C. Translate it"], correctIndex: 0 },
            { question: "The DNS is used to...", answers: ["A. Convert domain names to IPs", "B. Do the Human Internet translation (fun)", "C. Encrypt the data"], correctIndex: 0 },
            { question: "What is a 'Cookie' in the context of the Internet?", answers: ["A. A small file storing user information (preferences, login)", "B. A delicious dessert (fun)", "C. A security key"], correctIndex: 0 }
        ],
        'hard': [
            // <-- CORRECTION APPLIQUÉE ICI : options remplacées et correctIndex mis sur la bonne définition de HTTPS
            { question: "HTTPS means...", answers: ["A. HyperText Transfer Protocol Secure", "B. Secure login", "C. Improved flow rate"], correctIndex: 0 },
            { question: "What is the OSI model's role in networking?", answers: ["A. Provide a conceptual framework for network communication", "B. Speed up the connection", "C. Secure data transmission"], correctIndex: 0 },
            { question: "What is the standard port for HTTPS communication?", answers: ["A. 80", "B. 443", "C. 21"], correctIndex: 1 },
            { question: "What is the function of the TCP protocol?", answers: ["A. Ensure reliable data transmission and sequencing", "B. Only send data (UDP function)", "C. Define the physical connection"], correctIndex: 0 }
        ]
    },
    'Conversion Funnels': {
        'easy': [
            { question: "First step of a funnel?", answers: ["A. Awareness", "B. Direct teleportation for purchase (fun)", "C. Action"], correctIndex: 0 },
            { question: "A funnel is used to...", answers: ["A. Bring a user to an action", "B. Make users fall into a hole (fun)", "C. Creating a website"], correctIndex: 0 },
            { question: "What is the main objective of the Awareness stage?", answers: ["A. Convert immediately", "B. Attract attention and generate traffic", "C. Ask for personal information"], correctIndex: 1 },
            { question: "What does 'Lead' mean in a funnel?", answers: ["A. A potential customer", "B. The first employee (fun)", "C. A product error"], correctIndex: 0 }
        ],
        'intermediate': [
            { question: "The metric that measures the passage of a step is...", answers: ["A. Conversion Rate", "B. Confusion Rate (fun)", "C. Bounce Rate"], correctIndex: 0 },
            { question: "Consideration step example?", answers: ["A. See a product page", "B. Give the salesperson a hug (fun)", "C. Read a review"], correctIndex: 0 },
            { question: "A bottleneck is...", answers: ["A. The stage where users give up", "B. A bottle stuck in a funnel (fun)", "C. A bug on the site"], correctIndex: 0 },
            { question: "What is the key metric for the 'Action' stage (Purchase)?", answers: ["A. Click rate", "B. Bounce rate", "C. Revenue/Sales"], correctIndex: 2 }
        ],
        'hard': [
            { question: "Marketing funnel vs product funnel:", answers: ["A. Acquisition vs use", "B. The funnel product is more stylish (fun)", "C. No link"], correctIndex: 0 },
            { question: "What does the 'A' stand for in the AIDA model (Marketing)?", answers: ["A. Action", "B. Awareness", "C. Attraction"], correctIndex: 1 },
            { question: "What is 'A/B Testing' primarily used for in a funnel?", answers: ["A. Comparing two versions to see which performs better", "B. Blocking errors", "C. Testing two browsers"], correctIndex: 0 },
            // <-- CORRECTION : la dernière étape d'AARRR est Revenue (B)
            { question: "What is the last stage of the Pirate Metrics model (AARRR)?", answers: ["A. Retention", "B. Revenue", "C. Referral"], correctIndex: 1 }
        ]
    },
    
    'Luck': [
        { type: 'advantage', text: "LUCKY! Advance 3 squares.", movement: 3 },
        { type: 'advantage', text: "BONUS! Advance 1 square.", movement: 1 },
        { type: 'disadvantage', text: "BAD LUCK! Go back 2 squares.", movement: -2 },
        { type: 'disadvantage', text: "FORFEIT! Lose your next turn.", movement: 0, penalty: "lose_turn" },
        { type: 'neutral', text: "NOTHING HAPPENS. Stay put.", movement: 0 }
    ]
};


let timerInterval;
const initialTime = 30;
let currentQuestion = null;
let selectedTheme = null;

document.addEventListener('DOMContentLoaded', () => {

    // DOM elements (queried after DOM is ready)
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

    // Utils
    function getRandomQuestion(theme, level) {
        if (!questions[theme] || !questions[theme][level]) return null;
        const themeQuestions = questions[theme][level];
        const randomIndex = Math.floor(Math.random() * themeQuestions.length);
        return themeQuestions[randomIndex]; 
    }

    function getRandomLuckAction() {
        const luckActions = questions['Luck'];
        const randomIndex = Math.floor(Math.random() * luckActions.length);
        return luckActions[randomIndex];
    }

    // Show/hide screens
    function showThemeSelection() {
        // Clear any running timer to avoid interference
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }

        if (fullRulesContent) fullRulesContent.style.display = 'none';
        if (toggleRulesBtn) toggleRulesBtn.textContent = 'Show Full Game Rules';
        
        themeSelectionDiv.style.display = 'flex';
        difficultySelectionDiv.style.display = 'none';
        questionScreenDiv.style.display = 'none';
        
        timerDisplay.textContent = initialTime;
        timerDisplay.style.color = '#007bff';
        messageDisplay.textContent = "Select your Theme.";
        if (resultMessage) resultMessage.textContent = '';
        
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
        if (!currentQuestion) {
            // Fallback if something went wrong
            messageDisplay.textContent = "No question available for this selection.";
            showThemeSelection();
            return;
        }
        currentQuestion.difficulty = level; 

        questionScreenDiv.style.display = 'block';
        difficultySelectionDiv.style.display = 'none';
        questionText.textContent = currentQuestion.question;
        currentDifficultyDisplay.textContent = `[${level.toUpperCase()}]`;

        document.getElementById('answer-options').style.display = 'flex'; 
        document.getElementById('question-header').textContent = "Question:";

        answerBtns.forEach((btn, index) => {
            btn.textContent = currentQuestion.answers[index] || '';
            btn.disabled = false;
            btn.style.backgroundColor = ''; 
            btn.classList.remove('correct', 'incorrect');
        });

        startTimer();
    }

    function handleLuckAction() {
        // Ensure timer cleared
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }

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
        
        if (resultMessage) {
            resultMessage.innerHTML = resultMsgHTML;
        }

        // After showing the luck result, return to theme selection
        setTimeout(() => {
            showThemeSelection();
        }, 4000);
    }

    function startTimer() {
        // Clear any previous timer
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }

        let timeLeft = initialTime;
        timerDisplay.textContent = timeLeft;
        
        messageDisplay.textContent = "TIME REMAINING. Answer quickly!";
        timerDisplay.style.color = '#dc3545'; 
        
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timerInterval); 
                timerInterval = null;
                timerDisplay.textContent = "STOP";
                
                endTurn(false, 'TIME OUT! No response. No movement.', -1); 
            }
        }, 1000); 
    }

    function handleAnswer(selectedIndex) {
        // Stop timer immediately
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        
        answerBtns.forEach(btn => btn.disabled = true);

        const isCorrect = (selectedIndex === currentQuestion.correctIndex);
        
        // Mark correct button visually
        if (answerBtns[currentQuestion.correctIndex]) {
            answerBtns[currentQuestion.correctIndex].classList.add('correct');
        }

        if (isCorrect) {
            endTurn(true, 'CORRECT! Move Forward.', selectedIndex);
        } else {
            if (answerBtns[selectedIndex]) {
                answerBtns[selectedIndex].classList.add('incorrect');
            }
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
                 if (currentQuestion && answerBtns[currentQuestion.correctIndex]) {
                     answerBtns[currentQuestion.correctIndex].classList.add('correct');
                 }
            } else {
                 finalMessage = message;
            }
        }
        
        if (resultMessage) {
            resultMessage.innerHTML = `<span style="font-size: 1.5em; color: ${color};">${isCorrect ? 'SUCCESS!' : 'FAILED!'}</span><br>${finalMessage}`;
        }
        
        messageDisplay.textContent = 'Turn ended. Results displayed.';
        
        // After a short delay, return to theme selection (simulate end of turn)
        setTimeout(() => {
            currentQuestion = null;
            showThemeSelection();
        }, 2000);
    }

    // Attach event listeners to UI controls
    themeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const theme = btn.dataset.theme;
            showDifficultySelection(theme);
        });
    });

    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const level = btn.dataset.level;
            showQuestion(level);
        });
    });

    answerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(btn.dataset.index, 10);
            handleAnswer(idx);
        });
    });

    if (toggleRulesBtn) {
        toggleRulesBtn.addEventListener('click', () => {
            if (!fullRulesContent) return;
            if (fullRulesContent.style.display === 'none' || fullRulesContent.style.display === '') {
                fullRulesContent.style.display = 'block';
                toggleRulesBtn.textContent = 'Hide Full Game Rules';
            } else {
                fullRulesContent.style.display = 'none';
                toggleRulesBtn.textContent = 'Show Full Game Rules';
            }
        });
    }

    // Initial screen
    showThemeSelection();
});

