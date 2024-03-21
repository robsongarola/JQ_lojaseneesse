 

$(function(){
  $('button.primeiro').mouseenter(function(){
    $('.primeira-col').hide(3000)
  });
  $('button.primeiro').click(function(){
    $('.primeira-col').show(3000)
  }) 
})
$(function(){
  $('button.segundo').mouseenter(function(){
    $('.segunda-col').fadeIn(3000)
  });
  $('button.segundo').mouseleave(function(){
    $('.segunda-col').fadeOut()
  })
})
$(function(){
  $('.terceira-col-1').mouseenter(function(){
    $('.terceira-col-2').slideToggle(3000)
  });
  $('.terceira-col-2').mousedown(function(){
    $(this).slideToggle(3000)
  });
  $('button.quarta').click(function(){
   let div = $('.quarta-col');
   div.animate({height: '300px', opacity: '0.4'}, "slow");
   div.animate({width: '300px', opacity: '0.8'}, "slow");
   div.animate({height: '100px', opacity: '0.4'}, "slow");
   div.animate({width: '100px', opacity: '0.8'}, "slow");
  })
})