---
title: Home
permalink: /
section: home inverse
heading: "It once was a spark. Now, it’s a **Rebellion**. Rise up against the status quo of the sales world... **Join The Sales Rebellion**."
principles:
 - text: "Serve **Others**"
   class: serve
 - text: "Cause **Impact**"
   class: impact
 - text: "No **Robots**"
   class: no-robots
 - text: "Tell **Stories**"
   class: stories
 - text: "Create **Wonder**"
   class: create-wonder
 - text: "Be **Vulnerable**"
   class: be-vulnerable
---

<div style="background:url(/img/bg-triangle.png) no-repeat;background-position:calc(50% + 750px) bottom">
  <div class="row" style="margin-bottom:50px">
    <div class="column medium-8 medium-offset-2">
      <h1 class="text-xlarge text-center" style="margin-bottom:40px">{{ page.heading | markdownify | remove: '<p>' | remove: '</p>' }}</h1>
      <a class="button" style="margin-bottom: 60px" href="/join/">Join the Rebellion</a>
      <p class="watchme">watch me to start your own Rebellion</p>
      <div class="youtube">
        <a><img src="/img/icon-red-play.png" /></a>
        <div id="video" style="display:none"></div>
      </div>
    </div>
  </div>
</div>
<div class="row" style="margin-bottom:50px">
  <div class="column medium-8 medium-offset-2">
    <h2 class="text-center background-text" style="background-image:url('/img/be-a-rebel.svg');margin:0 auto;font-size:26px;width:360px"><strong>Become a leader of the Rebellion,</strong> join now!</h2>
  </div>
</div>
<div style="background:url(/img/bg-bolt.png) no-repeat;background-position:calc(50% - 650px) top">
  <div class="row text-center" style="padding-bottom:80px">
    <div class="column medium-4 medium-offset-2">
      <img alt="Monthly Challenges" src="/img/icon-challenges.png" />
      <h2 style="font-size:20px"><strong>Monthly Challenges</strong></h2>
      <p style="font-size:16px">Elevate your sales existence with a call to action every month that will help push you to the limits of your success. Time to change your game!</p>
    </div>
    <div class="column medium-4 end">
      <img alt="Marketing" src="/img/icon-marketing.png" />
      <h2 style="font-size:20px"><strong>Access to Marketing</strong></h2>
      <p style="font-size:16px">You have heard of The Copier Warrior’s ToolBox. Now gain access to interrupt marketing pieces like The Crumpled Letter and The (Insert product you sell) Survival Kit.</p>
    </div>
  </div>
</div>
<div style="background:url(/img/bg-circle-yellow.png) no-repeat;background-position:calc(50% - 550px) top">
  <div class="row" style="padding-bottom:80px">
    <div class="column medium-8 medium-offset-2">
      <a class="button" href="/join/">Join the Rebellion!</a>
      <hr style="margin-top:120px;max-width:500px" />
    </div>
  </div>
</div>
<div style="background:url(/img/bg-circle-black.png) no-repeat;background-position:calc(50% + 550px) bottom">
  <div class="row">
    <div class="column medium-8 medium-offset-2 text-center">
      <h2 style="font-size:26px">Listen to <strong>The Sales Rebellion Podcast.</strong></h2>
      <p>Join Dale Dupree and Jeffery Villegas as they discuss ideas, tell sales stories, and share their vision for The Sales Rebellion with you!</p>
    </div>
  </div>
  <div class="row small-up-1 large-up-3 text-center" style="margin-bottom:50px;margin-top:50px">
    <div class="column column-block">
      <a aria-label="Selling Local Podcast on iTunes" href="https://itunes.apple.com/us/podcast/selling-local-stories-tips-service/id1360290531?mt=2" target="_blank"><img alt="iTunes Podcast" style="width:200px" src="/img/podcast-apple.svg" /></a>
    </div>
    <div class="column column-block">
      <a aria-label="Selling Local Podcast on Spotify" href="https://open.spotify.com/show/6vggsDkQyAuOgsUciBNj9E" target="_blank"><img alt="Spotify Podcast" style="width:200px" src="/img/podcast-spotify.png" /></a>
    </div>
    <div class="column column-block">
      <a aria-label="Selling Local Podcast on Google Play" href="https://play.google.com/music/m/I6nr6unquvf7iq3saaovthqerwu?t=Selling_Local_Stories__Tips__Service" target="_blank"><img alt="Google Play Podcast" style="width:200px" src="/img/podcast-google.svg" /></a>
    </div>
  </div>
</div>
<div style="background:url(/img/bg-rectangle.png) no-repeat;background-position:calc(50% - 550px) bottom">
  <div class="row" style="margin-bottom:100px">
    <div class="column medium-8 medium-offset-2">
      <h2 style="font-size:26px">What is <strong>The Sales Rebellion</strong></h2>
      <p>We exist to #ChangeTheGame in the ever-so-boring sales bullpen. We teach you to cause undeniable curiosity, wander your territory, breathe life into your pipeline, and take your prospects on an adventure.</p>
      <p>Whether you are an army of one, or a team of 10,000, The Sales Rebellion has something for you! We bring 1x1 Coaching, Team Bootcamps, Public Speaking Engagements, and Sales Curriculum to the next level. You can also join our monthly membership program and sharpen your sales game at your own pace!</p>
    </div>
  </div>
</div>
<div class="row">
  <div class="column medium-8 medium-offset-2">
    <h2 class="text-center background-text" style="background-image:url('/img/rebel-warrior.svg');display:block;font-size:28px;margin-bottom:35px">Principles of a Rebel Warrior</h2>
  </div>
</div>
<div style="background:url(/img/bg-bolt.png) no-repeat;background-position:calc(50% + 650px) bottom;padding-bottom:1px">
  <div class="row small-up-1 medium-up-2 large-up-3 medium-8 medium-offset-2 bg-icons" style="margin-bottom:100px">
    {% for principle in page.principles %}
    <div class="column column-block">
      <p class="{{ principle.class }}">{{ principle.text | markdownify | remove: '<p>' | remove: '</p>' }}</p>
    </div>
    {% endfor %}
  </div>
</div>
{% include join-block.html %}
