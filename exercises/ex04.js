
let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];
let colorCount;
let pencil = {
    color: "Yellow",
    isSharp: false,
}



$("#needy-button").click(function () {

    count = count + 1;
    
    colorCount=count-1;

    $("#needy-button").html("Did you just touch me " + count + " times?" + " " + colors[colorCount % 4]);

    $("#needy-button").css("background-color", colors[colorCount % 4]);

    $("html").css("background-color", colors[(colorCount+1) % 4]);

    console.log(pencil.color);


});