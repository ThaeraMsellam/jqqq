$(document).ready(function(){
    $(".click").click(function(){
     $("#shadow").fadeIn(500);
     $(".login").fadeIn(500);
    });
    $(".close , #shadow").click(function(){
      $("#shadow").fadeOut(500);
      $(".login").fadeOut(500);
    });
    
  });