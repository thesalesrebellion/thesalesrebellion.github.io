---
title: Rebel Base Camp
permalink: /learn/
section: learn overlay
heading: "**Revolutionize your Sales Outlook.**"
subheading: |-
  The Copier Warrior’s sales curriculum has been locked away from the world, until now. We have gathered this knowledge and created valuable learning lessons just for you.

  Ancient scrolls contain wisdom for the few and digital transmissions relay vital encrypted information. But these courses have been deciphered so you can change the game. They carry immense value for all who are willing to light their torch and join the Rebellion.
courses:
  - title: Roots
    price: $350
    link: "https://thesalesrebellion.teachable.com/p/roots"
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: "/img/learn-roots.jpg"
    description: Roots are the “why” of our sales journey. This is the most important part of any salesperson's career. This section dives into what makes people go to work. This section seeks to cultivate a strong understanding of how little things have big impacts on our outcomes.
  - title: R.E.A.S.O.N.
    price: $350
    link: "https://thesalesrebellion.teachable.com/p/reason"
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: "/img/learn-reason.jpg"
    description: REASON is a new outlook on life. This approach is an in-depth look at cold calling in the 21st century. We breakdown the social interaction of a first touch while developing a keen understanding of the assumptions and communication patterns that accompany sales experiences.
  - title: Living Pipeline
    link: "#"
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: "/img/living-pipeline.jpg"
    description: The Living Pipeline is a new way to organize your prospect list. This section develops a strategic approach to how a salesperson communicates with prospects that are not in the 30-day funnel. No matter what your sales cycle length, this approach is sure to be a relationship development tool that you don't want to miss.
    disabled: true
  - title: Xochil Presence
    price: $350
    link: "https://thesalesrebellion.teachable.com/p/xochil-presence"
    lesson_count: 15
    length: 3hr 40min
    type: Interrupt Marketing
    image: "/img/learn-xochil.jpg"
    description: |
      The age of digital transformation is upon us. Knowledge abounds, access is plentiful, and we launch thoughts into cyberspace at hyper speed. For worse or for better social media has transformed the way we communicate and how we are connected. That’s why harnessing its potential can be a game-changer for any sales professional.

      This is your atlas for the digital landscape that must be conquered. Various know-how for traversing this binary terrain and conveying your epic personal brand await you.
  - title: K.N.O.W.
    link: "#"
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: "/img/logo-small.jpg"
    description: This section is about going deeper than the surface level operations of a salesperson’s territory. We address the common approaches to building credibility and teach you to become a Sales Wanderer.
    disabled: true
  - title: Chest O' Wonders
    link: "#"
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: "/img/logo-small.jpg"
    description: This is where the rubber meets the road. Here, the synthesis of sales and marketing is created and the line between the two is destroyed. There is no room for a lag between the marketing department and the sales division.
    disabled: true
  - title: The Social Game
    link: "#"
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: "/img/logo-small.jpg"
    description: This section is all about utilizing social media. We discuss the various platforms and how to create a strategic approach to building business via social media. We cover various demographics of each platform, as well as providing an understanding of the separate metrics and how to judge ROI in a digital space.
    disabled: true
  - title: To Be Continued...
    link: "#"
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: "/img/logo-small.jpg"
    description: More courses to up your sales game coming soon.
    disabled: true
---

<div class="row" style="margin-bottom:80px">
  <div class="column medium-8 medium-offset-2 inverse text-center">
    <h1 class="text-xlarge">{{ page.heading | markdownify | remove: '<p>' | remove: '</p>' }}</h1>
    {{ page.subheading | markdownify }}
  </div>
</div>
<div style="background-color:#fff;padding-top:40px;position:relative">
  <div class="row small-up-1 medium-up-2 large-up-3 medium-8 medium-offset-2" data-equalizer>
    {% for course in page.courses %}
    <div class="column column-block">
      <div class="container" data-equalizer-watch>
        <img alt="" src="{{ course.image }}" />
        {% if course.price %}<div class="price">{{ course.price }}</div>{% endif %}
        <div style="padding:30px">
          <h2 style="font-size:18px;font-weight:500">{{ course.title }}</h2>
          <p style="font-size:16px;margin-bottom:20px">{{ course.description }}</p>
          <div class="spacer"></div>
          {% if course.disabled %}
          <a class="button disabled">Coming Soon</a>
          {% else %}
          <a href="{{ course.link }}" class="button">Purchase Course</a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
{% include join-block.html %}
