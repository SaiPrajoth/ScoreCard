let homeScore = 0;
let guestScore = 0;
let homeScoreView = document.getElementById("home-team-scorecard");
let guestScoreView = document.getElementById("guest-team-scorecard");


function add1Home(){
    homeScore++;
    homeScoreView.textContent=homeScore;
    WinProb();
}
function add2Home(){
    homeScore+=2;
    homeScoreView.textContent=homeScore;
    WinProb();
}
function add3Home(){
    homeScore+=3;
    homeScoreView.textContent=homeScore;
    WinProb();
}
function add1Guest(){
    guestScore++;
    guestScoreView.textContent=guestScore;
    WinProb();
}
function add2Guest(){
    guestScore+=2;
    guestScoreView.textContent=guestScore;
    WinProb();
}function add3Guest(){
    guestScore+=3;
    guestScoreView.textContent=guestScore;
    WinProb();
}
function reset(){
    homeScore=0;
    guestScore=0;
    homeScoreView.textContent=0;
    guestScoreView.textContent=0;
    homeScoreView.style.backgroundColor='black';
    guestScoreView.style.backgroundColor='black';
}
function WinProb(){
    if(homeScore == guestScore){
        homeScoreView.style.backgroundColor='black';
        guestScoreView.style.backgroundColor='black';
    } else if(homeScore < guestScore){
        homeScoreView.style.backgroundColor='red';
        guestScoreView.style.backgroundColor='green';
    } else{
        homeScoreView.style.backgroundColor='green';
        guestScoreView.style.backgroundColor='red';
    }
}