$(document).ready(function(){
    // - 1.78 is the aspect ratio of the video
    // - This will work if your video is 1920 x 1080
    // - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
    var aspectRatio = 1.77777777;
    var video = $('.videocontainer');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight*aspectRatio;
	
	//height adjust
	var videoWidth = video.outerWidth();
	var newHeightPer = (videoWidth/newWidth)*100;
	var topAdjust = (newHeightPer-100)/2;
	
	//width adjust
	var newWidthPer = (videoHeight/(videoWidth*aspectRatio))*100;

    $('#videoiframe').css({"height":newHeightPer+"%","top":"-"+topAdjust+"%"});
	//, "width":newWidthPer+"%"
});

$(window).on('resize', function() {

    // Same code as on load        
     var aspectRatio = 1.77777777;
    var video = $('.videocontainer');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight*aspectRatio;
	
	//height adjust
	var videoWidth = video.outerWidth();
	var newHeightPer = (videoWidth/newWidth)*100;
	var topAdjust = (newHeightPer-100)/2;
	
	//width adjust
	var newWidthPer = (videoHeight/(videoWidth*aspectRatio))*100;

    $('#videoiframe').css({"height":newHeightPer+"%","top":"-"+topAdjust+"%"});
	//, "width":newWidthPer+"%"
});