var BanTimeline = {
  f1_img1: document.getElementById("f1_img1"),
  f2_img1: document.getElementById("f2_img1"),
  f2_img2: document.getElementById("f2_img2"),
  f2_img3: document.getElementById("f2_img3"),
  f2_img4: document.getElementById("f2_img4"),
  f2_img5: document.getElementById("f2_img5"),
  f2_img6: document.getElementById("f2_img6"),
  f2_img7: document.getElementById("f2_img7"),
  f2_img8: document.getElementById("f2_img8"),
  f2_img9: document.getElementById("f2_img9"),
  f2_img10: document.getElementById("f2_img10"),
  f2_img11: document.getElementById("f2_img11"),
  f2_img12: document.getElementById("f2_img12"),
  f2_img13: document.getElementById("f2_img13"),
  f2_img14: document.getElementById("f2_img14"),
  f2_img15: document.getElementById("f2_img15"),
  f2_img16: document.getElementById("f2_img16"),
  f2_img17: document.getElementById("f2_img17"),
  f2_img18: document.getElementById("f2_img18"),
  f2_img19: document.getElementById("f2_img19"),
  f2_img20: document.getElementById("f2_img20"),
  f2_img21: document.getElementById("f2_img21"),
  f2_img22: document.getElementById("f2_img22"),
  f2_img23: document.getElementById("f2_img23"),
  f2_img24: document.getElementById("f2_img24"),
  f2_img25: document.getElementById("f2_img25"),
  f2_img26: document.getElementById("f2_img26"),
  f2_img27: document.getElementById("f2_img27"),
  f2_img28: document.getElementById("f2_img28"),
  f2_img29: document.getElementById("f2_img29"),
  f2_img30: document.getElementById("f2_img30"),
  f2_img31: document.getElementById("f2_img31"),
  f2_img32: document.getElementById("f2_img32"),
  f2_img33: document.getElementById("f2_img33"),
  f2_img34: document.getElementById("f2_img34"),
  f2_img35: document.getElementById("f2_img35"),
  f2_img36: document.getElementById("f2_img36"),
  f3_img1: document.getElementById("f3_img1"),
  bgColor: document.getElementById("bgColor"),
  f4_img1: document.getElementById("f4_img1"),
  f4_img2: document.getElementById("f4_img2"),
  f5_img1: document.getElementById("f5_img1"),
  f5_img2: document.getElementById("f5_img2"),
  cta: document.getElementById("cta"),
  init: function () {
    // initial settings for banner frame 1.  In case banner needs to restart.  add as many as you can to CSS first so Banner doesn't jump
    TweenLite.to(f3_img1, 0,{scaleX: 3,scaleY: 3, top:-150, left:140,rotation:0});    
    // run animation after init is done. 
    BanTimeline.frame1();
  },
  reset: function () {
    
  },
  frame1: function () {
    TweenLite.to(f1_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});

    TweenLite.delayedCall(.5, BanTimeline.frame2);
  },
  frame2: function () {
    TweenLite.to(f2_img1, .3, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f2_img2, .3, {opacity:1, display: 'block', delay: .1, ease: Quad.easeOut});
    TweenLite.to(f2_img3, .3, {opacity:1, display: 'block', delay: .2, ease: Quad.easeOut});
    TweenLite.to(f2_img4, .3, {opacity:1, display: 'block', delay: .3, ease: Quad.easeOut});
    TweenLite.to(f2_img5, .3, {opacity:1, display: 'block', delay: .4, ease: Quad.easeOut});
    TweenLite.to(f2_img6, .3, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
    TweenLite.to(f2_img7, .3, {opacity:1, display: 'block', delay: .6, ease: Quad.easeOut});
    TweenLite.to(f2_img8, .3, {opacity:1, display: 'block', delay: .7, ease: Quad.easeOut});
    TweenLite.to(f2_img9, .3, {opacity:1, display: 'block', delay: .8, ease: Quad.easeOut});
    TweenLite.to(f2_img10, .3, {opacity:1, display: 'block', delay: .9, ease: Quad.easeOut});
    TweenLite.to(f2_img11, .3, {opacity:1, display: 'block', delay: 1, ease: Quad.easeOut});
    TweenLite.to(f2_img12, .3, {opacity:1, display: 'block', delay: 1.1, ease: Quad.easeOut});
    TweenLite.to(f2_img13, .3, {opacity:1, display: 'block', delay: 1.2, ease: Quad.easeOut});
    TweenLite.to(f2_img14, .3, {opacity:1, display: 'block', delay: 1.3, ease: Quad.easeOut});
    TweenLite.to(f2_img15, .3, {opacity:1, display: 'block', delay: 1.4, ease: Quad.easeOut});
    TweenLite.to(f2_img16, .3, {opacity:1, display: 'block', delay: 1.5, ease: Quad.easeOut});
    TweenLite.to(f2_img17, .3, {opacity:1, display: 'block', delay: 1.6, ease: Quad.easeOut});
    TweenLite.to(f2_img18, .3, {opacity:1, display: 'block', delay: 1.7, ease: Quad.easeOut});
    TweenLite.to(f2_img19, .3, {opacity:1, display: 'block', delay: 1.8, ease: Quad.easeOut});
    TweenLite.to(f2_img20, .3, {opacity:1, display: 'block', delay: 1.9, ease: Quad.easeOut});
    TweenLite.to(f2_img21, .3, {opacity:1, display: 'block', delay: 2, ease: Quad.easeOut});
    TweenLite.to(f2_img22, .3, {opacity:1, display: 'block', delay: 2.1, ease: Quad.easeOut});
    TweenLite.to(f2_img23, .3, {opacity:1, display: 'block', delay: 2.2, ease: Quad.easeOut});
    TweenLite.to(f2_img24, .3, {opacity:1, display: 'block', delay: 2.3, ease: Quad.easeOut});
    TweenLite.to(f2_img25, .3, {opacity:1, display: 'block', delay: 2.4, ease: Quad.easeOut});
    TweenLite.to(f2_img26, .3, {opacity:1, display: 'block', delay: 2.5, ease: Quad.easeOut});
    TweenLite.to(f2_img27, .3, {opacity:1, display: 'block', delay: 2.6, ease: Quad.easeOut});
    TweenLite.to(f2_img28, .3, {opacity:1, display: 'block', delay: 2.7, ease: Quad.easeOut});
    TweenLite.to(f2_img29, .3, {opacity:1, display: 'block', delay: 2.8, ease: Quad.easeOut});
    TweenLite.to(f2_img30, .3, {opacity:1, display: 'block', delay: 2.9, ease: Quad.easeOut});
    TweenLite.to(f2_img31, .3, {opacity:1, display: 'block', delay: 3, ease: Quad.easeOut});
    TweenLite.to(f2_img32, .3, {opacity:1, display: 'block', delay: 3.1, ease: Quad.easeOut});
    TweenLite.to(f2_img33, .3, {opacity:1, display: 'block', delay: 3.2, ease: Quad.easeOut});
    TweenLite.to(f2_img34, .3, {opacity:1, display: 'block', delay: 3.3, ease: Quad.easeOut});
    TweenLite.to(f2_img35, .3, {opacity:1, display: 'block', delay: 3.4, ease: Quad.easeOut});
    TweenLite.to(f2_img36, .3, {opacity:1, display: 'block', delay: 3.5, ease: Quad.easeOut});

    TweenLite.to(f1_img1, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
     
    TweenLite.to(f2_img1, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img2, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img3, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img4, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img5, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img6, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img7, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img8, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img9, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img10, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img11, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img12, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img13, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img14, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img15, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img16, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img17, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img18, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img19, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img20, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img21, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img22, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img23, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img24, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img25, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img26, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img27, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img28, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img29, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img30, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img31, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img32, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img33, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img34, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img35, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});
    TweenLite.to(f2_img36, 0, {opacity:0, display: 'block', delay: 5, ease: Quad.easeOut});

    TweenLite.delayedCall(5, BanTimeline.frame3);
  },
  frame3: function () {
    TweenLite.to(f3_img1, 0, {opacity:1, display: 'block'});
    TweenLite.to(f3_img1, 1, {opacity:1, display: 'block',scaleX: 1,scaleY: 1,top:0, left:0, ease: Quad.easeOut});
    TweenLite.to(bgColor, 0, {opacity:1, display: 'block', delay: 1});

    TweenLite.to(f3_img1, .5, {opacity:1, display: 'block',left:-980, delay: 2, ease: Quad.easeIn});

    TweenLite.delayedCall(2, BanTimeline.frame4);
  },
  frame4: function () {
    TweenLite.to(f4_img1, 1, {opacity:1, display: 'block', delay: 0, ease: Quad.easeOut});
    TweenLite.to(f4_img2, 1, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
    
    TweenLite.delayedCall(3, BanTimeline.frame5);
  },
  frame5: function () {
    TweenLite.to(f4_img1, 1, {opacity:1, display: 'block' ,left:210,top:10, width:240, ease: Quad.easeOut});
    TweenLite.to(f4_img2, 1, {opacity:1, display: 'block' ,top:-100,left:-165,scaleX: .7,scaleY: .7, ease: Quad.easeOut});

    TweenLite.to(f5_img1, 1, {opacity:1, display: 'block', delay: .5, ease: Quad.easeOut});
    TweenLite.to(f5_img2, 1, {opacity:1, display: 'block',top:0, delay: .5, ease: Quad.easeOut});
    TweenLite.to(cta,1, {opacity:1, display: 'block',top:0, delay: .5, ease: Quad.easeOut});
  }
};
BanTimeline.init();