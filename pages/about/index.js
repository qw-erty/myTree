
const btnScrollToTop = document.getElementById("top");
btnScrollToTop.addEventListener("click",function() {
    $("html, body").animate({scrollTop:0},"slow");
});