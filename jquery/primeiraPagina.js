$(document).ready(function(){
    $('button').click(function(){
        $('.teste').hide(2000)
    }),
    $('h4').dblclick(function(){
        $(this).hide();
    }),
    $('p.red').mouseenter(function(){
        $(this).css("background-color","red")
    }),
    $('button.alterna1').click(function(){
        $('p.alterna').toggle(5000);
    }),
    $('button').click(function(){
        var div = $("div.primeira");
        div.animate({left: '100px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");     
        });
    })    
 

