

let choices=document.querySelectorAll(".choice");
let number1=0; 
let number2=0;

const computerChoice=()=>{
    const choice=["rock","paper","scissors"];
    const numberChoice=Math.floor(Math.random()*3);
    return choice[numberChoice];
}
    

const playGame=(user)=>{
    console.log(user);

     const computerch=computerChoice();
     console.log(computerch);

     if(user === computerch){
        display();
        }else{
            let winner=true;
            if(user ==="rock"){
                winner=computerch==="paper"?false:true;
            }else if(user=="paper"){
                winner= computerch==="scissors"? false:true;
            }else{
                winner=computerch==="rock"?false:true
            }
            showWinner(winner);
        }
};
    

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

const display=()=>{
    console.log("Match is Draw");
    let msg= document.querySelector("#msg");
        msg.innerText="Match is Draw"; 
        let forColor=document.getElementById("msg");
forColor.style.backgroundColor="orange";
}

 
const showWinner=(winner)=>{
   
   


    if(winner){

let userScore = document.querySelector("#user-score");
        number1++;
        userScore.innerText= number1;

        show();
        console.log("You Winner");

    }else{


let compScore = document.querySelector("#comp-score");
       number2++;
       compScore.innerText= number2;
        let msg= document.querySelector("#msg");

        msg.innerText="Computer Winner";    
        console.log("Computer Winner");
        let forColor=document.getElementById("msg");
forColor.style.backgroundColor="red";

    }
}



 const show=()=>{

 
let msg= document.querySelector("#msg");
msg.innerText="You Winner";
let forColor=document.getElementById("msg");
forColor.style.backgroundColor="green";
}

