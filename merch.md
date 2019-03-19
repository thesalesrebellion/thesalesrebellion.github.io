---
title: Merch
permalink: /merch/
section: merch
items:
  - title: Product Title Lorem Ipsum
    price: $29
    link: "https://thesalesrebellion.teachable.com/"
    image: https://place-hold.it/640x420
  - title: Product Title Lorem Ipsum
    price: $29
    link: "https://thesalesrebellion.teachable.com/"
    image: https://place-hold.it/640x420
  - title: Product Title Lorem Ipsum
    price: $29
    link: "https://thesalesrebellion.teachable.com/"
    image: https://place-hold.it/640x420
  - title: Product Title Lorem Ipsum
    price: $29
    link: "https://thesalesrebellion.teachable.com/"
    image: https://place-hold.it/640x420
  - title: Product Title Lorem Ipsum
    price: $29
    link: "https://thesalesrebellion.teachable.com/"
    image: https://place-hold.it/640x420
  - title: Product Title Lorem Ipsum
    price: $29
    link: "https://thesalesrebellion.teachable.com/"
    image: https://place-hold.it/640x420
---

<div class="row" style="margin-bottom:100px">
  <div class="column medium-8 medium-offset-2 inverse text-center">
    <h1 class="text-xlarge">Who you are is not just from 8am to 5pm, or afterhours. <strong>Rebellion is a lifestyle.</strong></h1>
  </div>
</div>
<div style="background-color:#fff;padding-top:40px">
  <div class="row small-up-1 medium-up-2 medium-up-3 medium-8 medium-offset-2" style="padding-bottom:100px">
    {% for item in page.items %}
    <div class="column column-block">
      <div class="container">
        <img src="{{ item.image }}" />
        <div class="price">{{ item.price }}</div>
        <div style="padding:30px">
          <h2 style="font-size:18px;font-weight:500"><a href="{{ item.link }}">{{ item.title }}</a></h2>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
{% include join-block.html %}
