
$(document).ready(function() {
    $(function(){
        $("#albn").hide();
        
        $("#alba-button").click(function(){
            $("#albn").hide();
            $("#alba").fadeIn(300);
        });
        
        $("#albn-button").click(function(){
            $("#alba").hide();
            $("#albn").fadeIn(800);
        })
    });
    
    $(function(){
        $("#cases-second-image").hide();


        $(".cases-section_buttons button").click(function(){
            $("#cases-first-image").hide();
            $("#cases-second-image").fadeIn();
        })

        $(".cases-section_buttons button").click(function(){
            $("#cases-second-image").hide();
            $("#cases-first-image").fadeIn();
        });
    });
    
    $(function(){
        $("#service-container").hide();
    
        // $("#services").mouseenter(function(){
        //     $("#service-container").fadeIn();
        //     $("#menu").hide();
        // });
    });

    $(".card-front").hover(function(){
        $(this).css('background-image', 'url(images/service-card-bg.jpg)');
        $(this).css('background-size', 'cover');
        $(this).css('background-position', 'center');
        $(this).css('background-repeat', 'no-repeat')
    }, function() {
        $(this).css('background-image', 'none')
    });
});

$(function(){
    var prev;   
  
    $('.btn-service').hover(function(){
        prev = $(this).text();
        $(this).text(`${prev} Public IPs`);
    }, function(){
        $(this).text(prev)
    });
})