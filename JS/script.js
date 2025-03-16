const Rock_input = document.querySelector(".Rock");
const Scissor_input = document.querySelector(".Scissors");
const Paper_input = document.querySelector(".Paper");
const Restart_Game_Button = document.querySelector(".Restart_Game_Button")

const Human_Score = document.querySelector(".Human_Score")
const AI_Score = document.querySelector(".AI_Score")
const Game_Result = document.querySelector(".Game_Result")

let AI_point = 0;
let Human_Point = 0;

function Easy_AI() {
    let choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

function ReturnResult() {
    let AI_Choice = Easy_AI();
    
    if (AI_Choice === Human_Choice) {
        return "Draw!";
    }

    switch (AI_Choice) {
        case "Paper":
            if (Human_Choice === "Scissor") {
                Human_Point++;
                return "HumanWin!";
            }
            if (Human_Choice === "Rock") {
                AI_point++;
                return "AIWin!";
            }
            break;

        case "Scissor":
            if (Human_Choice === "Rock") {
                Human_Point++;
                return "HumanWin!";
            }
            if (Human_Choice === "Paper") {
                AI_point++;
                return "AIWin!";
            }
            break;

        case "Rock":
            if (Human_Choice === "Paper") {
                Human_Point++;
                return "HumanWin!";
            }
            if (Human_Choice === "Scissor") {
                AI_point++;
                return "AIWin!";
            }
            break;
    }
}

function PlayGame(choice) {
    Human_Choice = choice;
    let result = ReturnResult();
    Human_Score.textContent = Human_Point;
    AI_Score.textContent = AI_point;
    Game_Result.textContent = result
    
}

function RestartGame() {
    AI_point = 0
    Human_Point = 0
    AI_Score.textContent = 0;
    Human_Score.textContent = 0;
    Game_Result.textContent = ""
}


Rock_input.addEventListener("click", () => PlayGame("Rock"));
Paper_input.addEventListener("click", () => PlayGame("Paper"));
Scissor_input.addEventListener("click", () => PlayGame("Scissor"));
Restart_Game_Button.addEventListener("click", () => RestartGame() );