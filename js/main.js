$('document').ready(function() {
    
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
});