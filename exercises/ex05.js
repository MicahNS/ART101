
let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum", "Orchid"];
let ColorCounter=0;
let mood="neutral";


$("#needy-button").click(function () {
    $("#needy-button").html("Clicks: " + count + " Color: " + colors[count]);
    $("body").css("background-color", colors[count]);

    count = count + 1;

    if (count<=5) {$("#needy-button").html("Did you just touch me " + count + " times?" + "? I'm so fresh and happy!")
    }
    if (count>=5) {$("#needy-button").html("Did you just touch me " + count + " times?" + "? I'm getting tired...")
    }
    if (count>=8) {$("#needy-button").html("Did you just touch me " + count + " times?" + "? I can't go on!")
    };

    if (count == 4) {
        ColorCount = 0;
        console.log("it happened")
    }

    if (colors[count] == "HotPink") {
        $("#needy-button").after(" HotPink ");
    }
    else if (colors[count] == "Orchid") {
        $("#needy-button").after("  hey Orchid ");
    }
    else {
        $("#needy-button").after(" all other colors ");
    }


});
