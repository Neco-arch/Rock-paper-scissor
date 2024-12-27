let human_Score = 0;    
let Computer_Score = 0;

function Easy_AI() {
    let random = Math.round(Math.random() * (3 - 1) + 1);
    if (random === 1) {
        return "Rock";
    }
    if (random === 2) {
        return "Paper";
    }
    if (random === 3) {
        return "Scissor";
    }
}

function Human_Choice() {
    let HumanAnswer = parseInt(prompt("Choose: Rock [1], Paper [2], Scissor [3]"));
    if (HumanAnswer === 1) {
        return "Rock";
    }
    if (HumanAnswer === 2) {
        return "Paper";
    }
    if (HumanAnswer === 3) {
        return "Scissor";
    } else {
        return null; // In case of invalid input
    }
}

function Lets_Play(human, Ai) {
    if (human === Ai) {
        alert("Draw!");
    } else if ((human === "Paper" && Ai === "Rock") || 
               (human === "Scissor" && Ai === "Paper") || 
               (human === "Rock" && Ai === "Scissor")) {
        alert("Human Win!");
        human_Score++;
    } else {
        alert("AI Win!");
        Computer_Score++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const computer_Selection = Easy_AI();
        const Human_Selection = Human_Choice();
        
        if (Human_Selection !== null) {
            Lets_Play(Human_Selection, computer_Selection);
        } else {
            alert("Invalid input, skipping turn.");
        }
        
        console.log("Human Score: " + human_Score + " AI Score: " + Computer_Score);
    }
    
    // Final results
    if (human_Score > Computer_Score) {
        alert("Human wins the game!");
    } else if (human_Score < Computer_Score) {
        alert("AI wins the game!");
    } else {
        alert("The game is a draw!");
    }
}

playGame();
