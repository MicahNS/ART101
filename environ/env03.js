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