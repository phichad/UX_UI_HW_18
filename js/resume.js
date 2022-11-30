$(".button").on("click", function(){
    console.log("you clicked a button!");
});

$(document).ready(function() {
    $(".resumeDownload").click(function(e) {
      console.log("download link was clicked");
      e.preventDefault();
      window.location.href = "documents/resume2022.pdf";
    });
  });