$('.podcast').ready(function() {
  var feed = 'https://copierwarrior.libsyn.com/rss';

  $.ajax(feed, {
    success:function(data) {
      $latest = $(data).find('item').first();
      $player = $('.player');

      audio = $latest.find('enclosure').attr('url');
      title = $latest.find('title').text();
      description = $latest.find('description').text();
      image = $latest.find('itunes\\:image').attr('href');

      $('.podcast-title', $player).html(title);
      $('.podcast-description', $player).html(description);
      $('.podcast-image', $player).attr('src', image);
      $('audio', $player).append('<source src="' + audio + '" type="audio/mpeg">')
    }
  });

  $('.podcast-play').on('click', function() {
    var podcast = document.getElementById('podcast');
    if (podcast.paused) {
      $('#podcast-state').attr('src', '/img/icon-red-pause.png');
      podcast.play();
    } else {
      $('#podcast-state').attr('src', '/img/icon-red-play.png');
      podcast.pause();
   }
  });
});

$('.vimeo a').on('click', function() {
  $(this).hide();
  $iframe = $('.vimeo iframe');
  var player = new Vimeo.Player('video');
  player.play();
  $iframe.show();
})
