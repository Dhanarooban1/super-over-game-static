const strike = document.getElementById("strike")
const  reset = document.getElementById("reset").addEventListener("click",resetBtn)

const team1 = document.getElementById("team1-superover")

const team2 = document.getElementById("team2-superover")
strike.addEventListener("click" , handleclick)
 
const score_team1 = document.getElementById("score-team1")

const score_team2 = document.getElementById("score-team2")

const wickets_team1 = document.getElementById("wickets-team1")
const wickets_team2 = document.getElementById("wickets-team2")
const strikebutton = new Audio("http://bit.ly/so-ball-hit")
let possibilties = [0,1,2,3,4,5,6,"w"]
let team1Ball = 0
let team2Ball = 0
let team1score = 0
let team2score = 0
let team1Wicket = 0
let team2Wicket = 0
let type = 1


function handleclick(){

    strikebutton.pause()
    strikebutton.currentTime=0

    strikebutton.play()

    let score =  possibilties[Math.floor(Math.random()*8)]

   if(type==1) {
        team1Ball++
        team1.children[team1Ball-1].innerText = score
    if (score=="w"){
        team1Wicket++
        wickets_team1.innerText = team1Wicket

    }else {
        team1score += score
        score_team1.innerText = team1score}
        if(team1Ball==6 || team1Wicket== 2){
            type=2
        }


}else if(type==2){
    
    team2Ball++

    team2.children[team2Ball-1].innerText = score

        if (score=="w"){
        team2Wicket++
        wickets_team2.innerText = team2Wicket

    }else {
        team2score += score
        score_team2.innerText = team2score}
    
}
if(team2Ball==6 || team2Wicket== 2 || team2score>team1score){
    type = 3
    endgame()
}
}

// end game function
function endgame(){
    
    if(team1score>team2score){
        alert("IND Won")
    }else if (team1score<team2score){
        alert("PAK won")
    }else{
        alert("TIE")
    }
}

function resetBtn(){
    window.location.reload();
}

