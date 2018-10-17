$(document).ready(function(){
	$(".dial").knob({
	    'release' : function (v) { 
		  
		  var color_rgb ='rgb(' + $('#red').val() + ',' + $('#green').val() + ',' + $('#blue').val() + ')';

		  $('#color').css('background-color',color_rgb);
		  $('#texto').text(color_rgb);
	    }
	});
});
