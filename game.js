let userScore=0
let compScore=0

const choice=document.querySelectorAll(".allImgDiv")
const userCount=document.querySelector(".userScore-para")
const compCount=document.querySelector(".compScore-para")
const winnerMsg=document.querySelector(".msg")


const draw=(compChoice)=>{
    winnerMsg.innerText=`Draw, Computer choice ${compChoice}`
    winnerMsg.style.backgroundColor="rgb(80, 71, 71)"
    // console.log("draw");
}

const showWinner=(userWin,compChoice)=>{
  if(userWin){
    userScore++
    userCount.innerText=userScore
    winnerMsg.innerText=`You Are winner, Computer choice ${compChoice}`
    winnerMsg.style.backgroundColor="green"
    // console.log("you are winner")
  }
  else{
    compScore++
    compCount.innerText=compScore
    winnerMsg.innerText=`Computer Won The Match, Computer choice ${compChoice}`
    winnerMsg.style.backgroundColor="red"
    // console.log("computer won the match")
  }
}

const genCompChoice=()=>{
const options=["rock","paper","scissor"]
const randIdx= Math.floor(Math.random() *3)
return options[randIdx]
}


const playGame=(userChoice)=>{
//    console.log("the choice is: ",userChoice)
   const compChoice= genCompChoice()
//    console.log("pc choice : ",compChoice)
    
   if(userChoice===compChoice){
    draw(compChoice);
   }
   else{
    let userWinner=true
    if(userChoice==="rock"){
           userWinner = compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
       userWinner=compChoice==="scissor"?false:true;
    }
    else{
        userWinner=compChoice==="rock"?false:true;
    }
    showWinner(userWinner,compChoice);
   }
}

choice.forEach((val)=>{
  val.addEventListener("click",()=>{

    const val_Id=val.getAttribute("id")

    // console.log("clicked",val_Id)
      
    playGame(val_Id);

  })

})