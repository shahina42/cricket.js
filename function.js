var btn=document.querySelector("#strike");
var reset=document.querySelector("#reset");
const scb_1=document.querySelector("#score-team1");
const scb_2=document.querySelector("#score-team2");
const wick_1=document.querySelector("#wickets-team1");
const wick_2=document.querySelector("#wickets-team2");

var ballcount=0;
var team=1;
var score_1 =0;
var w_1=0;
var score_2 =0;
var w_2=0;
var tempsc=0;

const possiblevalues=[0,1,2,3,4,5,6,"w"]

function updatescore(){
    scb_1.innerText=score_1;
    wick_1.innerText=w_1;
    scb_2.innerText=score_2;
    wick_2.innerText=w_2;
}
const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");


function updatescore(){
    scb_1.innerText=score_1;
    wick_1.innerText=w_1;
    scb_2.innerText=score_2;
    wick_2.innerText=w_2;
}

function gameover(score_1,score_2){
    gameOverAudio.play();

    if(score_1>score_2){

        alert("India won on score",score_1);
    }else if(score_1==score_2){
        alert("Tie")
    }else{
        alert("Pak won on score",score_2);
    }
}
function generaterandom(){
   return possiblevalues[Math.floor(Math.random()*8)]
}

btn.addEventListener("click",()=>{
    strikeAudio.pause();
    strikeAudio.currentTime=0;
    strikeAudio.play();


    if(team==1){
        ballcount+=1;
        tempsc=generaterandom();
        document.querySelector(`#team1-superover .ball:nth-child(${ballcount})`).innerText=tempsc;
        if(tempsc != "w"){
            score_1 += tempsc;
            
        }
        else if(tempsc=="w"){
            w_1 +=1;
        }
        updatescore();

        
        
        if(ballcount==6 || w_1==2){
            ballcount=0;
            team=2;
        
        }
    }else if(team==2){
        ballcount+=1;
        tempsc=generaterandom();
        document.querySelector(`#team2-superover .ball:nth-child(${ballcount})`).innerText=tempsc;
        if(tempsc!="w"){
            score_2+=tempsc;
        }
        else{
            w_2+=1;
        }
         if(score_2>score_1||ballcount===6||w_2==2){
            gameover(score_1,score_2)
         }
         updatescore()
    }
    
})

reset.addEventListener("click",()=>{
    window.location.reload();
})


       
        