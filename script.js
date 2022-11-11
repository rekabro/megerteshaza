/* CONTENTS */


/* Show icon-related info-spans 

$(".icons1").hover(function(){
    $(".hidden1").show();
  },
  function(){
    $(".hidden1").hide();
  });
  

$(".icons2").hover(function(){
    $(".hidden2").show();
  },
  function(){
    $(".hidden2").hide();
});
  
  
$(".icons3").hover(function(){
    $(".hidden3").show();
},
function(){
    $(".hidden3").hide();
}
    );

  */
    const icons = document.querySelectorAll(".icons");

    function showHidden () {
     
    }

    icons.forEach(function(icon) {
      icon.addEventListener("hover", showHidden);
    });