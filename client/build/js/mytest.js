jQuery(document).ready(function() {
  var navO = jQuery("#headerbar").offset().top;
  jQuery("#hideheaderbar").addClass("hidden");
  jQuery(window).scroll(function(){
    var scrollpos = jQuery(window).scrollTop();
    if(scrollpos >= (navO)){
      jQuery("#headerbar").addClass("zeroopa");
      jQuery("#hideheaderbar").addClass("myfix");
      jQuery("#hideheaderbar").addClass("opa");
      jQuery("#hideheaderbar").removeClass("hidden");
    } else {
      jQuery("#headerbar").removeClass("zeroopa");
      jQuery("#hideheaderbar").addClass("hidden");
      jQuery("#hideheaderbar").removeClass("myfix");
      jQuery("#hideheaderbar").removeClass("opa");
    }
  });
});
