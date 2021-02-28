$(document).ready(function() {
    $(function() {


        var linux = $('#os-linux');
        var windows = $('#os-windows');

        family = $('.field-item input[value=0]').attr('checked','checked');
        option = $('.custom-select option[value=0]').attr('selected','selected');

        option = Math.ceil(0.037680556);
        family = 10;
        linux = 10;
        windows = 5;

        // option2 = Math.ceil(0.67388889);
        // option3 = Math.ceil(0.126791667);
        // option4 = Math.ceil(0.245611111);
        // option5 = Math.ceil(0.48325);
        // option6 = Math.ceil(0.958527778);
        // option7 = Math.ceil(0.055736111);
        // option8 = Math.ceil(0.199027778);
        // option9 = Math.ceil(0.390083333);
        // option10 = Math.ceil(0.772194444);
        // option11 = Math.ceil(0.536416667);
        // option12 = Math.ceil(0.091861111);
        // option13 = Math.ceil(0.175736111);
        // option14 = Math.ceil(0.3435);
        // option15 = Math.ceil(0.679027778);
        // option16 = Math.ceil(1.350083333);
        // option17 = Math.ceil(2.692194444);
        // option18 = Math.ceil(0.042930556);
        // option19 = Math.ceil(0.077888889);
        // option20 = Math.ceil(0.147791667);
        // option21 = Math.ceil(0.287611111);
        // option22 = Math.ceil(0.56725);
        // option23 = Math.ceil(0.126527778);
        // option24= Math.ceil(1.060986111);
        
        result = (parseFloat($('#quantity').val(), 10) + parseFloat($('#disk-quantity').val(), 10));
        

        $('.field-controls').click(function(){
            $('#result').text(
                result += (parseFloat($('#quantity').val(), 10) + parseFloat($('#disk-quantity').val(), 10) * 1.54)
            );
        }); 

        $('.custom-select').click(function(){
            $('#result').text(
                (result + option ) * 1.54
            );
        }); 

        $('.field-item input').click(function(){
            $('#result').text(
                result += family
            );
        }); 
        
        $('#result').text(
            result
        );
    })
})