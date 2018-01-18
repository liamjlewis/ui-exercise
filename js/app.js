$( document ).ready(function() {

	$('#sidebar-btn').on('click', function(){
		
		var sidebarWidth;

		if($(window).width() <= 768){
			sidebarWidth = 80;
		}else{
			sidebarWidth = 30;
		}
		if(parseInt($('#the-sidebar').css('right')) === 0){

			//hide sidebar
	    $('#the-sidebar').animate({
	    	right: '-'+sidebarWidth+'%'
	    }, 300, function(){
	    	$('#the-sidebar').css('display', 'none');
	    });

		}else{
			
			//show sidebar
			$('#the-sidebar').css({'display': 'initial', 'right': '-'+sidebarWidth+'%'});
			$('#the-sidebar').animate({
	    	right: '0'
	    }, 300);

		}
	})

});