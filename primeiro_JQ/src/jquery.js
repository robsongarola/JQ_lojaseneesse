$(document).ready(function(){
   $('.button1').click(function(){
      alert('O texto é :'+ $('.teste').text())
   }) 
   $('.button2').click(function(){
      alert('O texto digitado é :'+ $('#entrada').val())
   })
})