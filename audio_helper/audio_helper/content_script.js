$(".audio_wrp").click();
setTimeout(function(){
		$(".audio_wrp").click();
		var audioInfo = $("audio");
		if(audioInfo.length!=1){
			chrome.runtime.sendMessage({type:"audio_url_information", error:"获取音频信息失败."});
		}
		else{
			var msg = {
				type: "audio_url_information",
				url: audioInfo.attr("src")
			};
			chrome.runtime.sendMessage(msg);
		}
	},
	1000
);

