$(function() {

		jQuery('.open-header').click(showHeader);
		jQuery('.close-header').click(hideHeader);
		
		function showHeader(){
		jQuery('.header-content').slideDown('medium');
		jQuery('.close-header').slideDown('fast');
		jQuery('.open-header').fadeOut('fast');}
		
		function hideHeader(){
		jQuery('.header-content').slideUp('medium');
		jQuery('.close-header').fadeOut('fast');
		jQuery('.open-header').fadeIn('fast');}
		
		jQuery('#switcher_btn').click(showPanel);
		jQuery('.close_btn').click(hidePanel);
		
		function showPanel(){
		jQuery('#styleSwitcher').delay(100).slideDown('medium');
		jQuery('#switcher_btn').fadeOut('fast');}
		
		function hidePanel(){
		jQuery('#styleSwitcher').fadeOut('medium');
		jQuery('#switcher_btn').delay(100).fadeIn('slow');}
		
		jQuery(".bg-yellow").mousedown(function(){jQuery(".bg").css("background","#F7B500")})
		jQuery(".bg-yellow").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-yellow").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-yellow").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-yellow").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-blue").mousedown(function(){jQuery(".bg").css("background","#0099FF")})
		jQuery(".bg-blue").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-blue").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-blue").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-blue").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-red").mousedown(function(){jQuery(".bg").css("background","#FF4444")})
		jQuery(".bg-red").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-red").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-red").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-red").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-green").mousedown(function(){jQuery(".bg").css("background","#88CC00")})
		jQuery(".bg-green").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-green").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-green").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-green").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-turky").mousedown(function(){jQuery(".bg").css("background","#008888")})
		jQuery(".bg-turky").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-turky").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-turky").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-turky").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-brown").mousedown(function(){jQuery(".bg").css("background","#BB8000")})
		jQuery(".bg-brown").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-brown").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-brown").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-brown").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-pink").mousedown(function(){jQuery(".bg").css("background","#EE44EE")})
		jQuery(".bg-pink").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-pink").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-pink").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-pink").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-cyan").mousedown(function(){jQuery(".bg").css("background","#0FBBBB")})		
		jQuery(".bg-cyan").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-cyan").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-cyan").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-cyan").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-yellow").mousedown(function(){jQuery(".button").css("background","#F7B500")})
		jQuery(".bg-blue").mousedown(function(){jQuery(".button").css("background","#0099FF")})
		jQuery(".bg-red").mousedown(function(){jQuery(".button").css("background","#FF4444")})
		jQuery(".bg-green").mousedown(function(){jQuery(".button").css("background","#88CC00")})
		jQuery(".bg-turky").mousedown(function(){jQuery(".button").css("background","#008888")})
		jQuery(".bg-brown").mousedown(function(){jQuery(".button").css("background","#BB8000")})
		jQuery(".bg-pink").mousedown(function(){jQuery(".button").css("background","#EE44EE")})
		jQuery(".bg-cyan").mousedown(function(){jQuery(".button").css("background","#0FBBBB")})
		
		jQuery(".bg-opacity-1").mousedown(function(){jQuery(".bg").css("opacity","0.10")})
		jQuery(".bg-opacity-1").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-1").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-1").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-1").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-opacity-2").mousedown(function(){jQuery(".bg").css("opacity","0.20")})
		jQuery(".bg-opacity-2").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-2").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-2").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-2").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-opacity-3").mousedown(function(){jQuery(".bg").css("opacity","0.30")})
		jQuery(".bg-opacity-3").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-3").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-3").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-3").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-opacity-4").mousedown(function(){jQuery(".bg").css("opacity","0.40")})
		jQuery(".bg-opacity-4").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-4").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-4").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-4").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-opacity-5").mousedown(function(){jQuery(".bg").css("opacity","0.50")})
		jQuery(".bg-opacity-5").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-5").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-5").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-5").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-opacity-6").mousedown(function(){jQuery(".bg").css("opacity","0.60")})
		jQuery(".bg-opacity-6").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-6").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-6").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-6").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-opacity-7").mousedown(function(){jQuery(".bg").css("opacity","0.70")})
		jQuery(".bg-opacity-7").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-7").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-7").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-7").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-opacity-8").mousedown(function(){jQuery(".bg").css("opacity","0.80")})
		jQuery(".bg-opacity-8").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-8").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-8").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-8").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})

		jQuery(".bg-opacity-9").mousedown(function(){jQuery(".bg").css("opacity","0.90")})
		jQuery(".bg-opacity-9").mousedown(function(){jQuery(".bg").css("-o-transition","all .3s")})
		jQuery(".bg-opacity-9").mousedown(function(){jQuery(".bg").css("-moz-transition","all .3s")})
		jQuery(".bg-opacity-9").mousedown(function(){jQuery(".bg").css("-webkit-transition","all .3s")})
		jQuery(".bg-opacity-9").mousedown(function(){jQuery(".bg").css("-ms-transition","all .3s")})
				
});