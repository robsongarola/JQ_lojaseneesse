 

$(document).ready(function(){
    $("button").click(function(){
      $('p').fadeTo(3000,0.5);
    });
    $('.baixar').click(function(){
      $('.painel').slideToggle(3000)
    })
  });