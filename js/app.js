$(document).ready(function() {
  $('.memories').find('.polaroid').each(function(i){
    var $polaroid = $(this);
    var delay = i * (1000 - Math.round(Math.random() * 100));

    // Attach the frame (overflow hidden)
    var frame = document.createElement('div');
    var $frame = $(frame);
    $frame.addClass('frame').appendTo($polaroid);

    // Attach the image
    var image = document.createElement('img');
    $(image).attr('src', $polaroid.data('src')).appendTo($frame).load(function(){
      var timeout = window.setTimeout(function() {
        $frame.addClass('loaded');
        window.clearTimeout(timeout);
      }, delay);
    });

    // Attach the label
    if ($polaroid.data('year')) {
      var label = document.createElement('div');
      $(label).addClass('label').text($polaroid.data('year')).appendTo($polaroid);
    }
  });
});
