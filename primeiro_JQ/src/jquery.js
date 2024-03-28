$(document).ready(function(){
   $('.button1').click(function(){
      alert('O texto é :'+ $('.teste').text())
   }) 
   $('.button2').click(function(){
      alert('O texto digitado é :'+ $('#entrada').val())
   })
   $('button.def_text1').click(function(){
      $('p.def_text').text('Novo Texto')
   })
   $('button.def_html1').click(function(){
      $('p.def_html').html('<b>Novo HTML</b>')
   })
   $('.cli1').mouseenter(function(){
      $(this).val('Gabriel Garola')
      
   }).mouseout(function(){
      $(this).val('Digite seu nome')
   })
})