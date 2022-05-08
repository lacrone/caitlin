// Toggle Project Menu Script
$(document).ready(function(){
  $("#menu-toggle").click(function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
  });
});