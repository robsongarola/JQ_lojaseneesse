 

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
    $('.terceira-col-2').slideUp(3000)
  });
  $('.terceira-col-2').mouseout(function(){
    $(this).slideDown(3000)
  })

})