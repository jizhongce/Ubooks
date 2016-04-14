jQuery(document).ready(function() {
  var navO = jQuery("#headerbar").offset().top;
  jQuery("#hideheaderbar").addClass("hidden");
  jQuery("#hideheaderbar").addClass("zeroopa");
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
});
