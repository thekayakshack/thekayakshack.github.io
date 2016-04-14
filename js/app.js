$(document).ready(function() {
  $('.memories').find('.polaroid').each(function(i){
    $polaroid = $(this);

    // Attach the frame (overflow hidden)
    frame = document.createElement('div');
    $frame = $(frame);
    $frame.addClass('frame').appendTo($polaroid);

    // Attach the image
    image = document.createElement('img');
    $(image).attr('src', $polaroid.data('src')).appendTo($frame).load(function(){
      // Trigger developer to fade
      // Random delay, random length
      $frame.addClass('loaded')
    });
  });
});
