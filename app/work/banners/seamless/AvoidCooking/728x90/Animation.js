var home_animation = {
  boundEvents: {},  
  container: document.getElementById("container"),
  Frame1: document.getElementById("Frame1"),
  Frame2: document.getElementById("Frame2"),
  f1_Img01: document.getElementById("f1_Img01"),
  f1_Img02: document.getElementById("f1_Img02"),
  f1_Img03: document.getElementById("f1_Img03"),
  f1_Img04: document.getElementById("f1_Img04"),
  f1_txt01: document.getElementById("f1_txt01"),
  f1_txt02: document.getElementById("f1_txt02"),
  f1_txt03: document.getElementById("f1_txt03"),
  f1_txt04: document.getElementById("f1_txt04"),  
  f2_Img01: document.getElementById("f2_Img01"),
  f2_Img02: document.getElementById("f2_Img02"),
  f2_Img03: document.getElementById("f2_Img03"),
  f2_Img04: document.getElementById("f2_Img04"),
  bind: function (elem, eventName, callback) {if (elem.addEventListener) {elem.addEventListener(eventName, callback, false);}else if (elem.attachEvent) {var eID = elem.attachEvent('on'+ eventName, callback);boundEvents[eID] = { name: eventName, callback: callback };}},
  init: function () {
    // CTA BTN CLICKTAG //
   // home_animation.bind(container,'click',function(e){e.preventDefault();Enabler.exit("clickTag1");});
    TweenLite.to(container, 0, {opacity:1, display:'block'});      
    TweenLite.to(order_now, 0, {opacity:1, scaleX:0, scaleY:0});  

    TweenLite.to(f1_Img01, 0, {left:-100});
    TweenLite.to(f1_Img02, 0, {left:-100});
    TweenLite.to(f1_Img03, 0, {left:300});
    TweenLite.to(f1_Img04, 0, {left:300});
    TweenLite.to(f2_Img01, 0, {left:-100});
    TweenLite.to(f2_Img02, 0, {left:-100});
    TweenLite.to(f2_Img03, 0, {left:300});
    TweenLite.to(f2_Img04, 0, {left:300});
    TweenLite.to(order_now, 0, {opacity:1, left:280, top:250, scaleX:0, scaleY:0});  
    home_animation.frame1();
  },
  reset: function () {    
  },
  frame1: function () {
    TweenLite.to(f1_Img01, .5, {opacity:1, delay: .2, left:0, ease: Expo.easeOut});
    TweenLite.to(f1_Img02, .5, {opacity:1, delay: 0, left:0, ease: Expo.easeOut});
    TweenLite.to(f1_Img03, .5, {opacity:1, delay: 0, left:0, ease: Expo.easeOut});
    TweenLite.to(f1_Img04, .5, {opacity:1, delay: .2, left:0, ease: Expo.easeOut});

    TweenLite.to(f1_txt01, .5, {opacity:1, delay: .7, ease: Expo.easeOut});
    TweenLite.to(f1_txt02, .5, {opacity:1, delay: .6, ease: Expo.easeOut});
    TweenLite.to(f1_txt03, .5, {opacity:1, delay: .5, ease: Expo.easeOut});
    TweenLite.to(f1_txt04, .5, {opacity:1, delay: .4, ease: Expo.easeOut});
    
    // Exit
   // TweenLite.to(Frame1, 0.2, {opacity:0, delay: 2.8});
    TweenLite.delayedCall(3, home_animation.frame1Outro);
  },
  frame1Outro: function () {
    TweenLite.to(f1_Img01, .5, {opacity:0, delay: .4, top:75, ease: Expo.easeIn});
    TweenLite.to(f1_Img02, .5, {opacity:0, delay: 0.2, top:75, ease: Expo.easeIn});
    TweenLite.to(f1_Img03, .5, {opacity:0, delay: 0.2, top:-75, ease: Expo.easeIn});
    TweenLite.to(f1_Img04, .5, {opacity:0, delay: .4, top:-75, ease: Expo.easeIn});

    TweenLite.to(f1_txt01, .3, {opacity:0, delay: .3, ease: Expo.easeOut});
    TweenLite.to(f1_txt02, .3, {opacity:0, delay: .2, ease: Expo.easeOut});
    TweenLite.to(f1_txt03, .3, {opacity:0, delay: .1, ease: Expo.easeOut});
    TweenLite.to(f1_txt04, .3, {opacity:0, delay: 0, ease: Expo.easeOut});

    TweenLite.to(f1_Img01, .5, {opacity:0, delay: .2, left:250, ease: Expo.easeIn});
    TweenLite.to(f1_Img02, .5, {opacity:0, delay: 0, left:250, ease: Expo.easeIn});
    TweenLite.to(f1_Img03, .5, {opacity:0, delay: 0, left:-250, ease: Expo.easeIn});
    TweenLite.to(f1_Img04, .5, {opacity:0, delay: .2, left:-250, ease: Expo.easeIn});

    TweenLite.to(Frame1, 0.5, {opacity:0, delay: 2.8});
    TweenLite.delayedCall(1, home_animation.frame2);
  },
  frame2: function () {
    TweenLite.to(f2_Img01, .5, {opacity:1, delay: .2, left:0, ease: Expo.easeOut});
    TweenLite.to(f2_Img02, .5, {opacity:1, delay: 0, left:0, ease: Expo.easeOut});
    TweenLite.to(f2_Img03, .5, {opacity:1, delay: 0, left:0, ease: Expo.easeOut});
    TweenLite.to(f2_Img04, .5, {opacity:1, delay: .2, left:0, ease: Expo.easeOut});

    TweenLite.to(f2_txt01, .5, {opacity:1, delay: .7, ease: Expo.easeOut});
    TweenLite.to(f2_txt02, .5, {opacity:1, delay: .6, ease: Expo.easeOut});
    TweenLite.to(f2_txt03, .5, {opacity:1, delay: .5, ease: Expo.easeOut});
    TweenLite.to(f2_txt04, .5, {opacity:1, delay: .4, ease: Expo.easeOut});
    TweenLite.to(f2_txt05, .5, {opacity:1, delay: 1, ease: Expo.easeOut});
    TweenLite.to(f2_txt06, .5, {opacity:1, delay: .9, ease: Expo.easeOut});
    TweenLite.to(f2_txt07, .5, {opacity:1, delay: .8, ease: Expo.easeOut});
    TweenLite.to(f2_txt08, .5, {opacity:1, delay: .7, ease: Expo.easeOut});
    
    // Exit
    TweenLite.delayedCall(3, home_animation.frame2Outro);
  },
  frame2Outro: function () {
    TweenLite.to(f2_Img01, .5, {opacity:0, delay: .4, top:75, ease: Expo.easeIn});
    TweenLite.to(f2_Img02, .5, {opacity:0, delay: 0.2, top:75, ease: Expo.easeIn});
    TweenLite.to(f2_Img03, .5, {opacity:0, delay: 0.2, top:-75, ease: Expo.easeIn});
    TweenLite.to(f2_Img04, .5, {opacity:0, delay: .4, top:-75, ease: Expo.easeIn});

    TweenLite.to(f2_txt01, .3, {opacity:0, delay: .3, ease: Expo.easeOut});
    TweenLite.to(f2_txt02, .3, {opacity:0, delay: .2, ease: Expo.easeOut});
    TweenLite.to(f2_txt03, .3, {opacity:0, delay: .1, ease: Expo.easeOut});
    TweenLite.to(f2_txt04, .3, {opacity:0, delay: 0, ease: Expo.easeOut});
    TweenLite.to(f2_txt05, .3, {opacity:0, delay: .3, ease: Expo.easeOut});
    TweenLite.to(f2_txt06, .3, {opacity:0, delay: .2, ease: Expo.easeOut});
    TweenLite.to(f2_txt07, .3, {opacity:0, delay: .1, ease: Expo.easeOut});
    TweenLite.to(f2_txt08, .3, {opacity:0, delay: 0, ease: Expo.easeOut});

    TweenLite.to(f2_Img01, .5, {opacity:0, delay: .2, left:300, ease: Expo.easeIn});
    TweenLite.to(f2_Img02, .5, {opacity:0, delay: 0, left:300, ease: Expo.easeIn});
    TweenLite.to(f2_Img03, .5, {opacity:0, delay: 0, left:-300, ease: Expo.easeIn});
    TweenLite.to(f2_Img04, .5, {opacity:0, delay: .2, left:-300, ease: Expo.easeIn});

    TweenLite.to(Frame2, 0.5, {opacity:0, delay: 2.8});
    TweenLite.delayedCall(1, home_animation.frame3);
  },
  frame3: function () {
    TweenLite.to(logo, 0.3, {left:0, opacity:1});
    TweenLite.to(how, 0.3, {opacity:1, delay:0.1});
    TweenLite.to(order_now, 0.3, {opacity:1, left:0, top:0, delay:0.2, scaleX:1, scaleY:1});  
  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {home_animation.init();}

