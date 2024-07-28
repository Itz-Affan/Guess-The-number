let randNum = Math.floor(Math.random() * 101);
let res =  document.querySelector(".corrNum")
let score = document.querySelector(".score");
let button = document.querySelector("button");


let getUserInput = () => {
      return parseInt(prompt ("Guess the number:"));
    
}
let numberOfTries = 100;

let i = 0;
button.addEventListener('click', () => {
    i++;
    let userInput = getUserInput();

        if (userInput === randNum) {
             res.innerHTML = "The correct number is "  +   randNum;
             numberOfTries  -= i;
             score.innerHTML = "Your score is: " + numberOfTries;

        } else {
            if (userInput > randNum){
                res.innerHTML = "The correct number is less than " + userInput + ". Try again";
            } else {
                res.innerHTML = "The correct number is more than " + userInput + ". Try again";
            }
        }
})
