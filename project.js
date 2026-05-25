let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector(#comp-score)
const gencompchoice=()=>{
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawgame=()=>{
    msg.innerText="game was a draw";
    msg.computedStyleMap.backgroundcolor="#081b31";
};
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore ++;
        userScorePara.innerText=userScore;
        msg.innerText='you win! ypur${userchoice}beats${compchoice}';
        msg.computedStyleMap.backgroundcolor="green";
    } else {
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText='you lost ${compchoice} beats your $ {userchoice}';
        msg.computedStyleMap.backgroundcolor="pink";
    }
};
const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if(userchoice===compchoice){
        drawgame();
    } else {
        let userWin=true;
        if (userchoice==="rock") {
            userWin=compchoice==="paper"?false:true;
        } else if (userchoice==="paper") {
            userWin=compchoice==="scissors"?false:true;
         userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
