home_animation = (function() {
	
	var boundEvents = {};

	function bind (elem, eventName, callback) {
		if (elem.addEventListener) {
			elem.addEventListener(eventName, callback, false);
		}

		else if (elem.attachEvent) {
			var eID = elem.attachEvent('on'+ eventName, callback);
			boundEvents[eID] = { name: eventName, callback: callback };
		}
	}

	function unbind (elem, eventName, callback) {
		if (elem.removeEventListener) {
			elem.removeEventListener(eventName, callback, false);
		}

		else if (elem.detachEvent) {
			for (var eID in boundEvents) {
				if ((boundEvents[eID].name === eventName) &&
						(boundEvents[eID].callback === callback)) {
					elem.detachEvent(eID);
					delete boundEvents[eID];
				}
			}
		}
	}
	

		

	function init()
	{



		TweenLite.to(over, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(eight, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(million, 0, {scaleX:2.5, scaleY:2.5});

		TweenLite.to(people, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(people_line_left, 0.5, {scaleX:2.5, scaleY:2.5});

		TweenLite.to(inLine, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(inText, 0, {scaleX:2.5, scaleY:2.5});

		TweenLite.to(newText, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(york, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(city, 0, {scaleX:2.5, scaleY:2.5});

		TweenLite.to(and, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(we, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(help, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(you, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(avoid, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(them, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(people_one, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(all, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(people_two, 0, {scaleX:2.5, scaleY:2.5});

		TweenLite.to(logo, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(how_new_york, 0, {scaleX:2.5, scaleY:2.5});
		TweenLite.to(order_now, 0, { scaleX:0, scaleY:0});




		// CTA BTN CLICKTAG //
			bind(document.getElementById('click_screen'), 'click', function(e) 
			{
				e.preventDefault();
				Enabler.exit("clickTag1");
			});
	
	

		document.getElementById("container").style.display = "block";


		frame1();

	}


	
		// vars	
		/*
		var frame_two = document.getElementById("frame_two");
		var frame_one = document.getElementById("frame_one");
		var frame_three = document.getElementById("frame_three");
		var PreWar_circle = document.getElementById("PreWar_circle");
		var container = document.getElementById("container");
		*/

		//document.getElementById("left_heart").style.display = "block";
		//document.getElementById("right_heart").style.display = "block";


		
	function frame1()
	{

		TweenLite.to(over, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0, ease: Expo.easeOut});		
		TweenLite.to(eight, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.1, ease: Expo.easeOut});		
		TweenLite.to(million, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.2, ease: Expo.easeOut});		

		TweenLite.delayedCall(0.8, frame2);
	}
	
	function frame2()
	{

		TweenLite.to(over_color, 0.4, {opacity:1,});		
		TweenLite.to(eight_color, 0.4, {opacity:1,});		
		TweenLite.to(million_color, 0.4, {opacity:1,});

		TweenLite.delayedCall(1, frame3);
		
	}
	
	function frame3()
	{
		TweenLite.to(over_color, 0.3, {opacity:0,});		
		TweenLite.to(eight_color, 0.3, {opacity:0,});		
		TweenLite.to(million_color, 0.3, {opacity:0,});

		TweenLite.to(over, 0.3, {opacity:0,});		
		TweenLite.to(eight, 0.3, {opacity:0,});		
		TweenLite.to(million, 0.3, {opacity:0,});		

		TweenLite.delayedCall(0.7, frame4);
	}
	
	function frame4()
	{

		TweenLite.to(people, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.1, ease: Expo.easeOut});		
		TweenLite.to(inLine, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.3, ease: Expo.easeOut});		
		TweenLite.to(inText, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.4, ease: Expo.easeOut});		
		TweenLite.to(newText, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.5, ease: Expo.easeOut});		
		TweenLite.to(york, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.6, ease: Expo.easeOut});		
		TweenLite.to(city, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.7, ease: Expo.easeOut});		
		TweenLite.to(nyc_color, 0.4, {delay: 1, opacity:1,});		


		TweenLite.delayedCall(1.2, frame5);
	}


	
	function frame5()
	{

		TweenLite.to(people, 0.3, {opacity:0, scaleX:1, scaleY:1, delay: 0.1, ease: Expo.easeOut});		
		TweenLite.to(inLine, 0.3, {opacity:0, scaleX:1, scaleY:1, delay: 0.3, ease: Expo.easeOut});		
		TweenLite.to(inText, 0.3, {opacity:0, scaleX:1, scaleY:1, delay: 0.4, ease: Expo.easeOut});		
		TweenLite.to(newText, 0.3, {opacity:0, scaleX:1, scaleY:1, delay: 0.5, ease: Expo.easeOut});		
		TweenLite.to(york, 0.3, {opacity:0, scaleX:1, scaleY:1, delay: 0.6, ease: Expo.easeOut});		
		TweenLite.to(city, 0.3, {opacity:0, scaleX:1, scaleY:1, delay: 0.7, ease: Expo.easeOut});		
		TweenLite.to(nyc_color, 0.4, {delay: 1, opacity:0,});		


		TweenLite.delayedCall(1.7, frame6);
	}

	function frame6()
	{

		TweenLite.to(and, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.1, ease: Expo.easeOut});		
		TweenLite.to(we, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.2, ease: Expo.easeOut});		
		TweenLite.to(help, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.3, ease: Expo.easeOut});		
		TweenLite.to(you, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.4, ease: Expo.easeOut});		
		TweenLite.to(avoid, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.5, ease: Expo.easeOut});		
		TweenLite.to(them, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.6, ease: Expo.easeOut});		
		TweenLite.to(people_one, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.7, ease: Expo.easeOut});	
		TweenLite.to(all, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.8, ease: Expo.easeOut});					
		TweenLite.to(people_two, 0.3, {opacity:1, scaleX:1, scaleY:1, delay: 0.9, ease: Expo.easeOut});		
		TweenLite.to(avoid_color, 0.3, {opacity:1, delay: 1.2,});		

		TweenLite.delayedCall(2.5, frame7);

	}

	function frame7()
	{	
	
		TweenLite.to(and, 0.3, {opacity:0,});		
		TweenLite.to(we, 0.3, {opacity:0,});		
		TweenLite.to(help, 0.3, {opacity:0,});
		TweenLite.to(avoid, 0.3, {opacity:0,});		
		TweenLite.to(them, 0.3, {opacity:0,});		
		TweenLite.to(people_one, 0.3, {opacity:0,});
		TweenLite.to(people_two, 0.3, {opacity:0,});		
		TweenLite.to(avoid_color, 0.3, {opacity:0,});	
		TweenLite.to(you, 0.3, {opacity:0,});		
		TweenLite.to(all, 0.3, {opacity:0,});		
		
		TweenLite.delayedCall(0.7, frame8);
	}
	

	function frame8()
	{	
		TweenLite.to(logo, 0.4, {opacity:1, scaleX:1, scaleY:1, delay: 0.1, ease: Expo.easeOut});		
		TweenLite.to(how_new_york, 0.4, {opacity:1, scaleX:1, scaleY:1, delay: 0.2, ease: Expo.easeOut});	
		TweenLite.to(order_now, 0.4, {top:0, opacity:1, scaleX:1, scaleY:1, delay: 1, ease: Expo.easeOut});
	
	}




	init();
});





// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
enablerInitHandler);
  }
}

function enablerInitHandler() {
  home_animation();
}

