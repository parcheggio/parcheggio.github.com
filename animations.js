$(window).load(function(){
	$('#logo').addClass("animated bounceInLeft");
	$('#phone').addClass("animated bounceInRight");
});

$(window).bind('scroll',function(e){
    parallax();
});

function parallax()
{
    var scrolled = $(window).scrollTop();
   
    if(scrolled<230)
    {
	    $('#logo').css('top',(221+(scrolled*.5))+'px');
	    $('#phone').css('top',(56+(scrolled*.9))+'px');
    }

}

