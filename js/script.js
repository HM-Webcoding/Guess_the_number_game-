
let player = document.querySelector(".player")
//player one info
let playerOne = document.querySelector(".player_one")
let playerOneInput = document.querySelector(".player_one_input")
let playerOneBtn = document.querySelector(".player_one_btn")

//player two info
let playerTwo = document.querySelector(".player_two")
let playerTwoInput = document.querySelector(".player_two_input")
let playerTwoBtn = document.querySelector(".player_two_btn")

//error success 
let error = document.querySelector(".error")
let success = document.querySelector(".success")

//wining and opponentwinimg 
let winimg = document.querySelector(".winimg")
let opponentimg = document.querySelector(".opponentimg")



let playerOneValue;

playerOneBtn.addEventListener("click", ()=>{
    if(playerOneInput.value == ""){
       error.innerHTML = "Please give a valid number"
    }else{
        if(playerOneInput.value - 20){
           if(playerOneInput.value > 0 && playerOneInput.value <= 10){
            playerOneValue = playerOneInput.value
            player.innerHTML = "Player Two"
            error.innerHTML = ""
            playerOne.style.display = "none"
            playerTwo.style.display = "block"
           }else{
            error.innerHTML = "Please insert a number between 1 to 10"
           }
        }else{
            error.innerHTML = playerOneInput.value + " It's not a number"
            console.log(playerOneInput.value)
        } 
    }
})

let score = document.querySelector(".score")
let chance = document.querySelector(".chance")
let count = 6;

playerTwoBtn.addEventListener("click", ()=>{
    //count chance 
    count--;
    score.textContent = count;
    if(playerTwoInput.value == ""){
       error.innerHTML = "Please give a valid number"
    }else{
        if(playerTwoInput.value - 20){
            if(playerTwoInput.value > 0 && playerTwoInput.value <= 10){
                error.innerHTML = ''
                if(playerTwoInput.value == playerOneValue){
                    playerTwo.innerHTML = ""
                    winimg.style.display = "block"
                    success.innerHTML = " Your guess is absouletly Right <br/> you win the Game"
               }else{
                if(count == 0){
                    playerTwo.style.display = "none"
                    opponentimg.style.display = "block"
                    player.innerHTML = "Player One Win"
                    success.innerHTML = " Your guess is absouletly Wrong <br/> Oppnent win the Game"
                }else{
                    chance.style.display = "block"
                }
               }
            }else{
                error.innerHTML = "Please insert a number between 1 to 10"
              }
        }else{
            error.innerHTML = playerTwoInput.value + " It's not a number"
            console.log(playerOneInput.value)
        } 
    }
})
