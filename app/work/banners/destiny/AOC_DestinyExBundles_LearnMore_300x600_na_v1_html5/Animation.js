home_animation = (function() {
function init()
	{
		frame1();
	}
		// vars
		var enterFor = document.getElementById("enterFor");
		var prize = document.getElementById("prize");
		var tweet = document.getElementById("tweet");
		var tweetp = document.getElementById("tweet").getElementsByTagName('p');
		var enter = document.getElementById("enter");
		var heros = document.getElementById("heros");
		var herosImg = document.getElementById("heros").getElementsByTagName('img');
		var noPurch = document.getElementById("noPurch");
		var heroFrame = document.getElementById("heroFrame");
		var finalFrame = document.getElementById("finalFrame");
		var finaltxt= document.getElementById("finaltxt");
		var lrnBtn = document.getElementById("lrnBtn");
		var ps4logo = document.getElementById("ps4logo");

	function frame1()
	{
		TweenLite.to(enterFor, .8, {delay: .3, opacity: 1, ease: Linear.eastOut});
		TweenLite.to(prize, .8, {delay:1.3, opacity: 1, ease: Linear.eastOut});
		TweenLite.delayedCall(3, frame2);
	}

	function frame2()
	{
		TweenLite.to(prize, 0.4, {opacity: 0, ease: Linear.eastOut});
		TweenLite.to(enter, 0.4, {opacity: 0, display: 'none', ease: Linear.easeOut});
		TweenLite.to(concole, 0.4, {delay:.5, opacity: 1, ease: Linear.easeOut});
		TweenLite.to(tweet, 0.5, {delay:.5,display: 'block', opacity: 1, ease: Linear.easeIn});
		TweenLite.to(tweetp, 0.5, {delay:.3,display: 'block', opacity: 1, ease: Linear.easeIn});
		TweenLite.delayedCall(3, frame3);

	}

	function frame3()
	{
		TweenLite.to(concole, 0.4, {opacity: 0, ease: Linear.easeOut});
		TweenLite.to(tweet, 0.5, {opacity: .5, display: 'none', ease: Linear.easeOut});
		TweenLite.to(heros, 0.5, {delay:0, display: 'block', ease: Linear.easeIn});
		TweenLite.to(herosImg, 0.5, {delay:1, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.to(hashtag, 0.5, {delay:1.5, display: 'block', opacity:1, ease: Linear.easeIn});
		TweenLite.to(noPurch, 0.5, {delay:2.5, display: 'block', ease: Linear.easeOut});
		TweenLite.delayedCall(3, frame4);
	}

	function frame4()
	{
		TweenLite.to(finalFrame, .5, {delay: .5, opacity: 1, display: 'block', ease: Linear.easeIn});
		TweenLite.to(finaltxt, 0.5, {delay: 1.5, opacity: 1, display:'block', ease: Linear.easeIn});
		TweenLite.to(ps4logo, 0.5, {delay: .5, opacity: 1, display:'block', ease: Linear.easeIn});
		TweenLite.to(lrnBtn, 0.5, {delay: 2.5, opacity: 1, display:'block', ease: Linear.easeIn});
	}




	init();
});

// If true, start function. If false, listen for INIT.
window.onload = function() {
	home_animation();
}

