var BanTimeline = {
  f1_img1: document.getElementById("f1_img1"),
  f2_img1: document.getElementById("f2_img1"),
  f2_img2: document.getElementById("f2_img2"),
  f2_img3: document.getElementById("f2_img3"),
  f3_img1: document.getElementById("f3_img1"),
  bgColor: document.getElementById("bgColor"),
  f4_img1: document.getElementById("f4_img1"),
  f4_img2: document.getElementById("f4_img2"),
  f5_img1: document.getElementById("f5_img1"),
  f5_img2: document.getElementById("f5_img2"),
  cta: document.getElementById("cta"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
   // TweenLite.to(f5_img2, 0, {top:20});
   // TweenLite.to(cta,0, {top:50});


   // TweenLite.to(f3_img1, 0,{scaleX: 1.5,scaleY:1.5, top:40, left:210,rotation:10});    
    // run animation after init is done. 

     TweenLite.delayedCall(1.5, BanTimeline.frame1);
  },
  reset: function () {
    
  },
  frame1: function () {

    TweenLite.to(f1_img1, 0.7, {display: 'block', rotation:110, delay: 1.3});
    TweenLite.to(f1_img1, 0.3, {top:-220, delay: 1.3});
    TweenLite.to(f1_img1, 0.4, {left:320, delay: 1.4});
    TweenLite.to(f1_img1, 0.4, {left:520, delay: 1.6});


    TweenLite.delayedCall(6, BanTimeline.frame2);
  },
  frame2: function () {


    TweenLite.to(f2_img1, 0.7, {display: 'block', opacity:1});
    TweenLite.to(f2_img2, 0.9, {display: 'block', opacity:1, delay: 0.3});
    TweenLite.to(f2_img1, 0.7, {display: 'block', opacity:0, delay: 0.3});


    TweenLite.delayedCall(3, BanTimeline.frame3);
  },
  frame3: function () {


    TweenLite.to(f2_img2, 1, {display: 'block', top:-100});
    TweenLite.to(f3_img1, 1, {display: 'block', opacity:1, top:0});


    //TweenLite.delayedCall(2, BanTimeline.frame4);
  },
  frame4: function () {

    
    //TweenLite.delayedCall(3, BanTimeline.frame5);
  },
  frame5: function () {

  }
};
BanTimeline.init();