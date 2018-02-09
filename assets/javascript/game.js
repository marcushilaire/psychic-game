// defining variable
var wins=1;
var losses=0;
var lives=10;

// array of letters testing with 5 for now
var letters= ["a", "b", "c", "d", "e"];
// slect a number from the array at random
var letterSelector = letters[Math.floor(Math.random() * letters.length)];
console.log(" ramdomly selected: "+ letterSelector);
// on functions that will load on any keypress

document.onkeyup = function(event){
    var userInput = String.fromCharCode(event.which).toLowerCase();
    console.log("keypress: "+ userInput);
    document.getElementById("wins").innerHTML="You have won " + wins + " times!";
    document.getElementById("lives").innerHTML="lives remaining " + lives;
    // condition on winning the round or losing a life
    if (userInput === letterSelector){
        wins=wins+1;
    }
    else{
        lives=lives-1;
        // document.getElementById("losses")
    }

};