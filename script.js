'use strict';
let num=Math.trunc(Math.random()*20)+1;
let current=Number(document.querySelector('.score').textContent);
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guessednum=Number(document.querySelector('.guess').value);
    if(!guessednum){
        document.querySelector('.message').textContent='💀 Enter a number! ';
    }
    else if(guessednum!=num){
        if(current>0){
            if(guessednum<num){
                document.querySelector('.message').textContent='Too Low!';
                current=current-1;
            }
            else if(guessednum>num){
                document.querySelector('.message').textContent='Too High!';
                current=current-1;
            }
        }
        else{
            document.querySelector('.message').textContent='You Lost ! Try Again:)';
        }
    }
    else{
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
         document.querySelector('.number').textContent=num;
        document.querySelector('.message').textContent='Correct Guess!';
        if(current>highscore){
        highscore=current;
        }
        document.querySelector('.highscore').textContent=highscore;
    }
    document.querySelector('.score').textContent=current;
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor='#222';
    num=Math.trunc(Math.random()*20)+1;
    current=Number(document.querySelector('.score').textContent=20);
    document.querySelector('.message').textContent='Start guessing.....';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    
});