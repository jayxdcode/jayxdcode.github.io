let mode = null;
let questionCount = 0;
let score = 0;
let timer;
let timerInterval;
let questionText;
let correctAnswer;

function startTest() {
    // Hide the continue button
    document.getElementById("continue").style.display = "none";

    if (mode === "ORAL MATH") {
        // Initialize oral math mode
        document.getElementById("oralOverlay").style.display = "flex";
        document.getElementById("oralOverlay").style.zIndex = "1000";
        generateQuestionOralMath();
    } else if (mode === "MULTIPLE CHOICE") {
        // Initialize multiple choice mode
        document.getElementById("oralOverlay").style.display = "none";
        generateQuestionMultipleChoice();
    } else {
        console.error("Mode not selected.");
    }
}

function generateQuestionMultipleChoice() {
    questionCount++;
    const num1 = getRandomInt(-15, 5);
    const num2 = getRandomInt(-15, 5);
    const rand = getRandomInt(-15, 5);
    const operation = getRandomOperation();
    correctAnswer = calculateAnswer(num1, num2, operation);
    questionText = formatQuestion(num1, num2, operation);

    // Display the question
    document.getElementById("q").textContent = `${questionText}`;

    // Generate random answer choices
    const choices = generateChoices(correctAnswer);

    // Assign choices to buttons
    document.getElementById("btn1").textContent = choices[0];
    document.getElementById("btn2").textContent = choices[1];
    document.getElementById("btn3").textContent = choices[2];
    document.getElementById("btn4").textContent = choices[3];

    // Add event listeners for buttons
    document.getElementById("btn1").onclick = () => checkAnswer(choices[0]);
    document.getElementById("btn2").onclick = () => checkAnswer(choices[1]);
    document.getElementById("btn3").onclick = () => checkAnswer(choices[2]);
    document.getElementById("btn4").onclick = () => checkAnswer(choices[3]);
}

function generateQuestionOralMath() {
    questionCount++;
    const num1 = getRandomInt(-15, 5);
    const num2 = getRandomInt(-15, 5);
    const rand = getRandomInt(-15, 5);
    const operation = getRandomOperation();
    correctAnswer = calculateAnswer(num1, num2, rand, operation);
    questionText = formatQuestion(num1, num2, rand, operation);

    // Display the question
    document.getElementById("oralOverlay").innerHTML = `
        <div id="timer" style="font-size: 4.5rem; color: green;">Ready</div>
        <div id="question" style="font-size: 20vw; color: white; text-align: center; margin: auto; color: #FF7000;">${questionText}</div>
        <div id="answer" style="font-size: 5rem; color: red; text-align: center; display: none; position: fixed"></div>
    `;

    // Start the timer
    startTimer();
    
    console.log(`${num1} num1  ${num2 * rand} num2 ${operation} oper   ${correctAnswer} ans`)
}

function startTimer() {
    let timeLeft = 5;
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            updateTimerDisplay(timeLeft);
            timeLeft--;
            clearInterval(timer);
            revealAnswer();
            setTimeout(generateQuestionOralMath, 1000);  // Wait 1500ms then show next question
        } else {
            updateTimerDisplay(timeLeft);
            timeLeft--;
        }
    }, 1000);
}

function updateTimerDisplay(timeLeft) {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = timeLeft;

    // Update timer color
    if (timeLeft <= 2) {
        timerElement.style.color = "red";
    } else if (timeLeft <= 4) {
        timerElement.style.color = "yellow";
    } else {
        timerElement.style.color = "green";
    }
}

function revealAnswer() {
    document.getElementById("answer").textContent = `${correctAnswer}`;
    document.getElementById("answer").style.display = "block";
}

function calculateAnswer(num1, num2, rand, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            num2 = num1 * rand;
            return num2 / num1;
    }
}

function formatQuestion(num1, num2, rand, operation) {
    switch (operation) {
        case '+':
            return num2 < 0 ? `${num1} + (${num2})` : `${num1} + ${num2}`;
        case '-':
            return num2 < 0 ? `${num1} - (${num2})` : `${num1} - ${num2}`;
        case '*':
            return `(${num1})(${num2})`;
        case '/':
            num2 = num1 * rand;
            return `${num2} ÷ ${num1}`;
    }
}

function generateChoices(correctAnswer) {
    const choices = new Set();
    choices.add(correctAnswer);

    // Add random choices ensuring correct answer is included
    while (choices.size < 4) {
        const randomChoice = getRandomInt(-100, 100);
        choices.add(randomChoice);
    }

    return Array.from(choices).sort(() => Math.random() - 0.5);
}

function checkAnswer(selectedAnswer) {
    if (parseInt(selectedAnswer) === correctAnswer) {
        score++;
        console.log("Correct answer!");
        if (mode === "MULTIPLE CHOICE") {
            generateQuestionMultipleChoice();  // Generate next question
        } else if (mode === "ORAL MATH") {
            // For ORAL MATH, answer will be revealed and next question is handled by the timer
        }
    } else {
        console.log("Incorrect answer. Please try again.");
        if (mode === "ORAL MATH") {
            // In oral math mode, the same question is re-asked
            revealAnswer();
            setTimeout(generateQuestionOralMath, 1500);  // Show next question after 1500ms
        }
    }
}

function getRandomInt(min, max) {
    var r = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (r == 0) {
      if (new Date().getSeconds % 2 == 1) {
        r = r + new Date().getSeconds() % 10 + 1 * -1;
      } else {
        r = r + new Date().getSeconds() % 10 + 1
      }
    }
    
    return r;
}

function getRandomOperation() {
    const operations = ['+', '-', '*', '/'];
    // const operations = ['-', '/']
    return operations[Math.floor(Math.random() * operations.length)];
}

// Event listeners for mode buttons
document.getElementById("multipleChoiceButton").addEventListener("click", () => { mode = "MULTIPLE CHOICE"; startTest(); });
document.getElementById("oralMathButton").addEventListener("click", () => { mode = "ORAL MATH"; startTest(); });
