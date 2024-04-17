
    
   function acumula(){
    var text1= $('p').text('primeiro texto')
    var text2= $('<p></p>').text('segundo texto');
    var text3= document.createElement('p');
    text3.innerText='Terceiro texto';
    $('body').before(text1, text2, text3)
   } 

   $(document).ready(function(){
      $('.button10').click(function(){
         $('#pai').empty()
      })
      $('.button11').click(function(){
         $('.cor').addClass('azul')
         $('h1,h3').addClass('importante')
      })
   })
 