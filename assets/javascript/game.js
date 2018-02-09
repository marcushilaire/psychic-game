// array of letters testing with 5 for now
var letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var tried=[];
// defining variable
var wins = 0;
var losses = 0;
var lives = 10;


// on functions that will load on any keypress

document.onkeyup = function(event){
    // variable set to the lower case of a key the use presses
    var userInput = String.fromCharCode(event.which).toLowerCase();

    // slect a number from the array at random
    var letterSelector = letters[Math.floor(Math.random() * letters.length)];



   
    // condition on winning the round or losing a life
    if (userInput === letterSelector){
        wins++;
        tried=[];
    }
    else{
        lives--;
        tried.push(userInput)
    };

    if(lives<1){
        losses++;
        lives=10;
        tried=[];        
    };
 
    document.getElementById("guessed").innerHTML="This round have tried: "+ [tried];
    document.getElementById("wins").innerHTML="You have won " + wins + " times!";
    document.getElementById("losses").innerHTML="Losses: " +losses;
    document.getElementById("lives").innerHTML="lives remaining: " + lives;
};