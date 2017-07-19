$(document).ready(function(){
  // Set infoBox width to size of album art
  var imgWidth = $('.album-art').width();
  $('.infoBox').width(imgWidth);
  // Enable stickines.
  $("#sticker").sticky({topSpacing:0});
});

$( window ).resize(function() {
  var imgWidth = $('.album-art').width();
  $('.infoBox').width(imgWidth);
});
