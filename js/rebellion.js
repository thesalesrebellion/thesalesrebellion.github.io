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

$('.rebels a').on('click', function(e) {
  e.preventDefault();
  var index = $('.rebels a').index($(this));

  $.getJSON('/squad.json', function(data) {
    var rebel = data[index];
    $('.selected-rebel').attr('style', 'background-image: url("' + rebel.image_big + '")');
    $('.rebel--name').html(rebel.name.toUpperCase());
    $('.rebel--title').html(rebel.title);
    $('.rebel--specialty').html(rebel.specialty);
    $('.about .button--green').attr('href', rebel.booking_link);
    $('.selected-rebel .button--green').attr('href', rebel.booking_link);
    var $socials = $('.rebel--social');

    $('.selected-rebel .youtube .video').hide();
    var videoId = rebel.video.split('/').slice(-1)[0].split('?')[0];
    players['rebel-video'].cueVideoById(videoId);
    $('.youtube a').show();

    $socials.empty()
    $.each(rebel.socials, function(key, social) {
      $socials.append('<a aria-label="" href="' + social.link + '"><i class="' + social.image + '"></i></a>');
    });
  });
});

function onYouTubeIframeAPIReady() {
  players = []
  $('.video').each(function() {
    players[this.id] = new YT.Player(this.id, {
      videoId: 'hH0SwbOPbR4',
      width: '100%',
      height: '100%',
      playerVars: {
        end: 0, autoplay: 0, loop: 0, controls: 0, showinfo: 0, modestbranding: 1, fs: 0, cc_load_policty: 0, iv_load_policy: 3, autohide: 0
      }, events: {
        'onReady': onPlayerReady
      }
    });
  });

  function onPlayerReady(event) {
    $('#' + event.target.f.id).parent().find('a').on('click', function() {
      var overlay = $(this);
      var video = overlay.parent().find('.video');

      overlay.hide();
      video.show();
      event.target.playVideo();
    });
  }
}
