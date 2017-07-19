var manifest = {
  "albums": [
    {
      "name": "The Blind - The Blind",
      "date": "October 31, 2016",
      "form": "Digital",
      "img": "the_blind.jpg",
      "url": "https://peconic.bandcamp.com/album/the-blind"
    },
    {
      "name": "Design Fragmentation - Sean C. Stevens",
      "date": "June 3, 2016",
      "form": "Compact Disk",
      "img": "design_fragmentation.jpg",
      "url": "https://peconic.bandcamp.com/album/design-fragmentation"
    },
    {
      "name": "Untitled96 - Townsend Madix",
      "date": "May 13, 2016",
      "form": "Cassette Tape",
      "img": "Untitled96.jpg",
      "url": "https://peconic.bandcamp.com/album/untitle96"
    },
    {
      "name": "Cameron - Cameron",
      "date": "March 11, 2016",
      "form": "Cassette Tape",
      "img": "cameron.jpg",
      "url": "https://peconic.bandcamp.com/album/cameron"
    },
    {
      "name": "Beach Glass - Travis Corwin" ,
      "date": "February 12, 2016",
      "form": "Cassette Tape",
      "img": "beach_glass.jpg",
      "url": "https://peconic.bandcamp.com/album/beach-glass"
    },
    {
      "name": "Birds of Paradise - Travis Corwin & Sean C. Stevens",
      "date": "October 1, 2013",
      "form": "Cassette Tape",
      "img": "birds_of_paradise.jpg",
      "url": "https://peconic.bandcamp.com/album/birds-of-paradise-vol-1"
    },
  ]
};

$(function() {
  var albums = manifest.albums;
  albums.forEach(function(album) {
     $(".albums").append(
      "<div class='col-xs-12'>" +
        "<img class='album-art' src='assets/"+album.img+"'>" +
        "<div class='infoBox'>" +
          "<div>" + album.name + "</div>" +
          "<div>" + album.date + "</div>" +
          "<div class='textBuffer'></div>" +
          "<div>" +
            "<span class='left'>" + album.form + "</span>" +
            "<span class='right'><a href='" + album.url + "'>Listen</a></span>" +
          "</div>" +
        "</div>" +
      "</div>"
      );

  });

});

$(document).ready(function(){
  // Set infoBox width to size of album art
  var imgWidth = $('.album-art').width();
  $('.infoBox').width(imgWidth);
  // Enable stickines.
  $("#sticker").sticky({topSpacing:0});
});
