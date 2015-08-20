/****** flexslider ******/
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    directionNav: false
  });
});
/****** Slick ******/
$(function() {
  $('.camp_slide').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
      arrows: false,
	  speed:800
  });
});
// for IE
jQuery(function() {
    if(navigator.userAgent.indexOf("MSIE") != -1) {
        jQuery('img').each(function() {
            if(jQuery(this).attr('src').indexOf('.png') != -1) {
                jQuery(this).css({
                    'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + jQuery(this).attr('src') + '", sizingMethod="scale");'
                });
            }
        });
    }
});
/* 該当ブラウザをクラスに追加する
---------------------------------------------------------------------*/
function checkBrowser() {
    var ua = navigator.userAgent;
    var isIE = ua.match(/msie/i),
        isIE6 = ua.match(/msie [6.]/i),
        isIE7 = ua.match(/msie [7.]/i),
        isIE8 = ua.match(/msie [8.]/i),
        isIE9 = ua.match(/msie [9.]/i),
        isIE10 = ua.match(/msie [10.]/i),
        isChrome = ua.match(/chrome/i),
        isSafari = ua.match(/safari/i),
        isfireFox = ua.match(/firefox/i),
        isOpera = ua.match(/opera/i);
    if (isIE) {
        $("html").addClass('ie');
        if (isIE6) $("html").addClass('ie6');
        else if (isIE7) $("html").addClass('ie7');
        else if (isIE8) $("html").addClass('ie8');
        else if (isIE9) $("html").addClass('ie9');
        else if (isIE10) $("html").addClass('ie10');
    } else if (isChrome) $("html").addClass('chrome');
    else if (isSafari) $("html").addClass('safari');
    else if (isfireFox) $("html").addClass('firefox');
    else if (isOpera) $("html").addClass('opera');
}
