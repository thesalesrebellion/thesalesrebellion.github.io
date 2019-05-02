---
title: About
permalink: /about/
section: about inverse
heading: "**Add a title here for this section**"
body: |-
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula, sem at condimentum hendrerit, turpis nibh consequat massa, pretium facilisis justo sem a tellus.

  Mauris quis nibh dapibus, pharetra quam vitae, scelerisque diam. Morbi vitae dictum tellus. Donec tortor risus, vulputate et sagittis ac, commodo ac lectus. Mauris in urna diam. Praesent massa lectus, feugiat ac commodo vitae, egestas et orci. Fusce dapibus varius dictum.

  Mauris quis nibh dapibus, pharetra quam vitae, scelerisque diam. Morbi vitae dictum tellus. Donec tortor risus, vulputate et sagittis ac, commodo ac lectus. Mauris in urna diam. Praesent massa lectus, feugiat ac commodo vitae, egestas et orci. Fusce dapibus varius dictum.
members:
  - name: Dale Dupree
    image: /img/dale.jpg
    title: Leader of the Sales Rebellion
    phone: (409) 791 2844
    email: Dale@TheSalesRebellion.com
    socials:
      - link: https://www.facebook.com
        image: "fab fa-facebook"
      - link: https://www.linkedin.com
        image: "fab fa-linkedin"
      - link: https://www.instagram.com
        image: "fab fa-instagram"
      - link: https://www.twitter.com
        image: "fab fa-twitter"
  - name: Jeff Villegas
    image: /img/jeff.jpg
    title: Co Founder of the Sales Rebellion
    phone: (409) 791 2844
    email: Jeff@TheSalesRebellion.com
    socials:
      - link: https://www.facebook.com
        image: "fab fa-facebook"
      - link: https://www.linkedin.com
        image: "fab fa-linkedin"
      - link: https://www.instagram.com
        image: "fab fa-instagram"
      - link: https://www.twitter.com
        image: "fab fa-twitter"
---

<div class="row" style="padding:80px 0">
  <div class="column large-6 large-offset-3">
    <div class="row large-up-2">
      {% for member in page.members %}
      <div class="column column-block">
        <div class="about">
          <img src="{{ member.image }}" />
          <div class="name">{{ member.name }}</div>
          <div class="title">{{ member.title }}</div>
          <div class="phone">{{ member.phone}}</div>
          <div class="email"><a href="{{ member.email }}">{{ member.email }}</a></div>
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
    <h1 class="text-xlarge" style="margin-bottom:30px">{{ page.heading | markdownify | remove: '<p>' | remove: '</p>' }}</h1>
    <p>{{ page.body | markdownify }}</p>
  </div>
</div>
