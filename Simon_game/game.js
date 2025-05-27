
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;


  
}
// <------------------easier --------------->




// var level= 0 ;

// $(document).keypress(function () {
  
//   nextSequence();
// });

// var gamePattern = [];
// var userClickedPattern = [];
// const Colors = ["red", "blue", "green", "yellow"];

// // Attach the click handler only once
// $('div[type="button"]').click(function () {
//   var userChosenColour = $(this).attr('id');
//   userClickedPattern.push(userChosenColour);
//   playSound(userChosenColour);

//   // Add white shadow
//   $(this).css({
//     "box-shadow": "0 0 20px 5px white",
//     "transition": "box-shadow 0.3s ease"
//   });
// checkAnswer(userClickedPattern.length - 1);
//   // Remove shadow after 300ms
//   setTimeout(() => {
//     $(this).css("box-shadow", "none");
//   }, 300);
// });

// function nextSequence() {
//   let randomColor = Colors[Math.floor(Math.random() * 4)];
//   gamePattern.push(randomColor);
//    userClickedPattern = [];
//   level++;
//  $("#level-title").text("Level " + level);
//   $("#" + randomColor).fadeOut(100).fadeIn(500);
//   playSound(randomColor);
// }

// function playSound(name) {
//   const sound = new Audio("sounds/" + name + ".mp3");
//   sound.play();
// }
// function checkAnswer(currentLevel) {
//   if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
//     console.log("success");

//     // If the user has finished the full sequence
//     if (userClickedPattern.length === gamePattern.length) {
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }

//   } else {
//     console.log("wrong");
//     // Add game over sound or visual here if you want
//   }
// }
