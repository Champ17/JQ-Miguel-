$("document").ready(function() {
    $(".k").css("color", "cyan");
    $(".k").css("text-align", "center");
    $('p:first').css("color", "white");
    $("p:last").css("color", "blue");
    $('body').css("background-image", "url(http://images2.alphacoders.com/246/246522.jpg)");
    $("body").css("background-size","cover");
    $('#replaceWHtml').bind('click', replaceWHtml);
    $("#replaceWText").bind("click", replaceWText);
    $("#MEXICO").bind("click", changeMexico);
    $("#superHumans").accordion({header: "h3"});
    $("#superHumans").css("opacity", "0.7");
    
    $("h1").bind("mouseover", mouseOverMe);
    $("h1").bind("mouseout", mouseOutMe);
    $("MEXICO").css("background-image","url(http://fc09.deviantart.net/fs70/f/2011/254/7/3/wallpaper_debian_mexico_by_hacktotopo-d49ijrt.png)");  
});

function mouseOverMe() {
    $("h1").css("color", "red");
}
function mouseOutMe(){
    $("h1").css("color","cyan");
}
function replaceWHtml(){
  $('#ptag').html('<h6>HI<h6>');
}
function replaceWText(){
  $("#change").text("<h6>HI<h6>");   
}
function changeMexico(){
  $("MEXICO").css("background-image","url(http://fc09.deviantart.net/fs70/f/2011/254/7/3/wallpaper_debian_mexico_by_hacktotopo-d49ijrt.png)");  
}


