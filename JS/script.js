const Rock_input = document.querySelector(".Rock");
const Scissor_input = document.querySelector(".Scissors");
const Paper_input = document.querySelector(".Paper");

let AI_Choice = Easy_AI()
let Human_Choice = ""
let AI_point = 0
let Human_Point = 0


function Easy_AI() {
    let Answer = ""
    let RandomAI = Math.floor(Math.random() * 3 + 1)
    if (RandomAI === 1) {
         return Answer = "Paper"
    }

    if (RandomAI === 2) {
        return Answer = "Scissor"
   }

   if (RandomAI === 3) {
    return Answer = "Rock"
}
}

function PlayerChoice(callback) {
    Rock_input.addEventListener("mousedown",function (){
        Human_Choice = "Rock"
    });

    Paper_input.addEventListener("mousedown",function (){
        Human_Choice = "Paper"
    });

    Scissor_input.addEventListener("mousedown",function (){
        Human_Choice = "Scissor"
    });
}

function ReturnResult (Result) {
    if (AI_Choice === Human_Choice) {
        return "Draw"
    }

    switch (AI_Choice){
        case "Paper" :
            if (Human_Choice === "Scissor") {
                Human_Point ++
                return Result = "HumanWin"
            };

            if (Human_Choice === "Rock") {
                AI_point ++
                return Result = "AIWin"
            };

        case "Scissor" :
            if (Human_Choice === "Rock") {
                    Human_Point ++
                    return Result = "HumanWin"
                };
    
            if (Human_Choice === "Paper") {
                    AI_point ++
                    return Result = "AIWin"
                };    
        case "Rock" :
            if (Human_Choice === "Paper") {
                    Human_Point ++
                    return Result = "HumanWin"
                };
    
            if (Human_Choice === "Scissor") {
                    AI_point ++
                    return Result = "AIWin"
                };    

    }
}

function PlayGame (){
    while (Human_Point !== 5 && AI_point !== 5) {
        Easy_AI();
    };
};

