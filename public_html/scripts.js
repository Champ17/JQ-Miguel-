$("document").ready(function() {
    $(".k").css("color", "cyan");
    $(".k").css("text-align", "center");
    $('p:first').css("color", "black");
    $("p:last").css("color", "blue");
    $('body').css("background-image", "url(http://1.media.dorkly.cvcdn.com/55/71/c988305d1cae5e1f56b2178a1c43b74d.gif)");
    $("body").css("background-size", "cover");
    $("h1").bind("mouseover", mouseOverMe);
    $("h1").bind("mouseout", mouseOutMe);
});

function mouseOverMe() {
    $("h1").css("color", "red");
}
function mouseOutMe(){
    
}


