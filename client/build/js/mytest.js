jQuery(document).ready(function() {
  var navO = jQuery("#headerbar").offset().top;
  jQuery(window).scroll(function(){
    var scrollpos = jQuery(window).scrollTop();
    if(scrollpos >= navO){
      jQuery("#headerbar").addClass("myfix");
      jQuery("#headerbar").addClass("opa");
    } else {
      jQuery("#headerbar").removeClass("myfix");
      jQuery("#headerbar").removeClass("opa");
    }
  });
});
