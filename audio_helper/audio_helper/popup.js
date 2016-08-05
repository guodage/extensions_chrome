document.addEventListener('DOMContentLoaded', function () {
	var audio_url = chrome.extension.getBackgroundPage().msg.url;
	
	// chrome.tabs.create({
 //            url: audio_url
 //        })

 	$("#audio_div").append('<audio controls="controls" src="' + audio_url + '"></audio>');
});
