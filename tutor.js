// chalange 1: age in days
// ---------------------------------------------------------------------------------------
function ageInDays(){
    var Year = prompt('which year were you born bruh?!... please');
    var age = (2022 - Year);
    var ageInDays1 = (2022 - Year) * 365;
    var h1 = document.createElement('h1');
    var textAwnser = document.createTextNode('you are ' + ageInDays1 + ' days old and ' + age + ' years old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAwnser);
document.getElementById('flex-box-result').appendChild(h1);
    
}
// ---------------------------------------------------------------------------------------
function reset(){
    document.getElementById('ageInDays').remove();
}
// ---------------------------------------------------------------------------------------
// chalenge 2: CAT GENERTOR
// ---------------------------------------------------------------------------------------
function generator(){
    var image = document.createElement('img');
    var div = document.getElementById('generater');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small" 
    div.appendChild(image);
    image.setAttribute('id', 'gen1')
}
// ---------------------------------------------------------------------------------------
function genDelete(){
    document.getElementById('gen1').remove();

}
// ---------------------------------------------------------------------------------------
//challegne 3: rock, paper, scissor
// ---------------------------------------------------------------------------------------
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    
    humanChoice = yourChoice.id;
    botChoice =numberToChoice(randForRps());
    console.log('Computer Choice:', botChoice);

     result = decideWinner(humanChoice, botChoice);
     console.log(result);

    message = finalMessage(result); // ('message'): 'you won!' , 'colour',: 'green') 
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
// ---------------------------------------------------------------------------------------
function randForRps(){
    return Math.floor(Math.random() * 3);
}
// ---------------------------------------------------------------------------------------
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
// ---------------------------------------------------------------------------------------
    function decideWinner(yourChoice, computerChoice){
        var rpsDatabase = {
           'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
           'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
           'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
        };
        var yourScore = rpsDatabase[yourChoice][computerChoice];
        var botScore = rpsDatabase[computerChoice][yourChoice]; 

        return [yourScore, botScore];
    }
// ---------------------------------------------------------------------------------------
    function finalMessage([yourScore, botScore]){
        if(yourScore === 0) {
            return{'message': 'You Lost :(', 'colour': 'red'}; 
        }else if(yourScore === 0.5){
            return{'message': 'You Tied -_-', 'colour': 'yellow'};
        }else if(yourScore === 1)
        return{'message': 'You Won! :)', 'colour': 'green'};
    }
// ---------------------------------------------------------------------------------------

function rpsFrontEnd(humanImageChoice, botImnageChoice, finalMessage){
    var imageDatabase ={
    'rock': document.getElementById('rock').src ,
    'paper': document.getElementById('paper').src ,
    'scissors': document.getElementById('scissors').src
};
rock.remove();
scissors.remove();
paper.remove();
var humanDiv = document.createElement('div');

var botDiv = document.createElement('div');

var resultDiv = document.createElement('div');

 humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height=250 width=250 style= 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";

 resultDiv.innerHTML = "<h1 style='color: " + finalMessage['colour'] + "; font-size: 70px; padding: 50px; '>" + finalMessage['message'] + "</h1>"

 botDiv.innerHTML = "<img src='" + imageDatabase[botImnageChoice] + "'height=250 width=250 style= 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

document.getElementById('flex-box-rps-div').appendChild(humanDiv);

document.getElementById('flex-box-rps-div').appendChild(resultDiv);

document.getElementById('flex-box-rps-div').appendChild(botDiv);





//var replayButton = document.createElement('button');

//replayButton.innerHTML = "<button onClick=window.location.reload();>Refresh Page</button>"

//document.getElementById('container-3').appendChild(replayButton);


}

//--------------------------------------------------------

