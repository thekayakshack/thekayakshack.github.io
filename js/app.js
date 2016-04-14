$(document).ready(function() {
  $('.memories').find('.polaroid').each(function(i){
    var $polaroid = $(this);

    // Attach the frame (overflow hidden)
    var frame = document.createElement('div');
    var $frame = $(frame);
    $frame.addClass('frame').appendTo($polaroid);

    // Attach the image
    var image = document.createElement('img');
    $(image).attr('src', $polaroid.data('src')).appendTo($frame).load(function(){
      // Trigger developer to fade
      // Random delay, random length
      $frame.addClass('loaded')
    });
  });
});
