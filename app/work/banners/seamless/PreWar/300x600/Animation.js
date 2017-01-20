var home_animation = {
  boundEvents: {},  
  img01A: document.getElementById("img01A"),
  img01B: document.getElementById("img01B"),
  img01C: document.getElementById("img01C"),
  img02A: document.getElementById("img02A"),
  img02B: document.getElementById("img02B"),
  img02C: document.getElementById("img02C"),
  frame_two: document.getElementById("frame_two"),
  frame_three: document.getElementById("frame_three"),
  PreWar_circle: document.getElementById("PreWar_circle"),
  container: document.getElementById("container"),
  bind: function (elem, eventName, callback) {if (elem.addEventListener) {elem.addEventListener(eventName, callback, false);}else if (elem.attachEvent) {var eID = elem.attachEvent('on'+ eventName, callback);boundEvents[eID] = { name: eventName, callback: callback };}},
  init: function () {
    // CTA BTN CLICKTAG //
    home_animation.bind(document.getElementById('click_screen'), 'click', function(e) 
    {
      e.preventDefault();
      Enabler.exit("clickTag1");
    });
    TweenLite.to(pre_war, 0.5, {scaleX:2.5,left:0, scaleY:2.5});
    TweenLite.to(PreWar_circle, 0, {scaleX:1.45,left:2, scaleY:1.45});
    TweenLite.to(img01A, 0, {scaleX:1.8, scaleY:1.8});TweenLite.to(img01B, 0, {scaleX:1.8, scaleY:1.8});TweenLite.to(img01C, 0, {scaleX:1.8, scaleY:1.8});
    TweenLite.to(img02A, 0, {scaleX:1.8, scaleY:1.8});TweenLite.to(img02B, 0, {top:0,scaleX:1.8, scaleY:1.8});TweenLite.to(img02C, 0, {scaleX:1.8, scaleY:1.8});
    TweenLite.to(get, 0.5, { top:255, scaleX:0, scaleY:0});

    home_animation.frame1();
  },
  reset: function () {    
  },
  frame1: function () {
    console.log("frame1");
    TweenLite.to(img01A, .3, {delay: 0, opacity:1, scaleX:1, scaleY:1, ease: Expo.easeInOut}); 
    TweenLite.to(img01B, .3, {delay: .2, opacity:1, scaleX:1, scaleY:1, ease: Expo.easeInOut}); 
    TweenLite.to(img01C, .3, {delay: .4, opacity:1, scaleX:1, scaleY:1, ease: Expo.easeInOut});    
    TweenLite.to(frame_two, .5, {opacity:1, delay: .8,ease: Expo.easeOut});

    TweenLite.delayedCall(1.9, home_animation.frame2);
  },
  frame2: function () {
    console.log("frame2");
    TweenLite.to(img01A, 0, {opacity:0});TweenLite.to(img01B, 0, {opacity:0});TweenLite.to(img01C, 0, {opacity:0});
    TweenLite.to(frame_two, 1, {top:-530, scaleX:0.7, scaleY:0.7, ease: Expo.easeOut});
    TweenLite.to(img02A, .5, {top:0, opacity:1, delay: 0.2, scaleX:1, scaleY:1, ease: Expo.easeOut});
    TweenLite.to(img02B, .5, {top:0, opacity:1, delay: 0.8, scaleX:1, scaleY:1, ease: Expo.easeOut});
    TweenLite.to(img02C, .5, {top:0, opacity:1, delay: 0.4, scaleX:1, scaleY:1, ease: Expo.easeOut});

    TweenLite.delayedCall(2.3, home_animation.frame3);
  },
  frame3: function () {
    console.log("frame3");
    TweenLite.to(img02A, 0.5, {opacity:1, delay: 0, top:-231, left:-4, scaleX:0.75, scaleY:0.75, ease: Expo.easeIn});
    TweenLite.to(img02B, 0.5, {opacity:1, delay: 0, top:-229, left:-4, scaleX:0.75, scaleY:0.75, ease: Expo.easeIn});
    TweenLite.to(img02C, 0.5, {opacity:1, delay: 0, top:-232, left:-7, scaleX:0.75, scaleY:0.75, ease: Expo.easeIn});
    TweenLite.to(pre_war, 0.5, {delay: .4, top:-58, scaleX:1, scaleY:1, ease: Expo.easeOut});
    
   TweenLite.to(last_frame_back, 0.5, {top:0, delay: .4,});


    TweenLite.to(PreWar_circle, 0, {delay: 2, opacity:1,left:-4, top:-66, ease: Expo.easeIn});
   // TweenLite.to(PreWar_circle, .5, {delay: 2, opacity:1,left:2, ease: Expo.easeIn});

    TweenLite.to(img02B, 0, {opacity: 0, delay: 2, ease: Expo.easeInOut});
    TweenLite.to(img02A, 0, {opacity: 0, delay: 2, ease: Expo.easeInOut});

    TweenLite.to(pre_war, 0, {opacity: 0, delay: 2, ease: Expo.easeOut});

    TweenLite.delayedCall(2, home_animation.frame4);
  },






  frame4: function () {
    console.log("frame4");
    
    TweenLite.to(PreWar_circle, 0.5 , {delay: 0, left:2, top:0, scaleX:1, scaleY:1, ease: Expo.easeOut});


    TweenLite.delayedCall(2.5, home_animation.frame5);
  },
  frame5: function () {
    console.log("frame5");
    TweenLite.to(PreWar_circle, 0.3, {delay: 0, top:-30, opacity:0,scaleX:.5, scaleY:.5, ease: Expo.easeInOut});
    TweenLite.to(img02A, 0, {opacity: 0, delay: 0, ease: Expo.easeInOut});
    TweenLite.to(img02C, 0, {opacity: 0, delay: 0, ease: Expo.easeInOut});
    TweenLite.to(logo, 0.5, {opacity: 1, delay: 0.3, ease: Expo.easeInOut});
    TweenLite.to(how, 0.5, {opacity: 1, delay: 0.7, ease: Expo.easeInOut});
    TweenLite.to(get, 0.5, { opacity:1, top:0, delay: 0.9, scaleX:1, scaleY:1, ease: Expo.easeInOut});
  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT,
enablerInitHandler);
  }
}
function enablerInitHandler(){home_animation.init();}

