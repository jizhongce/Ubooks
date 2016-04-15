jQuery(document).ready(function() {
  var navO = jQuery("#headerbar").offset().top;

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
    jQuery("#bodyid").animate({scrollTop: 0}, 300);
    return false;
  });
});
