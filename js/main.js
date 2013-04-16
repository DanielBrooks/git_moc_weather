
$('document').ready(function() {
    
    $('#forecast-slider').codaSlider();
    
    $('.switcher-block .switcher .icon').on('click', function(e){
        
        e.preventDefault();
        e.stopPropagation();
        
        $(this).toggleClass('graph');
        
    });
    
    $('.nav a').on('click', function(e) {
        
        e.preventDefault();
        e.stopPropagation();
        
        $('.nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        
    });
    
    $('#open-sources').on('click', function(e) {
        
        e.preventDefault();
        e.stopPropagation();
        
        $(this).closest('.sources').addClass('opened');
        //$(this).siblings('.sources-wrap').animate({display: 'toggle'}, 500);
        
    });
    
    $('#close-sources').on('click', function(e) {
        
        e.preventDefault();
        e.stopPropagation();
        
        $(this).closest('.sources').removeClass('opened');
        //$(this).siblings('.sources-wrap').animate({display: 'toggle'}, 500);
        
    });
    
});