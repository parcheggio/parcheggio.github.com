$(window).load(function(){
	$('#logo').css('display','block');
	$('#phone').css('display','block');
	$('#info').css('display','block');
	$('#logo').addClass("animated flipInY");
	$('#phone').addClass("animated bounceInRight");
	$('#info').addClass("animated fadeInUp");
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

