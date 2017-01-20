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
  PreWar_kitchen: document.getElementById("PreWar_kitchen"),
  container: document.getElementById("container"),
  bind: function (elem, eventName, callback) {if (elem.addEventListener) {elem.addEventListener(eventName, callback, false);}else if (elem.attachEvent) {var eID = elem.attachEvent('on'+ eventName, callback);boundEvents[eID] = { name: eventName, callback: callback };}},
  init: function () {
    // CTA BTN CLICKTAG //
    home_animation.bind(document.getElementById('click_screen'), 'click', function(e) 
    {
      e.preventDefault();
      Enabler.exit("clickTag1");
    });
    TweenLite.to(pre_war, 0.5, {scaleX:1.5, scaleY:1.5});
    TweenLite.to(PreWar_kitchen, 0, {scaleX:1.5, scaleY:1.5});
    TweenLite.to(img01A, 0, {scaleX:1.8, scaleY:1.8});TweenLite.to(img01B, 0, {scaleX:1.8, scaleY:1.8});TweenLite.to(img01C, 0, {scaleX:1.8, scaleY:1.8});
    TweenLite.to(img02A, 0, {scaleX:1.8, scaleY:1.8});TweenLite.to(img02B, 0, {top:0,scaleX:1.8, scaleY:1.8});TweenLite.to(img02C, 0, {scaleX:1.8, scaleY:1.8});
    TweenLite.to(get, 0.5, { top:255, scaleX:0, scaleY:0});


    document.getElementById("container").style.display = "block";


    home_animation.frame1();
  },
  reset: function () {    
  },
  frame1: function () {
    console.log("frame1");
    TweenLite.to(img01A, .3, {delay: 0, opacity:1, scaleX:1, scaleY:1, ease: Expo.easeInOut}); 
    TweenLite.to(img01B, .3, {delay: 0, opacity:1, scaleX:1, scaleY:1, ease: Expo.easeInOut}); 
    TweenLite.to(img01C, .3, {delay: .2, opacity:1, scaleX:1, scaleY:1, ease: Expo.easeInOut});    
    TweenLite.to(frame_two, .5, {opacity:1, delay: .8,ease: Expo.easeOut});

    TweenLite.delayedCall(2.2, home_animation.frame2);
  },
  frame2: function () {
    console.log("frame2");
    TweenLite.to(img01A, 0, {opacity:0});TweenLite.to(img01B, 0, {opacity:0});TweenLite.to(img01C, 0, {opacity:0});
    TweenLite.to(frame_two, 1, {top:-430, scaleX:0.7, scaleY:0.7, ease: Expo.easeOut});
    TweenLite.to(img02A, .5, {top:-64, opacity:1, delay: 0.2, scaleX:1, scaleY:1, ease: Expo.easeOut});
    TweenLite.to(img02B, .5, {top:-66, delay: 0.8, scaleX:1, scaleY:1, ease: Expo.easeOut});
    TweenLite.to(img02C, .5, {top:-61, opacity:1, delay: 0.4, scaleX:1, scaleY:1, ease: Expo.easeOut});
    TweenLite.to(PreWar_kitchen, .5, {opacity: 1, delay: 1.5, scaleX:1, scaleY:1,  ease: Expo.easeInOut});

    TweenLite.delayedCall(2.9, home_animation.frame3);
  },
  frame3: function () {
    console.log("frame3");
  //  TweenLite.to(img02A, 0.5, {opacity:1, delay: 0, top:-87, left:0, scaleX:0.75, scaleY:0.75, ease: Expo.easeIn});
   // TweenLite.to(img02B, 0.5, {opacity:1, delay: 0, top:-87, left:0, scaleX:0.75, scaleY:0.75, ease: Expo.easeIn});
   // TweenLite.to(img02C, 0.5, {opacity:1, delay: 0, top:-87, left:0, scaleX:0.75, scaleY:0.75, ease: Expo.easeIn});
   // TweenLite.to(pre_war, 0.5, {opacity: 1, delay: .4, top:-74, scaleX:1, scaleY:1, ease: Expo.easeOut});
    


   TweenLite.to(pre_war, 0.5, {opacity: 1, delay: .4, top:19, scaleX:1, scaleY:1, ease: Expo.easeOut});

/*
   TweenLite.to(img02A, 0.5, {delay: .4, scaleX:1, scaleY:1, opacity:1, ease: Expo.easeOut});
   TweenLite.to(img02C, 0.5, {delay: .4, scaleX:1, scaleY:1, opacity:1, ease: Expo.easeOut});
   TweenLite.to(img02B, 0.5, {delay: .4, scaleX:1, scaleY:1, opacity:1, ease: Expo.easeOut});
*/
   // TweenLite.to(img02B, 0.5, {delay: .4, scaleX:1, scaleY:1, opacity:1, ease: Expo.easeOut});
   // TweenLite.to(last_frame_back, .3, {opacity: 1, delay: .3,});

  TweenLite.to('#container', .3, {delay: .4, backgroundColor:"#f4b926", })


    TweenLite.delayedCall(2.2, home_animation.frame4);

  },

    frame4: function () {
    console.log("frame4");



    TweenLite.to(logo, 0.7, {opacity: 1, delay: 0, ease: Expo.easeInOut});
    TweenLite.to(how, 0.7, {opacity: 1, delay: 0.1, ease: Expo.easeInOut});
    TweenLite.to(get, 0.7, { opacity:1, top:0, delay: 0.7, scaleX:1, scaleY:1, ease: Expo.easeInOut});


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

