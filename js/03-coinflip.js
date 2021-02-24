/*eslint-env browser*/
var coinFlip = Math.round(Math.random());
var choice = window.prompt ("Heads or Tails");
var flipResult;
if (coinFlip < 10) {
    var flipResult = "heads" ;
} else {
    var flipResult = "tails";
} if (flipResult == choice) {
    if (flipResult == "heads") {
        window.alert("The flip was heads and you chose heads...you win!");
    } else {
        window.alert("The flip was tails and you chose tails...you win!"); 
    }
} else {
    if (flipResult == "heads") {
        window.alert("The flip was heads and you chose tails...you lose!"); 
    } else {
        window.alert("The flip was tails and you chose heads...you lose!"); 
    }

}