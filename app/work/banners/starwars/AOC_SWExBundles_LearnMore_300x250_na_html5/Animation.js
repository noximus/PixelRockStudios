home_animation = (function() {

	function init()
	{
		frame1();
	}
		// vars
		var enterFor = document.getElementById("enterFor");
		var tweet = document.getElementById("tweet");
		var tweetp = document.getElementById("tweet").getElementsByTagName('p');
		var enter = document.getElementById("enter");
		var noPurch = document.getElementById("noPurch");
		var heroFrame = document.getElementById("heroFrame");
		var finalFrame = document.getElementById("finalFrame");
		var finaltxt= document.getElementById("finaltxt");
		var lrnBtn = document.getElementById("lrnBtn");
		var hash = document.getElementById("hash");
		var logo = document.getElementById("logo");

	function frame1()
	{
		TweenLite.to(enterFor, .8, {delay: 2, opacity: 1, ease: Linear.eastOut});
		TweenLite.delayedCall(5, frame2);
	}
	function frame2()
	{
		TweenLite.to(enter, 0.4, {opacity: 0, display: 'none', ease: Linear.easeOut});
		TweenLite.to(tweet, 0.8, {delay:.5,display: 'block', opacity: 1, ease: Linear.easeIn});
		TweenLite.to(tweetp, 0.8, {delay:.5,display: 'block', opacity: 1, ease: Linear.easeIn});
		TweenLite.delayedCall(3, frame3);
	}
	function frame3()
	{
		TweenLite.to(tweet, 0.4, {opacity: 0, display: 'none', ease: Linear.easeOut});
		TweenLite.to(hashtag, 0.5, {delay:.5, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.to(noPurch, 0.5, {delay: 1, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.delayedCall(3, frame4);
	}

	function frame4()
	{
		TweenLite.to(finalFrame, .5, {delay: .5, opacity: 1, display: 'block', ease: Linear.easeIn});
		TweenLite.to(logo, .5, {delay: 1.5, opacity: 1, display: 'block', ease: Linear.easeIn});
		TweenLite.to(finaltxt, 0.5, {delay: 1.5, opacity: 1, display:'block', ease: Linear.easeIn});
		TweenLite.to(hash, 0.5, {delay: .5, opacity: 1, display:'block', ease: Linear.easeIn});
		TweenLite.to(lrnBtn, 0.5, {delay: 2.5, opacity: 1, display:'block', ease: Linear.easeIn});
	}
	init();
});

home_animation();