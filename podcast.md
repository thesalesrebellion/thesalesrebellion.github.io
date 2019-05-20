---
title: Podcast
permalink: /podcast/
section: podcast inverse
heading: "**The Sales Rebellion Podcast.**"
subheading: "Join Dale Dupree and Jeffery Villegas as they discuss ideas, tell sales stories, and share their vision for The Sales Rebellion with you!"
podcast-services:
  - title: Selling Local Podcast on iTunes
    link: "https://itunes.apple.com/us/podcast/selling-local-stories-tips-service/id1360290531?mt=2"
    image: "/img/podcast-apple.svg"
  - title: Selling Local Podcast on Spotify
    link: "https://open.spotify.com/show/6vggsDkQyAuOgsUciBNj9E"
    image: "/img/podcast-spotify.png"
  - title: Selling Local Podcast on Google Play
    link: "https://play.google.com/music/m/I6nr6unquvf7iq3saaovthqerwu?t=Selling_Local_Stories__Tips__Service"
    image: "/img/podcast-google.svg"
guest-posts:
  - title: How to Sell More with Dale Dupree
    podcast: FAE 005
    link: "https://freelancersandentrepreneurs.com/episode5/"
---

<div class="row">
  <div class="column medium-8 medium-offset-2 text-center">
    <h1 class="text-xlarge">{{ page.heading | markdownify | remove: '<p>' | remove: '</p>' }}</h1>
    <p>{{ page.subheading }}</p>
  </div>
</div>
<div class="row small-up-1 large-up-3 text-center" style="margin-bottom:50px;margin-top:50px">
  {% for service in page.podcast-services %}
  <div class="column column-block">
    <a aria-label="{{ service.title }}" href="{{ service.link }}" target="_blank"><img alt="{{ service.title }}" style="margin-bottom:20px;width:200px" src="{{ service.image }}" /></a>
  </div>
  {% endfor %}
</div>
<div class="row" style="margin-bottom:100px">
  <div class="player column medium-8 medium-offset-2">
    <hr />
    <div class="column medium-4">
      <img class="podcast-image" src="" />
    </div>
    <div class="column medium-8">
      <h3>Latest Episode</h3>
      <a class="podcast-play"><img id="podcast-state" src="/img/icon-red-play.png" /></a>
      <audio id="podcast">Your browser does not support the audio element.</audio>
      <div class="podcast-title"></div>
      <p class="podcast-description"></p>
    </div>
  </div>
</div>
<div class="row" style="margin-bottom:100px">
  <div class="column medium-8 medium-offset-2">
    <h2 style="font-size:24px;font-weight:bold">Dale's Guest Appearances.</h2>
    {% for post in page.guest-posts %}
    <div>
      <div style="font-size:18px;margin-bottom:10px"><strong>{{ post.podcast }}:</strong> {{ post.title }}</div>
      <a class="special" target="_blank" href="{{ post.link }}">Listen Here!</a>
    </div>
    {% endfor %}
  </div>
</div>
