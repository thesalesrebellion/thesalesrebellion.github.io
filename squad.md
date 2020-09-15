---
title: Rebel Squadron
permalink: /squad/
section: about inverse
leader:
  name: Dale Dupree
  details: '<p>Dale Dupree is an exemplary model of what it means to Be Yourself. He embodies practicing what you preach and isn’t afraid to own his mistakes. With enough love to pass around, Dale takes having a passion for life serious. Cultivated by courage and fueled by sincerity, Dale was raised to be extraordinary. He has picked up the torch, left to him by his father, and uses it to light the way for himself as well as others. For him, The Sales Rebellion is the fruition of a decade of waking up every morning determined to know true success.</p>
  <h2 class="text-xlarge" style="margin-bottom:30px">Dale’s Mission Statement</h2>
  <p>In 1984 my Father opened the doors to his copier firm and the gateway to my sales career. And, in 1985 I was born with toner pulsing through my veins. The Copier Warrior slowly shed his skin over 13+ years and evolved into the Leader of The Sales Rebellion. It is my mission to continually honor my Father’s legacy whom I lost to cancer, through my sales training career. I wield a sword to fight against poor cold call efforts, bad sales experiences, depleted pipelines, and to protect integrity and values as the root of my relationships with my clients and prospects. My purpose is to give other sales professionals confidence to lead the charge for change in their respective industries. Just as I exist to #ChangeTheGame and Rebel against the status quo of the sales world. Some choose a paradise untouched by others, an easy, quiet life that allows consistency and complacency, they reach the mountaintop, breathe in its glory, build their home and settle. But beyond that mountaintop lies the unknown, the darkest valleys, and treasures untouched. Because of this, I choose legendary.</p>'
  image: /img/dale.jpg
  title: Leader of the Sales Rebellion
  subtitle: The Rebel Leader
  phone: (407) 719 2844
  email: Dale@TheSalesRebellion.com
  socials:
    - link: https://www.facebook.com/copierwarrior
      image: "fab fa-facebook"
    - link: https://www.linkedin.com/in/copierwarrior/
      image: "fab fa-linkedin"
    - link: https://www.instagram.com/salesrebellion/
      image: "fab fa-instagram"
    - link: https://twitter.com/SalesRebellion
      image: "fab fa-twitter"
    - link: "tel:4077192844"
      image: "fas fa-phone"
    - link: "mailto:dale@thesalesrebellion.com"
      image: "far fa-envelope"
redirect_from:
  - /about/
---

<div class="row" style="margin-bottom:40px">
  <div class="column medium-6">
    <h2 class="text-center">{{ page.leader.title }}</h2>
    <div class="row">
      <div class="column" style="padding-left:0;margin-bottom:20px">
        <div style="background-color: #FE1643;box-shadow: 0 0 5px #FE1643, 0 0 25px #FE1643">
          <div class="row">
            <div class="column small-5">
              <img src="{{ page.leader.image }}" style="padding:7px;width:100%" alt="{{ page.leader.image }}" />
            </div>
            <div class="column small-7">
              <h1>{{ page.leader.name }}</h1>
              <p class="text-center">{{ page.leader.subtitle }}</p>
              <div class="social">
                {% for social in page.leader.socials %}
                <a aria-label="" href="{{ social.link }}"><i class="{{ social.image }}"></i></a>
                {% endfor %}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column" style="padding-left:0">
        <a href="https://calendly.com/thecopierwarrior" class="button secondary red ghost" style="font-weight:bold;max-width:100%">BOOK MEETING</a>
      </div>
    </div>
  </div>
  <div class="column medium-6" style="padding-right:0;margin-top:12px">
    <div style="background-color: #FE1643">
      <div class="youtube">
        <a><img src="/img/icon-red-play.png" alt="Play button"></a>
        <iframe id="dale-video" class="video" style="display:none" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/hH0SwbOPbR4?enablejsapi=1"></iframe>
      </div>
    </div>
  </div>
</div>
<div class="row" style="margin-bottom:80px">
  <div class="column" style="background-color:#FE1643;box-shadow: 0 0 5px #FE1643, 0 0 25px #FE1643;height:400px;overflow:auto;padding:60px 40px">
    <h3>About {{ page.leader.name }}</h3>
    {{ page.leader.details }}
  </div>
</div>
<div style="background-color: #276FF1">
  <div class="row" style="margin-bottom:80px;padding-top:40px">
    <div class="column">
      <h3 class="text-center">Choose your rebel</h3>
      <p class="text-center" style="font-size:24px;margin:0 auto;max-width:900px">Learn the Rebellion System, get personalized coaching and take your sales game to a legendary level!</p>
    </div>
  </div>
  <div class="row rebels">
    <div class="column">
      <div class="row small-up-2 medium-up-3 large-up-5">
        {% for rebel in site.data.squad %}
        <div class="column column-block">
          <a href="#">
            <img src="{{ rebel.image_hover }}" class="img-top" alt="{{ rebel.name }}" />
            <img src="{{ rebel.image }}" alt="{{ rebel.name }}" />
          </a>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
  <div class="row selected-rebel" style="background-image: url({{ site.data.squad[0].image_big }})">
    <div class="column medium-8 medium-push-4">
      <div class="youtube show-for-large">
        <a><img src="/img/icon-red-play.png" alt="Play button"></a>
        <iframe id="rebel-video" class="video" style="display:none" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/hH0SwbOPbR4?;enablejsapi=1"></iframe>
      </div>
      <div class="row hide-for-large">
        <div class="column small-5">
        &nbsp;
        </div>
        <div class="column small-7">
          <div class="rebel--social">
            {% for social in site.data.squad[0].socials %}
            <a aria-label="" href="{{ social.link }}"><i class="{{ social.image }}"></i></a>
            {% endfor %}
          </div>
          <div class="rebel--info">
            <div class="row column rebel--name">{{ site.data.squad[0].name | upcase }}</div>
            <div class="row column rebel--title">{{ site.data.squad[0].title }}</div>
            <div class="rebel--specialty">{{ site.data.squad[0].specialty }}</div>
          </div>
        </div>
      </div>
      <div class="row column hide-for-large">
        <a href="#" class="button--green">Book Now!</a>
      </div>
    </div>
  </div>
  <div class="row rebel--detail show-for-large">
    <div class="column medium-3" style="padding:0">
      <a href="#" class="button--green">Book Now!</a>
    </div>
    <div class="column medium-7">
      <div class="rebel--info"><span class="rebel--name">{{ site.data.squad[0].name | upcase }}</span> &#8226; <span class="rebel--title">{{ site.data.squad[0].title }}</span> &#8226; <span class="rebel--specialty">{{ site.data.squad[0].specialty }}</span></div>
    </div>
    <div class="column medium-2">
      <div class="rebel--social float-right">
        {% for social in site.data.squad[0].socials %}
        <a aria-label="" href="{{ social.link }}"><i class="{{ social.image }}"></i></a>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
