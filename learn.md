---
title: Learn
permalink: /learn/
section: learn overlay
heading: "**Revolutionize your Sales Outlook.**"
subheading: |-
  The Copier Warrior’s sales curriculum has been locked away from the world, until now. We have gathered this knowledge and created valuable learning lessons just for you.

  Ancient scrolls contain wisdom for the few and digital transmissions relay vital encrypted information. But these courses have been deciphered so you can change the game. They carry immense value for all who are willing to light their torch and join the Rebellion.
courses:
  - title: Roots
    price: $329
    link: "https://thesalesrebellion.teachable.com/"
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: https://place-hold.it/640x420
    description: Brief description of course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod in enim a placerat. Aliquam eleifend dictum rutrum. Sed at nunc sit amet urna pulvinar aliquam.
  - title: Roots
    price: $329
    link: https://thesalesrebellion.teachable.com/
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: https://place-hold.it/640x420
    description: Brief description of course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod in enim a placerat. Aliquam eleifend dictum rutrum. Sed at nunc sit amet urna pulvinar aliquam.
  - title: Roots
    price: $329
    link: https://thesalesrebellion.teachable.com/
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: https://place-hold.it/640x420
    description: Brief description of course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod in enim a placerat. Aliquam eleifend dictum rutrum. Sed at nunc sit amet urna pulvinar aliquam.
  - title: Roots
    price: $329
    link: https://thesalesrebellion.teachable.com/
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: https://place-hold.it/640x420
    description: Brief description of course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod in enim a placerat. Aliquam eleifend dictum rutrum. Sed at nunc sit amet urna pulvinar aliquam.
  - title: Roots
    price: $329
    link: https://thesalesrebellion.teachable.com/
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: https://place-hold.it/640x420
    description: Brief description of course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod in enim a placerat. Aliquam eleifend dictum rutrum. Sed at nunc sit amet urna pulvinar aliquam.
  - title: Roots
    price: $329
    link: https://thesalesrebellion.teachable.com/
    lesson_count: 7
    length: 3hr 40min
    type: Interrupt Marketing
    image: https://place-hold.it/640x420
    description: Brief description of course. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod in enim a placerat. Aliquam eleifend dictum rutrum. Sed at nunc sit amet urna pulvinar aliquam.
---

<div class="row" style="margin-bottom:80px">
  <div class="column medium-8 medium-offset-2 inverse text-center">
    <h1 class="text-xlarge">{{ page.heading | markdownify | remove: '<p>' | remove: '</p>' }}</h1>
    {{ page.subheading | markdownify }}
  </div>
</div>
<div style="background-color:#fff;padding-top:40px;position:relative">
  <div class="content text-center"><h2>Coming Soon!</h2></div>
  <div class="row small-up-1 medium-up-2 large-up-3 medium-8 medium-offset-2" data-equalizer>
    {% for course in page.courses %}
    <div class="column column-block">
      <div class="container">
        <img alt="" src="{{ course.image }}" />
        {% if course.price %}<div class="price">{{ course.price }}</div>{% endif %}
        <div style="padding:30px">
          <p style="color:#201f1f;font-size:12px;text-transform:uppercase">{{ course.type }}</p>
          <h2 style="font-size:18px;font-weight:500">{{ course.title }}</h2>
          <p style="font-size:16px;margin-bottom:20px">{{ course.description }}</p>
          <a href="{{ course.link }}" class="button" style="margin-bottom:30px">Purchase Course</a>
          <div class="row">
            <div class="column medium-6">
              <p class="lesson">{{ course.lesson_count | pluralize: 'Lesson' }}</p>
            </div>
            <div class="column medium-6">
              <p class="time text-right">{{ course.length }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
{% include join-block.html %}
