var randomNumber = 19 + (Math.floor(Math.random() * 102));
var playerPoints = 0;
var wins = 0;
var losses = 0;
var counter = 0;

//display code
$(".randomNumber").text(randomNumber);
$("#wins").text(wins);
$("#losses").text(losses);
$("#counter").text(counter);
$(".playerPoints").text(playerPoints);

// assign buttons to individual variable
var button1 = 1 + (Math.floor(Math.random() * 12));
$('#button1').attr('data-value', button1);
var button2 = 1 + (Math.floor(Math.random() * 12));
$('#button2').attr('data-value', button2);
var button3 = 1 + (Math.floor(Math.random() * 12));
$('#button3').attr('data-value', button3);
var button4 = 1 + (Math.floor(Math.random() * 12));
$('#button4').attr('data-value', button4);

$(document).on('click', 'button', function () {
//DONT TOUCH THIS, IT WORKS PERFRECTLY
    button = $(this);
    counter++;
    $("#counter").text(counter);
    playerPoints = playerPoints + parseInt(button.attr('data-value'));
    $(".playerPoints").text(playerPoints);
//
    if(playerPoints > randomNumber){
        playerPoints = 0;
        $(".playerPoints").text(playerPoints);
        counter = 0;
        $("#counter").text(counter);
        losses++;
        randomNumber = 19 + (Math.floor(Math.random() * 102));
        $(".randomNumber").text(randomNumber);
        $("#losses").text(losses);
    }
    if(playerPoints == randomNumber){
        playerPoints = 0;
        $(".playerPoints").text(playerPoints);
        counter = 0;
        $("#counter").text(counter);
        wins++; 
        randomNumber = 19 + (Math.floor(Math.random() * 102));
        $(".randomNumber").text(randomNumber);
        $("#wins").text(wins);
    }
})

//need to figure out how to show that the player points are adding together

