jQuery(document).ready(function() {
  var wheight = jQuery(window).height();
  jQuery("#hellopic0").height(wheight);
  jQuery("#hellopic1").height(wheight);
  jQuery("#hellopic2").height(wheight);
  var myindex = 0;

  var wwidth = jQuery(window).width();
  var position1 = (wwidth-500)/2*100/wwidth;
  var position2 = (wwidth-110)/2*100/wwidth;
  var position3 = (wwidth-300)/2*100/wwidth;
  var position4 = (wwidth-40)/2*100/wwidth;
  var hrposition = (wwidth-610)/2*100/wwidth;
  jQuery("#secbody").css("padding-top", wheight);
  jQuery("#hellomsg").css("left",position1 + "%");
  jQuery("#startbtn").css("left",position2 + "%");
  jQuery("#fastdiv").css("left",position3 + "%");
  jQuery("#downspan").css("left",position4 + "%");
  jQuery("#hellohr").css("left",hrposition + "%");

  setTimeout(function(){jQuery("#fontin").fadeIn(4000);},500);
  setTimeout(function(){jQuery("#fast").fadeIn(3500);},2000);
  setTimeout(function(){jQuery("#startbtn").fadeIn(3000);},3500);
  setTimeout(function(){jQuery("#downspan").fadeIn(3000);},3500);

  var navO = jQuery("#headerbar").offset().top;
  var navtop = jQuery("#fixheader").offset().top;
  jQuery(window).scroll(function(){
    var scrollpos = jQuery(window).scrollTop();

    if(scrollpos >= (navO)){
      jQuery("#headerbar").addClass("myfix");
      jQuery("#headerbar").addClass("opa");
      jQuery("#hideheaderbar").removeClass("hidden");
    } else {
      jQuery("#headerbar").removeClass("myfix");
      jQuery("#headerbar").removeClass("opa");
      jQuery("#hideheaderbar").addClass("hidden");
    }
  });

  jQuery("#playbmusic").click(function(){
      jQuery("#bmusic").trigger("play");
      jQuery("#playbmusic").addClass("hidden");
      jQuery("#pausebmusic").removeClass("hidden");
  });
  jQuery("#pausebmusic").click(function(){
      jQuery("#bmusic").trigger("pause");
      jQuery("#playbmusic").removeClass("hidden");
      jQuery("#pausebmusic").addClass("hidden");
  });

  jQuery("#gotop").click(function(){
    jQuery("#bodyid").animate({scrollTop: navtop}, 300);
    return false;
  });
  jQuery("#startbtn").click(function(){
    jQuery("#bodyid").animate({scrollTop: navtop}, 200);
    return false;
  });
  jQuery("#downspan").click(function(){
    jQuery("#bodyid").animate({scrollTop: navtop}, 200);
    return false;
  });

  jQuery("#switchtest").click(function(){
    jQuery("#hellopic" + myindex).fadeOut(1000);
    myindex = (myindex+1)%3;
    jQuery("#hellopic" + myindex).fadeIn(1000);
    return false;
  });
  jQuery("#switchtestR").click(function(){
    jQuery("#hellopic" + myindex).fadeOut(1000);
    if((myindex-1) < 0)
      myindex = 2;
    else
      myindex = (myindex-1)%2;
    jQuery("#hellopic" + myindex).fadeIn(1000);
    return false;
  });

});
