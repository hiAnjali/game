let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const computerScorePara= document.querySelector("#computer-score");

const generateComputerChoice = () =>{
    const options=["stone","paper","scissors"];
    const randomIndx=Math.floor(Math.random() *3);
    return options[randomIndx];
};

const drawGame = () => {
    msg.innerText="Draw";
    msg.style.backgroundColor="rgb(38, 2, 71)";
};

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        computerScorePara.innerText=compScore;
        msg.innerText= `You lost! Your ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    const computerChoice=generateComputerChoice();
    
    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice === "stone"){
            userWin = computerChoice === "paper" ? false:true;
        }else if(userWin === "paper"){
            userWin = computerChoice === "scissors" ? false:true;
        }else{
            userWin = computerChoice ==="rock" ? false:true;
        }

        showWinner(userWin,userChoice,computerChoice);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});