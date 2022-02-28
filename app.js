const player1= document.querySelector('#player1Display');
const player2= document.querySelector('#player2Display');
const button1 = document.querySelector('#player1');
const button2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
let p1Score =0;
let p2Score =0;
let winningScore=5;
let isGameOver= false;
button1.addEventListener('click',()=>{
    if(!isGameOver){
        p1Score++;
        if(p1Score===winningScore){
            isGameOver=true;
        }player1.textContent=p1Score;
    }

});

button2.addEventListener('click',()=>{
    if(!isGameOver){
        p2Score++;
        if(p2Score===winningScore){
            isGameOver=true;
        }player2.textContent=p2Score;
    }

});

reset.addEventListener('click',()=>{
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    player1.textContent=0;
    player2.textContent=0;
})