// smooth-scroll.js
smoothScroll.init();

// magnific popup
$(document).ready(function() {
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default l & r margin
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 200 // don't forget to change the duration also in CSS
    }
  });

  $('.video-popup').magnificPopup({
    //disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});

// headroom.js
var header = document.querySelector("#home");
if(window.location.hash) {
  header.classList.add("slide--up");
}

var headroom = new Headroom(header, {
  tolerance: {
    down : 5,
    up : 5
  },
  offset : 60,
  classes: {
    initial: "slide",
    pinned: "slide--reset",
    unpinned: "slide--up"
  }
});

headroom.init();
