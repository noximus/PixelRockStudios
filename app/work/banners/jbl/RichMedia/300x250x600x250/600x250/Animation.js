RM_rollover.onmouseover = function() {
	TweenLite.to(RM_rollover, 0.2, {opacity:1});
};
RM_rollover.onmouseout = function() {
 	TweenLite.to(RM_rollover, 0.2, {opacity:0});
};
closeBtnEx.onclick = function() {
	console.log("close");
};