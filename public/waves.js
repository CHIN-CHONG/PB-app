$(document).ready(function(){
    $('.custom_ripple').on('click' , function(){
      $(this).find(".ripple_wave").remove();
      $(this).append("<span class='ripple_wave'></span>").delay(500).queue(function(next){
        $(".ripple_wave").remove();
        next();
      });
  
      
      
    });
  });