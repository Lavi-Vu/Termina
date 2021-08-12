$( "#light-mode" ).click(function() {
    var element = document.body;
    element.classList.toggle("light-mode");
  });
  
$( "#dark-mode" ).click(function() {
      console.log("clicked");
      $( "body" ).removeClass( "light-mode" )
});