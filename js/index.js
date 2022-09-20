$(".button").on("click", function(){
    console.log("you clicked a button!");
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

$(document).ready(function() {
  $(".resumeLink").click(function(e) {
    console.log("download link was clicked");
    e.preventDefault();
    window.location.href = "documents/resume2022.pdf";
  });
});