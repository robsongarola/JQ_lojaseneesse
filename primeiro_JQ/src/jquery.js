
    
   function acumula(){
    var text1= $('p').text('primeiro texto')
    var text2= $('<p></p>').text('segundo texto');
    var text3= document.createElement('p');
    text3.innerText='Terceiro texto';
    $('body').append(text1, text2, text3)
   } 
 