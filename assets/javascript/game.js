// array of letters testing with 5 for now
var letters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var tried=[];
// defining variable
var wins = 0;
var losses = 0;
var lives = 10;



function stats(){
    document.getElementById("guessed").innerHTML="This round you have tried: "+ [tried];        document.getElementById("wins").innerHTML="You have won " + wins + " times!";
    document.getElementById("losses").innerHTML="Losses: " + losses;
    document.getElementById("lives").innerHTML="lives remaining: " + lives;
};
function reset(){
    lives=10;
    tried=[];
};

function randomLetter(){
    var letterSelector = letters[Math.floor(Math.random() * letters.length)];
    reset();
    stats();
    
    console.log("I am thinking " + letterSelector);


    document.onkeyup = function(event){ 
        var userInput = String.fromCharCode(event.which).toLowerCase();


        if (userInput === letterSelector){
            wins++;
            randomLetter();
        }
        else{
            lives--;
            tried.push(userInput)
        };

        if(lives<1){
            losses++;
            randomLetter();
                   
        };
    stats();
    };
};
    