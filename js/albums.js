$(document).ready(function(){
  // Set infoBox width to size of album art
  var imgWidth = $('.album-art').width();
  $('.infoBox').width(imgWidth);
  $('.nav').affix({offset: {top: 200} });
});

$( window ).resize(function() {
  var imgWidth = $('.album-art').width();
  $('.infoBox').width(imgWidth);
});
