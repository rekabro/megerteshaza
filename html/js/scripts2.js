/* --- CONTENT --- */

$(".icon").mouseenter(function(){
    $(".arrow").animate({marginLeft: "-1em"}, 500).animate({marginLeft: "0"});
});

$(".more-button").onclick(function(){
    $(".more-text").style({display: block});
});

function showHidden() {
    document.getElementById("dropdown").style.display = "block";
  }

  function hideHidden() {
    document.getElementById("dropdown").style.display = "none";
  }