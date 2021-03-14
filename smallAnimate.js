$(document).ready( function () {
    $("p , input , label , button").hide()

    $("form").animate({
        "top":"100px",
    },1000)
    $("p").fadeIn(8000);
    $("input").show(5000);
    $("label").show(5000);
    $("button").fadeIn(8000);
    
});