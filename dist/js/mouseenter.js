
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
    
        $("#services").mouseenter(function(){
            $("#menu").hide();
            $("#service-container").fadeIn(600);
        });
    });

    $('.service-button').click(function(){
        $('.service-button').removeClass('active').addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
    });
    
    // $(function(){
    
    //     $(".service-button").hover(function(){
    //         $('#theDiv').prepend('<img src="images/service-card-bg.jpg">')
    //     });
    // });
});

