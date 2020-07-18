---
title: Rebel Squadron
permalink: /squad/
section: about inverse
members:
  - name: Dale Dupree
    image: /img/dale.jpg
    title: Leader of the Sales Rebellion
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
  - name: Jeff Villegas
    image: /img/jeff.jpg
    title: Co Founder of the Sales Rebellion
    phone: (423) 994 4542
    email: Jeff@TheSalesRebellion.com
    socials:
      - link: https://www.facebook.com/jeffery.villegas.1
        image: "fab fa-facebook"
      - link: https://www.linkedin.com/in/jeffery-villegas-a907a7131/
        image: "fab fa-linkedin"
      - link: https://www.instagram.com/_iamdad_/
        image: "fab fa-instagram"
redirect_from:
  - /about/
---

<div class="row" style="padding:80px 0">
  <div class="column large-6 large-offset-3">
    <div class="row large-up-2">
      {% for member in page.members %}
      <div class="column column-block">
        <div class="about">
          <img src="{{ member.image }}" alt="{{ member.name }}" />
          <div class="name">{{ member.name }}</div>
          <div class="title">{{ member.title }}</div>
          <div class="phone">{{ member.phone}}</div>
          <div class="email"><a href="mailto:{{ member.email }}">{{ member.email }}</a></div>
          <div class="social">
            {% for social in member.socials %}
            <a aria-label="" href="{{ social.link }}"><i class="{{ social.image }}"></i></a>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
</div>
</div>
<div class="row" style="margin-bottom:60px">
  <div class="column medium-8 medium-offset-2">
    <h2 class="text-xlarge" style="margin-bottom:30px">About Dale</h2>
    <p>Dale Dupree is an exemplary model of what it means to Be Yourself. He embodies practicing what you preach and isn’t afraid to own his mistakes. With enough love to pass around, Dale takes having a passion for life serious. Cultivated by courage and fueled by sincerity, Dale was raised to be extraordinary. He has picked up the torch, left to him by his father, and uses it to light the way for himself as well as others. For him, The Sales Rebellion is the fruition of a decade of waking up every morning determined to know true success.</p>
    <h2 class="text-xlarge" style="margin-bottom:30px">Dale’s Mission Statement</h2>
    <p>In 1984 my Father opened the doors to his copier firm and the gateway to my sales career. And, in 1985 I was born with toner pulsing through my veins. The Copier Warrior slowly shed his skin over 13+ years and evolved into the Leader of The Sales Rebellion. It is my mission to continually honor my Father’s legacy whom I lost to cancer, through my sales training career. I wield a sword to fight against poor cold call efforts, bad sales experiences, depleted pipelines, and to protect integrity and values as the root of my relationships with my clients and prospects. My purpose is to give other sales professionals confidence to lead the charge for change in their respective industries. Just as I exist to #ChangeTheGame and Rebel against the status quo of the sales world. Some choose a paradise untouched by others, an easy, quiet life that allows consistency and complacency, they reach the mountaintop, breathe in its glory, build their home and settle. But beyond that mountaintop lies the unknown, the darkest valleys, and treasures untouched. Because of this, I choose legendary.</p>
    <h2 class="text-xlarge" style="margin-bottom:30px">About Jeff</h2>
    <p>Jeff Villegas has a story for the ages, one full of its fair share of ups and downs. His passion for the pursuit of happiness is bar none. He exemplifies perseverance, hard work ethic and family values. Jeff comes from a background in construction which takes creativity and imagination, when providing a unique experience to his clients. Against all the odds, he is pursuing a Bachelor’s Degree which will in turn become a Masters Degree with the end goal of a Ph.D. Jeff has a passion for sharing knowledge and helping others to better themselves in both their professional and personal lives. For him, The Sales Rebellion is the start of a bigger calling.</p>
    <h2 class="text-xlarge" style="margin-bottom:30px">Jeff’s Mission Statement</h2>
    <p>I exist to break down barriers and translate understanding. Foremost, I value myself as an inclusive listener who, through my experiences, has developed a sentiment for the overlooked and undervalued. I seek resolution through solidarity, yet am not afraid to stand alone for what I believe in. Secondly, I appreciate the power of language and make every attempt to be mindful of how I articulate myself, especially when given time to do so. I maintain a strong work ethic and a suiting desire for excellence. I have been shaped by life. Much like tectonic plates shift and create mountains, valleys, rivers and oceans, so have shifts in my mindset created a landscape which is ever changing… My pride lies dead on the mountain, so I walk through the valley while carrying my shadows. But they make me stronger. For when I reach the shore, I shall take my shadows, and make with them a ship. And leave directly into the vast unknowingness, it is there you shall find me. Conquering.</p>
  </div>
</div>
