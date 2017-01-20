var BanTimeline = {
  star1: document.getElementById("star1"),
  star2: document.getElementById("star2"),
  star3: document.getElementById("star3"),
  star4: document.getElementById("star4"),
  star5: document.getElementById("star5"),
  star6: document.getElementById("star6"),
  utensil1: document.getElementById("utensil1"),
  utensil2: document.getElementById("utensil2"),
  utensil3: document.getElementById("utensil3"),
  utensil4: document.getElementById("utensil4"),
  utensil5: document.getElementById("utensil5"),
  your: document.getElementById("your"),
  tinykitchen: document.getElementById("tinykitchen"),
  thankyou: document.getElementById("thankyou"),
  frame1Wrap: document.getElementById("frame1Wrap"),
  f2AndSoWill: document.getElementById("f2AndSoWill"),
  f2TheGuy: document.getElementById("f2TheGuy"),
  f2SublettingIt: document.getElementById("f2SublettingIt"),
  f2star1: document.getElementById("f2star1"),
  f2star2: document.getElementById("f2star2"),
  f2star3: document.getElementById("f2star3"),
  f2star4: document.getElementById("f2star4"),
  f2star5: document.getElementById("f2star5"),
  f3Logo: document.getElementById("f3Logo"),
  f3NyEats: document.getElementById("f3NyEats"),
  f3OrderNow: document.getElementById("f3OrderNow"),
  init: function () {
   
    document.getElementById("container").style.display = "block";

    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
      TweenLite.to(your, .4, {scaleX:0, scaleY:0});
      TweenLite.to(f3OrderNow, .4, {scaleX:0, scaleY:0});
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(utensil1, .2, {display:'block', opacity:1, delay:.3, ease:Power4.easeOut});
    TweenLite.to(utensil2, .2, {display:'block', opacity:1, delay:.35, ease:Power4.easeOut});
    TweenLite.to(utensil3, .5, {display:'block', top:0, delay:.4, ease:Power4.easeOut});
    TweenLite.to(utensil4, .2, {display:'block', opacity:1, delay:.45, ease:Power4.easeOut});
    TweenLite.to(utensil5, .2, {display:'block', opacity:1, delay:.5, ease:Power4.easeOut});
    TweenLite.to(your, .2, {opacity:1, display: 'block', scaleX:1, scaleY:1, delay:.6, ease:Power1.easeOut});
    TweenLite.to(tinykitchen, .2, {opacity:1, display: 'block', delay:.7, ease:Power1.easeOut});
    TweenLite.to(thankyou, .2, {opacity:1, display: 'block', delay:.8, ease:Power1.easeOut});
    TweenLite.to(star5, .2, {opacity:1, display:'block', delay:.9, ease:Bounce.easeOut});
    TweenLite.to(star1, .2, {opacity:1, display:'block', delay:1, ease:Bounce.easeOut});
    TweenLite.to(star2, .2, {opacity:1, display:'block', delay:1.1, ease:Bounce.easeOut});
    TweenLite.to(star3, .2, {opacity:1, display:'block', delay:1.2, ease:Bounce.easeOut});
    TweenLite.to(star4, .2, {opacity:1, display:'block', delay:1.3, ease:Bounce.easeOut});  
    TweenLite.to(star6, .2, {opacity:1, display:'block', delay:1.4, ease:Bounce.easeOut});

    TweenLite.delayedCall(3.5, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(frame1Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f2AndSoWill, .2, {opacity:1, display: 'block', delay: .2, ease:Power4.easeOut});
    TweenLite.to(f2TheGuy, .2, {opacity:1, display: 'block', delay: .4, ease:Power4.easeOut});
    TweenLite.to(f2SublettingIt, .2, {opacity:1, display: 'block', delay: .6, ease:Power4.easeOut});
    TweenLite.to(f2Star2, .2, {opacity:1, display: 'block', delay: .7, ease:Power4.easeOut});
    TweenLite.to(f2Star3, .2, {opacity:1, display: 'block', delay: .8, ease:Power4.easeOut});
    TweenLite.to(f2Star4, .2, {opacity:1, display: 'block', delay: .9, ease:Power4.easeOut});
    TweenLite.to(f2Star5, .2, {opacity:1, display: 'block', delay: 1, ease:Power4.easeOut});
    TweenLite.to(f2Star1, .2, {opacity:1, display: 'block', delay: 1.1, ease:Power4.easeOut});
    TweenLite.delayedCall(4, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(frame2Wrap, .2, {opacity:0, display: 'none', delay: 0, ease:Power4.easeOut});
    TweenLite.to(f3Logo, .4, {opacity:1, display: 'block', delay: .3, ease:Power4.easeOut});
    TweenLite.to(f3NyEats, .4, {opacity:1, display: 'block', delay: .8, ease:Power4.easeOut});
    TweenLite.to(f3OrderNow, .5, {opacity:1, top:0, display: 'block', scaleX:1, scaleY:1, delay: 1.3, ease:Power4.easeOut});
  }
};
// If true, start function. If false, listen for INIT.
window.onload = function() {BanTimeline.init();}