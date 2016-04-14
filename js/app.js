$(document).ready(function() {
  // Check if $('.memories') is even visible before doing this.
  // Probably want something to happen on resize.
  $('.memories').find('.polaroid').each(function(i){
    var $polaroid = $(this);

    // Attach the frame (overflow hidden)
    var frame = document.createElement('div');
    var $frame = $(frame);
    $frame.addClass('frame').appendTo($polaroid);

    // Attach the image
    var image = document.createElement('img');
    $(image).attr('src', $polaroid.data('src')).appendTo($frame).load(function(){
      var delay = Math.round(Math.random() * 1000);
      var timeout = window.setTimeout(function() {
        $frame.addClass('loaded');
        window.clearTimeout(timeout);
      }, delay);
    });
  });
});
