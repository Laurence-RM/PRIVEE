sqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fill<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> <!--/*//<!--//sqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fillsqs-video-background content-fill-->*/-->$(document).ready(function(){
    // - 1.78 is the aspect ratio of the video
    // - This will work if your video is 1920 x 1080
    // - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
    var aspectRatio = 1.77777777;
    var video = $('.videocontainer iframe');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight*aspectRatio;
    var halfNewWidth = newWidth/2;
	
	//height adjust
	var container = $('.videocontainer');
	var videoWidth = container.outerWidth();
	var newHeightPer = videoWidth/newWidth;

    video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});

});

$(window).on('resize', function() {

    // Same code as on load        
    var aspectRatio = 1.77777777;
    var video = $('.videocontainer iframe');
    var videoHeight = video.outerHeight();
    var newWidth = videoHeight*aspectRatio;
    var halfNewWidth = newWidth/2;
	
	//height adjust
	var container = $('.videocontainer');
	var videoWidth = container.outerWidth();
	var newHeightPer = videoWidth/newWidth;

    video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
});