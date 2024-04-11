$(document).ready(function(){
    $('.button1').click(function(){
       alert('retorna texto '+ $('.par1').text()) 
    })
    $('.button2').click(function(){
        alert('retorna HTML '+ $('.par2').html())
    })
    $('.button3').click(function(){
         alert('Renorna Imput '+ $('.nome').val())
    })
    $('.button4').click(function(){
        alert('retorna attr : '+ $('a').attr('href'))
    })
    $('.button5').click(function(){
        alert("Modificando texto : " + $('.par3').text('novo Texto'))
    })
    $('.button6').click(function(){
        $('ol').append('<li>Itens 1</li>')
    })
    $('p.depois').mouseenter(function(){
        $(this).after('<b>Bom dia</b>')
    })
})