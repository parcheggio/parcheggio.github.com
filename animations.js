$(window).bind('scroll',function(e){
    parallax();
});

function parallax()
{
    var scrolled = $(window).scrollTop();
    $('#logo').css('top',(221+(scrolled*.5))+'px');
    $('#phone').css('top',(56+(scrolled*.9))+'px');

    if(scrolled>370)
    {
        $('#divHead').css('position', 'fixed');
        $('#divHead').css('top', '-230px');
        $('#divHead').css('left', 'auto');
    }
}

