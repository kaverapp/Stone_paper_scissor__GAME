let UserScore=0;
let computerScore=0;

let compSc=document.querySelector(".cScore");
let useScore=document.querySelector(".uScore");

let message=document.querySelector(".message");

const choices=document.querySelectorAll(".choice");

const generateComputerChoice=()=>{
    const options=["rock","paper","scissor"];
    const choose=Math.floor(Math.random()*options.length);
    computerChoice=options[choose];
    return computerChoice;
    
}

const drawGame=()=>{
    console.log("game was draw");
    message.innerHTML="draw !"
}

const showWinner=(userWin)=>{
    if(userWin){
        UserScore+=1;
        console.log("you won");
        message.innerHTML="you won!"
        message.style.backgroundColor="green"
        
    }else{
        computerScore+=1;
        console.log("you lose");
        message.innerHTML="you lose !"
        message.style.backgroundColor="red"

    }
}

const playGame=(userChoice)=>{
    console.log("users choice",userChoice);

    const userChoices=userChoice;
    const compterChoice=generateComputerChoice();
    console.log("computer choice",compterChoice);
 

    if(userChoices===compterChoice){
        //console.log("draw match");
        drawGame();
        message.style.backgroundColor="rebeccapurple"

        
    }else{
        let userWin=true;

        if(userChoices==="rock"){
            userWin=compterChoice==="paper"?false:true;
        }else if(userChoices==="paper"){
            userWin=compterChoice==="scissor"?false:true;
        }else {
            userWin=compterChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
    /*
    else{
        //console.log('still play');
        if(userChoice=='rock' && compterChoice=="paper"){
            console.log("computer has won");
            UserScore+=1;
            
        }else if(userChoice=='paper' && compterChoice=="rock"){
            console.log("user has won");
            computerScore+=1;
            
        }
        else if(userChoice=='rock' && compterChoice=="scissor"){
            console.log("user has won");
            UserScore+=1;
        }
        else if(userChoice=='scissor' && compterChoice=="rock"){
            console.log("computer has won");
            computerScore+=1;
            
        }
        
    }*/

    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        //console.log("choice waas clicked",userChoice);

        playGame(userChoice);
        useScore.innerHTML=`user score:${UserScore}`;
        compSc.innerHTML=`computer score:${computerScore}`;
        
        
        
    })
})

 