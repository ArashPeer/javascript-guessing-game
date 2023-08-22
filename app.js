let maximum = parseInt(prompt("Enter you maximum number!"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid num#"));
}

let targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = parseInt(prompt("Enter the first gussing number"));
let attemps = 1
while(guess !== targetNum){
    attemps++
    if(guess > targetNum){
        guess = parseInt(prompt("Too high"))
    }else{
        guess = parseInt(prompt("Too low"))
    }
}
console.log(`Congrats! You win the game after ${attemps} attempts`)