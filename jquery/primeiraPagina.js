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
        $('.primeira').animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            maxWidth: '150px',
            
        });
    }),
    $("button.mover").click(function(){
        $("div.primeira").animate({left: '250px'});
      }); 

})

