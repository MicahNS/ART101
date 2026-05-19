let count = 0;
let environmentTitle = "The Wider Universe";

let environmentElements = ["starbits", "spacedust", "space junk", "remnants of past worlds"];
let environmentElementsCount = environmentElements[count];


let bunnyOne = {
    name: "Star Bunny",
    type: "blue",
    mood: "curious",
    isMoving: false,
    favoriteElement: environmentElements[0]
};

let currentMood = buttonCreature.moods[arrayPosition];

let starColors= ["red", "blue", "white", "yellow", "orange"];
let starColorCount = starColors[count];

let bunnyTwo= {
    name: "Star Bunny",
    type: "yellow",
    mood: "joyous",
    isMoving: false,
    favoriteElement: environmentElements[1]
};
$("#title").click(function () {
    let message = "" + environmentTitle + "";


});
$("#elements").click(function () {
    let message = environmentElementsCount;


});

$("#starBunnyFirst").click(function () {
    let message = message + "<p>I am " + bunnyOne.name + "!</p>";
    message = message + "<p>I am the " + bunnyOne.type + " variety.</p>";
    message = message + "<p>I am feeling " + bunnyOne.mood +".</p>";
    message = message + "<p>My favorite part of space is " + bunnyOne.favoriteElement + "!</p>"
    
    ;
});

$("#starBunnySecond").click(function () {
    let message = message + "<p>I am " + bunnyTwo.name + "!</p>";
    message = message + "<p>I am the " + bunnyTwo.type + " variety.</p>";
    message = message + "<p>I am feeling " + bunnyTwo.mood +".</p>";
    message = message + "<p>My favorite part of space is " + bunnyTwo.favoriteElement + "!</p>"
    
    ;
});

$("#starColors").click(function () {
    let message = starColorCount;


});

$("#environment-output").html(message);


$("#space-button").click(function () {
    askSpace("Yes");
});

function askSpace(whatSpace) {
let userAnswer = prompt("Explore space?");
if (userAnswer == whatSpace) {background-image==url(spacetwo.jpg)

}


};


let following = false;

$("#creature").click(function () {
  $(this).toggleClass("transformed");
  $("#status").text("The creature changed shape.");
});

$("#creature").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
    $("#status").text("The creature revealed a thought.");
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("The thought disappeared.");
  }
);

$(document).keydown(function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();

    following = !following;
    $("#creature").toggleClass("following");

    if (following === true) {
      $("#status").text("The creature is following your cursor.");
    } else {
      $("#status").text("The creature stopped following you.");
    }
  }
});

$(document).mousemove(function (event) {
  if (following === true) {
    $("#creature").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
  }
});