 

$(document).ready(function(){
    $("button").click(function(){
      $('p').fadeToggle('slow');
    });
    $('.baixar').click(function(){
      $('.painel').slideToggle(3000)
    })
  });

  $(document).ready(function(){
    $('div.left').click(function(){
      $(this).animate({ left: '300px'})
      
    })
    $('div.left').click(function(){
      $(this).animate({right:'300px'})
    })
  })