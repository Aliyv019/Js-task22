const rock=document.querySelectorAll(".rps img")[0]
const paper=document.querySelectorAll(".rps img")[1]
const scissors=document.querySelectorAll(".rps img")[2]
const opponent=document.querySelector('.opponent')
const result=document.querySelector('.result h2')
const arr1=["rock","paper","scissors"]

function opponent_answer(){
    return arr1[Math.floor(Math.random()*arr1.length)]
}
rock.addEventListener('click',()=>{
    let answer=opponent_answer()
    opponent.innerHTML=`<img src="./assets/img/${answer}.png" alt="">`
    if(answer=="scissors"){
        result.textContent="Congratulations, you win!"
    }
    else if(answer=="rock"){
        result.textContent="It's a tie! Try again!"
    }
    else{
        result.textContent="You lose :("
    }
})
paper.addEventListener('click',()=>{
    let answer=opponent_answer()
    opponent.innerHTML=`<img src="./assets/img/${answer}.png" alt="">`
    if(answer=="rock"){
        result.textContent="Congratulations, you win!"
    }
    else if(answer=="paper"){
        result.textContent="It's a tie! Try again!"
    }
    else{
        result.textContent="You lose :("
    }
})
scissors.addEventListener('click',()=>{
    let answer=opponent_answer()
    opponent.innerHTML=`<img src="./assets/img/${answer}.png" alt="">`
    if(answer=="paper"){
        result.textContent="Congratulations, you win!"
    }
    else if(answer=="scissors"){
        result.textContent="It's a tie! Try again!"
    }
    else{
        result.textContent="You lose :("
    }
})