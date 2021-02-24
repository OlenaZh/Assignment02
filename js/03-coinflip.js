/*eslint-env browser*/
var choice = prompt ("Heads or Tails");
var coinFlip = Math.round(Math.random()) +1;
var flipResult;
if (coinFlip < 10) {
    var flipResult = "heads" ;
} else {
    var flipResult = "tails";
} if (flipResult == choice) {
    if (flipResult == "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was tails and you chose heads...you lose!"); 
    }
} else {
    if (flipResult == "tails") {
        alert("The flip was tails and you chose tails...you win!"); 
    } else {
        alert("The flip was heads and you chose tails...you lose!"); 
    }

}