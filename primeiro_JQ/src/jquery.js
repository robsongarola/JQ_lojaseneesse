 

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
  $('.quarta').click(function(){
    $('.quarta-col').animate({
      fontSize: "2em",
      textAlign: "left",
      color:"red"
    })
  })

})